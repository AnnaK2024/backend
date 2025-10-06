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
    enum: ['available', 'borrowed', 'removed'],  // Только эти значения
    default: 'available',  // По умолчанию доступна
  },
});

module.exports = mongoose.model("book", bookSchema);
