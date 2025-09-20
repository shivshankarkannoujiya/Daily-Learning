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

export { registerUser, loginUser, verifyUser };
