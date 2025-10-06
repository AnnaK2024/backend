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
      if (!book) {
        return response.status(404).send({ message: "Book not found" });
      }
      response.status(200).send(book);
    })
    .catch((e) => response.status(500).send(e.message));
};

const updateStatusBook = (request, response) => {
  // Обновление статуса книги
  const { book_id } = request.params;
  const { status } = request.body; // Извлекаем только статус из тела запроса

  // Проверяем, что статус валиден
  const validStatuses = ["доступна", "на руках", "удалена"];
  if (!validStatuses.includes(status)) {
    return response
      .status(400)
      .send("Неверный статус. Допустимые: доступна, на руках , удалена");
  }

  return Book.findByIdAndUpdate(
    book_id,
    { status }, // Обновляем только статус
    { new: true } // Возвращаем обновлённый документ
  )
    .then((book) => {
      if (!book) {
        return response.status(404).send("Книга не найдена");
      }
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
  updateStatusBook,
  createBook,
  deleteBook,
};
