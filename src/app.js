const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");
const loggerTow = require("./middlewares/loggerTwo");

dotenv.config();

const app = express();

const { PORT = 3000, API_URL = "http://127.0.0.1" } = process.env;

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
