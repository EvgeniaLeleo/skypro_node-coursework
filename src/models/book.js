const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    minLength: 2,
  },
  author: {
    type: String,
    require: true,
    minLength: 2,
  },
  year: {
    type: Number,
    require: false,
  },
});

module.exports = mongoose.model('books', bookSchema);
