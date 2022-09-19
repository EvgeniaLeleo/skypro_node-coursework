const createError = require('http-errors');

const Book = require('../models/book');

const getBooks = async (req, res, next) => {
  return Book.find({})
    .then((books) => res.status(200).send(books))
    .catch((error) => next(error));
};

const getBook = async (req, res, next) => {
  const { id } = req.params;

  return Book.findById(id)
    .then((book) => {
      if (!book) throw createError(404, `Book with id ${id} not found`);
      else res.status(200).send(book);
    })
    .catch((error) => next(error));
};

const createBook = async (req, res, next) => {
  const data = req.body;

  return Book.create(data)
    .then((book) => res.status(201).send(book))
    .catch((error) => next(error));
};

const updateBook = async (req, resp, next) => {
  const { id } = req.params;

  Book.findByIdAndUpdate(id, { ...req.body })
    .then(() => {
      Book.findById(id).then((book) => resp.status(200).send(book));
    })
    .catch((error) => next(error));
};

const deleteBook = async (req, res, next) => {
  const { id } = req.params;

  Book.findByIdAndDelete(id)
    .then((book) => {
      if (!book) throw createError(404, `Book with id ${id} not found`);
      else res.status(200).send('Done');
    })
    .catch((error) => next(error));
};

module.exports = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
};
