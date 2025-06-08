import { Router } from 'express';
import {login, register, logout} from '../controllers/thanhvienController.js';
import identifier  from '../middlewares/identification.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', identifier, logout)
export default router;