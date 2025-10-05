const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/backend",
} = process.env;

mongoose.connect(MONGO_URL);
console.log("Connected to MongoDb");

const app = express();

const answers = (request, response) => {
  response.status(200);
  response.send("Добро пожаловть в библиотеку!");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", answers);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Регистрация нового читателя");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
