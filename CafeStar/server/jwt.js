const jwt = require('jsonwebtoken');
require("dotenv").config();

const secretKey = process.env.JWT_SECRET_KEY;

// access token 생성하고 및 return
const generateToken = (payload, expirationTime) => {
  console.log(secretKey);
  const token = jwt.sign(payload, secretKey, { expiresIn: expirationTime });

  return token;
};

const refreshAccessToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, secretKey);

    const payload = {
      id: decoded.id,
    };

    const newAccessToken = generateToken(payload);

    return newAccessToken;
  } catch (e) {
    console.log(e);

    return null;
  }
};

module.exports = { generateToken, refreshAccessToken };