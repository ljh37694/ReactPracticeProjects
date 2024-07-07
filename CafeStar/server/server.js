const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;

  console.log(id, pw);
});

app.get("/oauth/kakao/callback", async (req, res) => {
  let tokens = null;

  res.redirect('http://localhost:3000/login/check');

  await axios({
    method: "POST",
    url: 'https://kauth.kakao.com/oauth/token',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    data: {
      grant_type: "authorization_code",
      client_id: process.env.REST_API_KEY,
      redirect_uri: 'http://localhost:5000/oauth/kakao/callback',
      code: req.query.code,
    },
  })
  .then(async(response) => {
    tokens = response.data;
  })
  .catch((e) => console.log(e));

  if (tokens) {
    await axios({
      method: "GET",
      url: "https://kapi.kakao.com/v2/user/me",
      headers: {
        'Authorization': `Bearer ${tokens.access_token}`,
        'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      }
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch(e => console.log(e));
  } else {
    res.send(JSON.stringify({
      status: "logged in",
    }));
  }
});