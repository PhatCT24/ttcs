import { Router } from 'express';
import { getThongKeDong } from '../controllers/thongketheodongxeController.js';
import { getThongKeXe } from '../controllers/thongketheoxeController.js';
import { getThongKeKhachHang } from '../controllers/thongkekhachhangController.js';
const router = Router();

router.get('/thongkedongxe', getThongKeDong);
router.get('/thongkexe', getThongKeXe);
router.get('/thongkekh', getThongKeKhachHang);

export default router;