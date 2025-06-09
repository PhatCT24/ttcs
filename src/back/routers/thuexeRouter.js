import { Router } from 'express';
import { getXe, getXeById } from '../controllers/xeController.js';
import { getDichVu } from '../controllers/dichvuController.js';
import { getThechap } from '../controllers/thechapController.js';
import { addDT } from '../controllers/donthueController.js';

const router = Router();

router.get('/xe', getXe);
router.get('/dichvu', getDichVu);
router.get('/xeid', getXeById);
router.get('/thechap', getThechap);
router.post('/adddonthue', addDT);

export default router;