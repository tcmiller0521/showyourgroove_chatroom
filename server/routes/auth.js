import express from 'express'
import { checkDuplicateEmail, checkDuplicateUsername } from '../middleware/verifySignUp.js';
const router = express.Router();

import { signIn, signUp, updateUser } from '../controllers/auth.js';

router.post( "/signin", signIn);
router.post("/signup", checkDuplicateEmail, checkDuplicateUsername, signUp);
router.patch("/update/:id", updateUser);

export default router;