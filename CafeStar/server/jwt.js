const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

// access token 생성하고 및 return
const generateAccessToken = (payload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h'});

  return token;
};

const refreshAccessToken = (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, secretKey);

    const payload = {
      id: decoded.id,
    };

    const newAccessToken = generateAccessToken(payload);
  }
};