const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const { MongoClient } = require("mongodb");
app.use(express.json());
var cors = require("cors");
app.use(cors());

let db;

const url =
    `mongodb+srv://ljh37694:${process.env.DB_PW}@forum.6p5dx3j.mongodb.net/?retryWrites=true&w=majority`

new MongoClient(url)
    .connect()
    .then((client) => {
        console.log("DB 연결 성공!");
        db = client.db("CarrotMarket");

        // 서버 열기
        app.listen(process.env.PORT, () => {
            console.log("http://localhost:1234 에서 서버 실행 중");
        });
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/post-data", async (req, res) => {
    try {
        const data = await db
            .collection("posts")
            .find()
            .sort({ _id: -1 })
            .toArray();
        res.json(JSON.stringify(data));
    } catch (e) {
        console.log(e);
    }
});

app.post("/write-post", async (req, res) => {
    try {
        const data = await db.collection("posts").insertOne(req.body);
    } catch (e) {
        console.log(e);
    }
});

app.post("/sign-up", async (req, res) => {
    try {
        let userData = req.body;
        const saltRounds = 10;
        userData.password = await bcrypt.hash(userData.password, saltRounds);

        const nickname = await db
            .collection("users")
            .findOne({ nickname: userData.nickname });
        const userId = await db
            .collection("users")
            .findOne({ userId: userData.userId });

        console.log(nickname, userId);

        if (nickname == null && userId == null) {
            await db.collection("users").insertOne({
                nickname: userData.nickname,
                userId: userData.userId,
                password: userData.password,
            });

            res.send("성공");
        } else {
            res.status(400).send("닉네임 또는 아이디가 중복입니다.");
        }
    } catch (error) {
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    const { userId, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ userId: userId });

        if (user == null || !(await bcrypt.compare(password, user.password))) {
            res.status(400).send("아이디 또는 비밀번호가 틀렸습니다.");
        } else {
            const token = jwt.sign(
                {
                    id: user.userId,
                    username: user.nickname,
                },
                process.env.JWT_SECRET,
                { expiresIn: 60 * 10 },
            );

            console.log(token);

            res.json({ token });
        }
    } catch (e) {
        console.log(e);
    }
});
