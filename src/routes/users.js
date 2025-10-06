const router = require("express").Router();

const {
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/users", getUsers); //Список читателей
router.post("/users", createUser); //Регистрация нового читателя
router.get("/users/:user_id", getUser); //Профиль читателя
router.patch("/users/:user_id", updateUser); //Обновление данных читателя
router.delete("/users/:user_id", deleteUser); //Удаление профиля читателя

module.exports = router;
