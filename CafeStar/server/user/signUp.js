const bcrypt = require('bcrypt');
const { getCollection } = require('../database/config');

/*
  user = {
    _id: DB자체 id,
    id: user가 입력한 아이디, 중복 X,
    email: 형식에 맞는 이메일,
    password: 영어, 숫자, 특수문자 포함 8자 이상
  }
*/
const signUp = async (req, res) => {
  const { id, email, password } = req.body;

  // password hashing
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  console.log(hashedPassword);

  try {
    // push user data to db
    const result = await getCollection('Users').insertOne({
      id,
      email,
      password: hashedPassword,
    });

    res.status(200).json('Sign up secceed');
    
    console.log(req.body, result);
  } catch (e) {
    console.log(e);
  }
};

const checkIdDuplication = async (req, res) => {
  try {
    const result = await getCollection('Users').findOne({id: req.query.id});

    console.log(result);
  
    res.send({
      isDuplicate: result !== null,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  signUp,
  checkIdDuplication,
};