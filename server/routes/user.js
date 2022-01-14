import express from 'express'
import { isAdmin, isModerator } from '../middleware/auth.js';
const router = express.Router();

import { allAccess, userBoard, adminBoard, moderatorBoard } from '../controllers/user.js';

router.get('/test/all', allAccess);
router.get('/test/user', userBoard);
router.get('/test/mod', isModerator, moderatorBoard);
router.get('/test/admin', isAdmin, adminBoard);

export default router;