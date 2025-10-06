const Book = require("..//models/book");

const getBooks = (request, response) => {
  //Список книг
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.message));
};

const getBook = (request, response) => {
  //Получить определенную книгу по id
  const { book_id } = request.params;
  return Book.findById(book_id)
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateStutusBook = (request, response) => {
  //Обновление статуса книги
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body })
    .then((book) => {
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const createBook = (request, response) => {
  //Добавление книги
  return Book.create({ ...request.body })
    .then((book) => {
      response.status(201).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const deleteBook = (request, response) => {
  //Удаление книги
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id)
    .then((book) => {
      response.status(200).send("Success");
    })
    .catch((e) => response.status(500).send(e.message));
};

module.exports = {
  getBooks,
  getBook,
  updateStutusBook,
  createBook,
  deleteBook,
};
