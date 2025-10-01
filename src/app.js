const express = require("express");
const { request } = require("http");

const app = express();

const { PORT = 3000, API_URL = "htpp://127.0.0.1" } = process.env;

app.get("/", (request, response) => {
  response.status(200);
  response.send("Добро пожаловть в библиотеку!");
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
