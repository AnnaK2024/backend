const loggerBooks = (request, response, next) => {
  console.log("Books");
  next();
};

module.exports = loggerBooks;
