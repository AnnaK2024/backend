const loggerUsers = (request, response, next) => {
  console.log("Users");
  next();
};

module.exports = loggerUsers;
