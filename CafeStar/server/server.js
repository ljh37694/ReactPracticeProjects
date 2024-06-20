const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { MongoClient, ObjectId } = require('mongodb');
require("dotenv").config();

let db;

const PORT = 5000;
const uri = `mongodb+srv://ljh37694:${process.env.DB_PASSWORD}@forum.6p5dx3j.mongodb.net/?retryWrites=true&w=majority&appName=Forum`;
new MongoClient(uri)
  .connect()
  .then((client) => {
    console.log("DB 연결 성공");

    db = client.db("CafeStar");
  })
  .catch(err => console.log(err));

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.listen(PORT, () => {
  console.log('http://localhost:5000 에서 실행 중입니다.');
});

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/search', async (req, res) => {
  await axios({
    method: 'get',
    url: 'https://dapi.kakao.com/v2/local/search/keyword.json?query=음식점 > 카페' + req.query.query,
    headers: {Authorization: `KakaoAK ${process.env.REST_API_KEY}`}
  })
  .then((response) => {
    res.json(response.data.documents);
  })
  .catch((e) => console.log(e));
});

app.get('/favorite-cafes/get', async (req, res) => {
  const data = await db.collection('FavoriteCafes').find().toArray();

  res.send(data);
});

app.post('/favorite-cafes/push', async (req, res) => {
  const result = await db.collection('FavoriteCafes').insertOne({
    ...req.body,
  });
  
  console.log(result);
});

app.delete("/favorite-cafes/delete", async (req, res) => {
  const result = await db.collection('FavoriteCafes').deleteOne({
    id: req.query.id,
  });

  console.log(result);
});