const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const { MongoClient } = require("mongodb");
app.use(express.json());
var cors = require('cors');
app.use(cors());

let db;

const url = "mongodb+srv://ljh37694:hi37694*@forum.6p5dx3j.mongodb.net/?retryWrites=true&w=majority";


new MongoClient(url).connect().then((client) => {
    console.log("DB 연결 성공!");
    db = client.db("CarrotMarket");

    // 서버 열기
    app.listen(1234, () => {
        console.log("http://localhost:1234 에서 서버 실행 중");
    });
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("hi");
});

app.get("/post-data", async (req, res) => {
    try {
        const data = await db.collection("posts").find().sort({ _id : -1 }).toArray();
        res.json(JSON.stringify(data));

    } catch(e) {
        console.log(e);
    }
});

app.post("/write-post", async (req, res) => {
    try {
        const data = await db.collection("posts").insertOne(req.body);
    } catch(e) {
        console.log(e);
    }
});

app.post("/sign-up", async (req, res) => {
    try {
        let userData = req.body;
        const saltRounds = 10;
        userData.password = await bcrypt.hash(userData.password, saltRounds);

        const nickname = await db.collection("users").find({ nickname: userData.nickname }).toArray();
        const userId = await db.collection("users").find({userId: userData.userId }).toArray();

        await db.collection("users").insertOne({
            nickname: userData.nickname,
            userId: userData.userId,
            password: userData.password,
        });

        res.send("성공");
    } catch (error) {
        console.log(error);
    }
});