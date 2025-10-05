const User = require("..//models/user");

const getGreeting = (request, response) => {
  //Приветствие
};

const getUsers = (request, response) => {
  //Список читателей
  return User.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const createUser = (request, response) => {
  //Регистрация нового читателя
  return User.create({ ...request.body })
    .then((user) => {
      response.status(201).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  return User.findById(user_id)
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateUser = (request, response) => {
  //Обновление данных читателя
  const { user_id } = request.params;
  return User.findByIdAndUpdate(user_id, { ...request.body })
    .then((user) => {
      response.status(200).send(user);
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteUser = (request, response) => {
  //Удаление профиля читателя
  const { user_id } = request.params;
  return User.findByIdAndDelete(user_id)
    .then((user) => {
      response.status(200).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = {
  getGreeting,
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
