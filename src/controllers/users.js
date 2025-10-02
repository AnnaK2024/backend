const User = require("..//models/user");

const getGreeting = (request, response) => {
  //Приветствие
};

const getUsers = (request, response) => {
  //Список читателей
};

const createUser = (request, response) => {
  //Регистрация нового читателя
  return User.create({ ...request.body }).then((user) => {
    response.status(201).send(user);
  });
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

const updateUser = (request, response) => {
  //Обновление данных читателя
};

const deleteUser = (request, response) => {
  //Удаление профиля читателя
};

module.exports = {
  getGreeting,
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
