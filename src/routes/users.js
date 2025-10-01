const router = require("express").Router();
const loggerTow = require("../middlewares/loggerTwo");

const {
  getGreeting,
  getUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.use(loggerTow)

router.get("/", getGreeting); //Приветствие
router.get("/users", getUsers); //Список читателей
router.post("/users", createUser); //Регистрация нового читателя
router.get("/users/:user_id", getUser); //Профиль читателя
router.patch("/users/:user_id", updateUser); //Обновление данных читателя
router.delete("/users/:user_id", deleteUser); //Удаление профиля читателя

module.exports = router;
