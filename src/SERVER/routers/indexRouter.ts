import express from 'express';
import path from 'path';

const __dirname: string = process.env.PWD || '';
const indexRouter = express.Router();

indexRouter.route('/').get((req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../APP', 'index.html'));
});
indexRouter.route('/:user').get((req, res) => {
  res.status(200).json({ index: 'ok', params: req.params });
});

export default indexRouter;
