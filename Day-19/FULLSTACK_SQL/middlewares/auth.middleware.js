import jwt from 'jsonwebtoken';

export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.cookies?.token;
        console.log('TOKEN FOUND', token ? 'YES' : 'NO');
        if (!token) {
            return res.status(400).json({
                success: false,
                message: 'Authentication failed',
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth middleware failure');
        return res.status(500).json({
            success: false,
            error,
            message: 'intenal server error',
        });
    }
};
