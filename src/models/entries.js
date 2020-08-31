import mongoose from 'mongoose';

const entriesSchema = new mongoose.Schema({
  entriesTitle: String,
  entriesText: String,
  entriesAuthor: String,
  entriesTags: [String],
});


const Entries = mongoose.model('Entries', entriesSchema);

export default Entries;
