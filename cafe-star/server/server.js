const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 5000;

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log('http://localhost:5000 에서 실행 중입니다.');
});

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/search', async (req, res) => {
  await axios.get('https://map.kakao.com/link/search/' + req.query.query)
  .then((res) => {
    console.log(res);
  })
});