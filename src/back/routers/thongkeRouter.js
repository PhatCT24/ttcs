import { Router } from 'express';
import { getThongKeDong } from '../controllers/thongketheodongxeController.js';
import { getThongKeXe } from '../controllers/thongketheoxeController.js';
import { getThongKeKhachHang } from '../controllers/thongkekhachhangController.js';
import identifier from '../middlewares/identification.js';
const router = Router();

router.get('/thongkedongxe', identifier, getThongKeDong);
router.get('/thongkexe', identifier, getThongKeXe);
router.get('/thongkekh', identifier, getThongKeKhachHang);

export default router;