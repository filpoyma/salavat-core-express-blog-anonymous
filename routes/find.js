import express from 'express';
import Entries from '../src/models/entries.js';

const router = express.Router();

router.post('/', async (req, res) => {
  let title = 'Найденные новости';
  let allEntries = await Entries.find({ entriesTags: { $regex: req.body.query } });
  res.render('index', { title, allEntries });
});

export default router;
