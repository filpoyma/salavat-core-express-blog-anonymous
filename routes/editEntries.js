import express from 'express';
import Entries from '../src/models/entries.js';

const router = express.Router();

router.get('/:id', async (req, res) => {
  const selectedEntries = await Entries.findOne({ _id: req.params.id });
  // console.log(req.params.id);
  // console.log(selectedEntries.entriesTitle);
  res.render('editEntries', { selectedEntries });
});

router.post('/save', async (req, res) => {
  await Entries.updateOne({ _id: req.body.id }, req.body);
  res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
  await Entries.deleteOne({ _id: req.params.id });
  res.redirect('/');
});
export default router;
