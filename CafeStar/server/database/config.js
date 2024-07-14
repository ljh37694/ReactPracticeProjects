const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://ljh37694:${process.env.DB_PASSWORD}@forum.6p5dx3j.mongodb.net/?retryWrites=true&w=majority&appName=Forum`;

let db = null;

const connectMongoDB = async () => {
  try {
    const client = new MongoClient(uri);

    await client.connect();

    db = client.db("CafeStar");

    console.log("DB 연결 성공");
  } catch (err) {
    console.log(err);
  }
}

const getDB = () => db;

const getCollection = (collection) => db.collection(collection);

module.exports = {
  connectMongoDB,
  getDB,
  getCollection,
};
