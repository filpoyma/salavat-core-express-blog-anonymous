import express from 'express';
import Entries from '../src/models/entries.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const title = 'Добро пожаловать в мой блог!';
  const allEntries = await (await Entries.find()).reverse();
  console.log(allEntries);
  res.render('index', { title, allEntries });
});

export default router;
