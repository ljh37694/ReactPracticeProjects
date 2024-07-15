const express = require('express');
const cors = require('cors');
const axios = require('axios');
const cookieParser = require('cookie-parser');

// database
const { connectMongoDB } = require('./database/config');

// FavoriteCafes collection functions
const { deleteFavoriteCafe, getFavoriteCafes, addFavoriteCafe } = require('./database/favoriteCafes');
const { signUp, checkIdDuplication } = require('./user/signUp');
const { login, logout, loginSuccess, refreshAccessToken } = require('./user/login');
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

connectMongoDB();

// middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ extended: true }));
app.use(cookieParser());

// server connect
app.listen(PORT, () => {
  console.log('http://localhost:5000 에서 실행 중입니다.');
});

// api
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

app.post("/login", login);

app.post('/logout', logout);

app.get('/login/success', loginSuccess);

app.get('/check/id-duplicate', checkIdDuplication);

app.post("/sign-up", signUp);

app.get('/refresh-token', refreshAccessToken);

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