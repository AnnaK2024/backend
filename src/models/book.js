const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 2,
  },
  author: {
    type: String,
    required: true,
    minLength: 2,
  },
  year: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["доступна", "на руках", "удалена"], // Только эти значения
    default: "доступна", // По умолчанию доступна
  },
});

module.exports = mongoose.model("book", bookSchema);
