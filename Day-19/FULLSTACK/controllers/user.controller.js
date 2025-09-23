import User from '../models/user.model.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: 'All fields are required',
        });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'User already register',
            });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

        if (!user) {
            return res.status(400).json({
                message: 'User not registered',
            });
        }

        console.log(user);

        const token = crypto.randomBytes(32).toString('hex');

        user.verificationToken = token;
        user.verificationTokenExpires = Date.now() + 10 * 60 * 1000;
        await user.save();

        // TODO: send email
        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for 465
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: 'Verify your account !',
            text: 'Plaintext version of the message',
            html: `Please click on the following link:
            ${process.env.BASE_URL}/api/v1/users/verify/${token}
            `,
        };

        // TODO: create /verify route
        // TODO: Take Notes
        // `${req.protocol}://${req.get(`host`)}/api/v1/users/verify/${token}`
        // http://127.0.0.1:3000/api/v1/users/verify/token
        // /verify: const {token} = req.params kr lenge for the matching

        await transporter.sendMail(mailOptions);

        res.status(201).json({
            success: true,
            data: { user },
            message: 'user registered successfully',
        });
    } catch (error) {
        console.error('Something went wrong while registering user');
        return res.status(500).json({
            success: false,
            error,
            message: 'User not registered',
        });
    }
};

const verifyUser = async (req, res) => {
    /*
        Since user will click on the <url> get the <token> from url 
        1. get the token from url
        2. Validate token <Aya ki nhi aya>
        3. Since we have stored the <token> in DB
            - We can find user via <token>
            - if not found: send unauthorized
        4. found: 
            - update field:
                - isVerified: true
            -  remove <verificationToken> from DB
            - save updated user
        5. Send response 
    */

    try {
        const { token } = req.params;
        if (!token) {
            return res.status(400).json({
                message: 'Invalid token',
            });
        }

        const user = await User.findOne({ verificationToken: token });
        if (!user) {
            return res.status(400).json({
                message: 'Invalid token',
            });
        }

        user.isVerified = true;
        user.verificationToken = undefined; // check if => null
        user.verificationTokenExpires = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'user verification success',
        });
    } catch (error) {
        console.error('Something went wrong while verifying user');
        return res.status(500).json({
            success: false,
            message: 'user verifcation failed',
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'All fields are required',
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'Invalid credentials',
            });
        }

        const isPasswordValid = await user.isPasswordCorrect(password);
        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Invalid credentails',
            });
        }

        if (!user.isVerified) {
            return res.status(400).json({
                message: 'Please verify your email',
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES }
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
                    id: user._id,
                    name: user.name,
                    role: user.role,
                },
                token,
                message: 'user loggedIn successfully',
            });
    } catch (error) {
        console.error('Error while login user');
        return res.status(500).json({
            success: false,
            message: 'user login failed',
        });
    }
};

const getMe = async (req, res) => {
    try {
        console.log('REACHED AT PROFILE LEVEL...');
        const user = await User.findById(req.user?.id).select('-password');
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error('');
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const logoutUser = async (req, res) => {
    res.cookie('token', '', {});
    res.status(200).json({
        success: true,
        message: 'User logged out successfully',
    });
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

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid credentials',
            });
        }

        const token = crypto.randomBytes(32).toString('hex');
        const expiresIn = Date.now() + 10 * 60 * 1000;

        user.resetPasswordToken = token;
        user.resetPasswordTokenExpires = expiresIn;
        await user.save();

        const transporter = nodemailer.createTransport({
            host: process.env.MAILTRAP_HOST,
            port: process.env.MAILTRAP_PORT,
            secure: false, // true for 465
            auth: {
                user: process.env.MAILTRAP_USERNAME,
                pass: process.env.MAILTRAP_PASSWORD,
            },
        });

        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/users/reset-password/${token}`;
        const mailOptions = {
            from: process.env.MAILTRAP_SENDEREMAIL,
            to: user.email,
            subject: 'Verify your account !',
            text: `Reset your password using link: ${resetUrl}`,
            html: `<p>Click <a href = "${resetUrl}">here</> to reset your password</p>`,
        };
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Password reset link sent to your email',
        });
    } catch (error) {
        console.error('Forgot Password Error: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const resetUserPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;

        if (!token || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required or token expired',
            });
        }

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordTokenExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'user not found',
            });
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpires = undefined;
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Password reset successfully',
        });
    } catch (error) {
        console.error('RESET PASSWORD FAILED: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

const updateUserProfile = async (req, res) => {
    const { name } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user?.id,
            {
                $set: {
                    name,
                },
            },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: 'user not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'profile update successfully',
        });
    } catch (error) {
        console.error('PROFILE UPDATE FAILED: ', error);
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};

export {
    registerUser,
    loginUser,
    verifyUser,
    getMe,
    logoutUser,
    forgotUserPassword,
    resetUserPassword,
    updateUserProfile,
};
