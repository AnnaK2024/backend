const router = require("express").Router();

const {
  getBooks,
  getBook,
  updateStatusBook,
  createBook,
  deleteBook,
} = require("../controllers/books");

router.get("/books", getBooks); //Список книг
router.get("/books/:book_id", getBook); //Получить определенную книгу по id
router.patch("/books/:book_id", updateStatusBook); //Обновление статуса книги
router.post("/books", createBook); //Добавление книги
router.delete("/books/:book_id", deleteBook); //Удаление книги

module.exports = router;
