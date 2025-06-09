import { Router } from 'express';
import { getXe, getXeById } from '../controllers/xeController.js';
import { getDichVu } from '../controllers/dichvuController.js';
import { getThechap } from '../controllers/thechapController.js';
import { addDT } from '../controllers/donthueController.js';
import identifier from '../middlewares/identification.js';

const router = Router();

router.get('/xe', identifier, getXe);
router.get('/dichvu', identifier, getDichVu);
router.get('/xeid', identifier, getXeById);
router.get('/thechap', identifier, getThechap);
router.post('/adddonthue', identifier, addDT);

export default router;