import express from 'express';
import Entries from '../src/models/entries.js';

const router = express.Router();

router.get('/', async (req, res) => {
  res.render('entries');
});

router.post('/', async (req, res) => {
  let tags = req.body.entriesTags.split(',');
  let newEntries = new Entries(req.body);
  await newEntries.save();
  res.redirect('/');
});

export default router;
