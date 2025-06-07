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

app.use(cors());
app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src/front')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/front/interface/mainpage.html'));
});

app.use('/api/thanhvien', thanhvienRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 