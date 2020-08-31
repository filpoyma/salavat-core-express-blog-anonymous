import path from 'path';
import express from 'express';
import dbConnection from './dbConnection.js';
import indexRouter from './routes/index.js';
import entriesRouter from './routes/entries.js';
import editEntriesRouter from './routes/editEntries.js';
import findRouter from './routes/find.js';
import Entries from './src/models/entries.js'

dbConnection();
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.env.PWD, 'public')));


app.use('/', indexRouter);
app.use('/create', entriesRouter);
app.use('/edit_entries', editEntriesRouter);
app.use('/search', findRouter);

app.listen(3005, () => {
  console.log('Server started');
});
