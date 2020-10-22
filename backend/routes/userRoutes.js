import express, { Router } from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

router.post('/login', authUser);

export default router;