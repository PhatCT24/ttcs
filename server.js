import express, {json} from 'express';

const app = express();

import thanhvienRouter from './src/back/routers/thanhvienRouter.js';

app.use(json());

app.use('/api/thanhvien', thanhvienRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
}); 