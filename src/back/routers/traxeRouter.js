import { Router } from 'express';
import { getDTbyIDKhachhang, traxeKH, traxeNV, giaoxeNV } from '../controllers/donthueController.js';
import identifier from '../middlewares/identification.js';

const router = Router();

router.get('/donthueByID', identifier, getDTbyIDKhachhang);
router.post('/updatetraxeKH', identifier, traxeKH); 
router.post('/updatetraxeNV', identifier, traxeNV); 
router.post('/updategiaoxeNV', identifier, giaoxeNV);

export default router;