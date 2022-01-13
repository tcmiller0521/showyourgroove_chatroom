import express from 'express'
import { checkDuplicateEmail, checkDuplicateUsername } from '../middleware/verifySignUp.js';
const router = express.Router();

import { signIn, signUp } from '../controllers/user.js';

router.post( "/signin", signIn);
router.post("/signup", checkDuplicateEmail, checkDuplicateUsername, signUp);

export default router;