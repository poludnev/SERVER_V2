import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.redirect(`https://${req.headers.host}`);

})

export default router;