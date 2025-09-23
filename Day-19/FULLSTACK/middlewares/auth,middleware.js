import jwt from 'jsonwebtoken';

export const isLoggedIn = async (req, res, next) => {
    try {
        console.log(req.cookies);
        const token = req.cookies?.token;
        console.log('TOKEN FOUND', token ? 'YES' : 'NO');

        if (!token) {
            console.log('NO TOKEN');
            return res.status(401).json({
                success: false,
                message: 'Authentication failed',
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('DECODED DATA: ', decoded);

        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth middleware failure');
        return res.status(500).json({
            success: false,
            error,
            message: 'Internal server error',
        });
    }
};
