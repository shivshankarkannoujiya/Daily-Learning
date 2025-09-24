import { PrismaClient, Role } from '@prisma/client';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'user already registered',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const verificationToken = crypto.randomBytes(32).toString('hex');
        const verificationTokenExpiry = new Date(Date.now() + 10 * 60 * 1000);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                verificationToken,
                verificationTokenExpiry,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const verifyUrl = `${req.protocol}://${req.get('host')}/api/v1/users/verify-email/${verificationToken}`;

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: 'Please verify your email',
            text: `Verify your eamil using link: ${verifyUrl}`,
            html: `<p>Click<a href="${verifyUrl}">here</a>to verify your email</p>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            user,
            message: 'user registered successfully',
        });
    } catch (error) {
        console.error('Error registering user: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const verifyUser = async (req, res) => {
    const { token } = req.params;
    try {
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'verification link expired',
            });
        }

        const user = await prisma.user.findFirst({
            where: {
                verificationToken: token,
                verificationTokenExpiry: {
                    gte: Date.now(),
                },
            },
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'verification link expired',
            });
        }

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                isVerified: true,
                verificationToken: undefined,
                verificationTokenExpiry: undefined,
            },
        });

        res.status(200).json({
            success: true,
            message: 'user verification success',
        });
    } catch (error) {
        console.error('user verification failed: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'invalid credentials',
            });
        }

        if (!user.isVerified) {
            return res.status(403).json({
                success: false,
                message: 'Please verify your email before logging in',
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: 'invalid credentials',
            });
        }

        const token = jwt.sign(
            {
                id: user.id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY }
        );

        const cookieOptions = {
            httpOnly: true,
            secure: true,
            maxAge: 24 * 60 * 60 * 1000,
        };

        res.status(200)
            .cookie('token', token, cookieOptions)
            .json({
                success: true,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                message: 'user logged in successfully',
            });
    } catch (error) {
        console.error('user login failed: ', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user?.id,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found',
            });
        }

        res.status(200).json({
            success: true,
            user,
            message: 'user fetched successfully',
        });
    } catch (error) {
        console.error('failed to get user: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const logoutUser = async (req, res) => {
    try {
        res.status(200).cookie('token', '', {}).json({
            success: true,
            message: 'user logged out successfully',
        });
    } catch (error) {
        console.error('user log out failed: ', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const forgotUserPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found',
            });
        }

        const resetPasswordToken = crypto.randomBytes(32).toString('hex');
        const resetPasswordTokenExpiry = new Date(Date.now() + 10 * 60 * 1000);

        await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                resetPasswordToken,
                resetPasswordTokenExpiry,
            },
        });

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false,
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/reset-password/${resetPasswordToken}`;
        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: 'Reset your password',
            text: `Reset your password using link: ${resetUrl}`,
            html: `<p>Click<a href="${resetUrl}">here</a>to reset your password</p>`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({
            success: true,
            message: 'Password reset link sent to your email',
        });
    } catch (error) {
        console.error('Forgot password failed: ', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const resetUserPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required or token expired',
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                resetPasswordToken: token,
                resetPasswordTokenExpiry: {
                    gte: Date.now(),
                },
            },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found',
            });
        }

        const updatedUser = await prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                password,
                resetPasswordToken: undefined,
                resetPasswordTokenExpiry: undefined,
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
            },
        });

        res.status(200).json({
            success: true,
            updatedUser,
            message: 'user password reset successfully',
        });
    } catch (error) {
        console.error('Password reset failed: ', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'name is required',
            });
        }

        await prisma.user.findUnique({
            where: {
                id: req.user?.id,
            },
            data: {
                name,
            },
        });

        res.status(200).json({
            success: true,
            message: 'User profile updated successfully',
        });
    } catch (error) {
        console.error('User profile update failed: ', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export {
    registerUser,
    verifyUser,
    loginUser,
    getMe,
    logoutUser,
    forgotUserPassword,
    resetUserPassword,
    updateUserProfile
};
