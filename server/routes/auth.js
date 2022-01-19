import express from 'express'
import { checkDuplicateEmail, checkDuplicateUsername } from '../middleware/verifySignUp.js';
const router = express.Router();

import { getUser, signIn, signUp, updateUser } from '../controllers/auth.js';

router.post( "/signin", signIn);
router.post("/signup", checkDuplicateEmail, checkDuplicateUsername, signUp);
router.patch("/update/:id", updateUser);
router.get("/get/:id", getUser);

export default router;