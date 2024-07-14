const express = require('express');
const cors = require('cors');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const { refreshAccessToken, generateToken } = require('./jwt');

// database
const { connectMongoDB } = require('./database/config');

// FavoriteCafes collection functions
const { deleteFavoriteCafe, getFavoriteCafes, addFavoriteCafe } = require('./database/favoriteCafes');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

connectMongoDB();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(cookieParser());

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

app.get('/favorite-cafes/get', getFavoriteCafes);

app.post('/favorite-cafes/push', addFavoriteCafe);

app.delete("/favorite-cafes/delete", deleteFavoriteCafe);

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;

  const payload = { id };

  const accessToken = generateToken(payload, '1h');
  const refreshToken = generateToken(payload, '7d');

  await db.collection('RefreshTokens').insertOne({
    refreshToken,
  });

  res.cookie('tokens', {
    accessToken,
    refreshToken,
  }).redirect('/');

  console.log(id, pw);
});

app.post('/token/refresh', async (req, res) => {
  const ReceivedRefreshToken = req.body.refreshToken;

  try {
    const decodedToken = jwt.verify(ReceivedRefreshToken, process.env.JWT_SECRET_KEY);
    console.log(decodedToken);

    const payload = { id: decodedToken.id };

    const newRefreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '7d' });

    res.json({
      token: newRefreshToken,
    });
  } catch (e) {
    console.log(e);
  }
});

app.get('/check/id-duplicate', async (req, res) => {
  const result = await db.collection('Users').findOne({id: req.query.id});

  console.log(result);

  res.send({
    isDuplicate: result !== null,
  });
});

/*
  user = {
    _id: DB자체 id,
    id: user가 입력한 아이디, 중복 X,
    email: 형식에 맞는 이메일,
    password: 영어, 숫자, 특수문자 포함 8자 이상
  }
*/
app.post("/sign-up", async (req, res) => {
  const { id, email, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log(hashedPassword);

  const result = await db.collection('Users').insertOne({
    id,
    email,
    password: hashedPassword,
  });
  
  console.log(req.body, result);
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