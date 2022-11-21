const router = require('express').Router();

const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
} = require('../controllers/users');

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
