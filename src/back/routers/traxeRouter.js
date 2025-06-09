import { Router } from 'express';
import { getDTbyIDKhachhang } from '../controllers/donthueController.js';
import identifier from '../middlewares/identification.js';

const router = Router();

router.get('/donthueByID', identifier, getDTbyIDKhachhang);

export default router;