import express from 'express'
import { checkDuplicateEmail, checkDuplicateUsername } from '../middleware/verifySignUp.js';
const router = express.Router();

import { getUser, signIn, signUp, updatePassword, updateUser } from '../controllers/auth.js';

router.post( "/signin", signIn);
router.post("/signup", checkDuplicateEmail, checkDuplicateUsername, signUp);
router.patch("/update/:id", updateUser, checkDuplicateUsername);
router.get("/get", getUser);
router.patch('/update/password/:id', updatePassword)

export default router;