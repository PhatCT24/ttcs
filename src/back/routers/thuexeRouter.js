import { Router } from 'express';
import { getXe } from '../controllers/xeController.js';
import { getDichVu } from '../controllers/dichvuController.js';

const router = Router();

router.get('/xe', getXe);
router.get('/dichvu', getDichVu);

export default router;