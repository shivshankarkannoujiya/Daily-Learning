import express from 'express';
import { registerUser, verifyUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.put('/verify/:token', verifyUser);
router.post('/login', loginUser);

export default router;
