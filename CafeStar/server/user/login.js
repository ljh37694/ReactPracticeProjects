require("dotenv").config();
const { getCollection } = require("../database/config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Access Token 발급
const getAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
    expiresIn: "1m",
  });

  return accessToken;
};

// Refresh Token 발급
const getRefreshToken = (payload) => {
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {
    expiresIn: "24h",
  });

  return refreshToken;
};

const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    const tokenData = jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);

    const userData = await getCollection('Users').findOne({
      id: tokenData.id,
    });

    const { password, ...others } = userData;

    const newAccessToken = getAccessToken(others);

    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: false,
    });

    res.status(200).json('Access token recreated');
  } catch (e) {
    console.log(e);
  }
};

const login = async (req, res, next) => {
  const { id, pw } = req.body;

  try {
    const result = await getCollection("Users").findOne({
      id: id,
    });

    // id와 일치하는 user data 가져왔는지 확인
    if (result) {
      const { id, email, password } = result;
      const isCorrectPassword = await bcrypt.compare(pw, password);

      // user id와 password가 모두 일치할 때
      if (isCorrectPassword) {
        const payload = {
          id,
          email,
        };

        const accessToken = getAccessToken(payload);
        const refreshToken = getRefreshToken(payload);

        // send to token
        res.cookie("accessToken", accessToken, {
          secure: false,
          httpOnly: true,
        });

        res.cookie("refreshToken", refreshToken, {
          secure: false,
          httpOnly: true,
        });

        res.status(200).json("Login success");
      } else {
        res.status(304).json("Not match password");
      }
      console.log(isCorrectPassword);
    } else {
      res.status(304).json("No user data");
    }
  } catch (e) {
    console.log(e);
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: false,
    });
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: false,
    });
    
    res.status(200).json('Logout success');
  } catch (e) {
    res.status(500).json(e);
  }
};

const loginSuccess = async(req, res) => {
  try {
    const accessToken = req.cookies.accessToken;
    const tokenData = jwt.verify(accessToken, process.env.ACCESS_SECRET_KEY);

    const userData = await getCollection('Users').findOne({
      id: tokenData.id,
    });

    if (userData) {
      res.status(200).json(userData);
    } else {
      res.status(500).json('No user data');
    }
  } catch (e) {
    res.status(500).json(e);
    console.log(e, 'asdfasdf');
  }
};

module.exports = {
  login,
  logout,
  loginSuccess,
  refreshAccessToken,
};
