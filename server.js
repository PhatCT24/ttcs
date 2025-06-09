import express, {json} from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

import thanhvienRouter from './src/back/routers/thanhvienRouter.js';
import thongkeRouter from './src/back/routers/thongkeRouter.js';
import thuexeRouter from './src/back/routers/thuexeRouter.js';
import traXeRouter from './src/back/routers/traxeRouter.js';

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/front')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/front/interface/GDChinhKH.html'));
});

app.get('/khachhang', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/front/interface/GDChinhKH.html')); 
});

app.get('/quanly', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/front/interface/GDChinhQl.html'));
});

app.use('/api/thanhvien', thanhvienRouter);
app.use('/api/thongke', thongkeRouter);
app.use('/api/thuexe', thuexeRouter);
app.use('/api/traxe', traXeRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}); 