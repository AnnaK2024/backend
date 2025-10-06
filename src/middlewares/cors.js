const cors = (request, response, next) => {
  console.log(`Запрос по адресу ${request.originalUrl}`);
};

module.exports = cors;
