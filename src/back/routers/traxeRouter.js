import { Router } from 'express';
import { getDTbyIDKhachhang } from '../controllers/donthueController.js';

const router = Router();

router.get('/donthue', getDTbyIDKhachhang);

export default router;