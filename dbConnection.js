import mongoose from 'mongoose';

const dbName = 'blog';
const dbPath = 'mongodb://127.0.0.1:27017/';

const dbConnection = async () => {
  mongoose.connect(`${dbPath}${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connection to DB completed');
  });
};

export default dbConnection;
