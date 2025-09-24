import express from 'express';
import {
    registerUser,
    verifyUser,
    loginUser,
    getMe,
    logoutUser,
    forgotUserPassword,
    resetUserPassword,
    updateUserProfile,
} from '../controllers/user.controller.js';
import { isLoggedIn } from '../middlewares/auth,middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.put('/verify/:token', verifyUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotUserPassword);
router.post('/reset-password/:token', resetUserPassword);

router.get('/me', isLoggedIn, getMe);
router.get('/logout', isLoggedIn, logoutUser);
router.post('/update-profile', isLoggedIn, updateUserProfile);

export default router;
