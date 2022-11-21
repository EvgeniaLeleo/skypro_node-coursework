const router = require('express').Router();
const {
  createBook,
  getBook,
  updateBook,
  deleteBook,
  getBooks,
} = require('../controllers/books');

router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/:id', getBook);
router.patch('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
