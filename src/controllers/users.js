const createError = require('http-errors');

const User = require('../models/user');

const getUsers = async (req, res, next) => {
  return User.find({})
    .then((users) => res.status(200).send(users))
    .catch((error) => next(error));
};

const getUser = async (req, res, next) => {
  const { id } = req.params;

  return User.findById(id)
    .then((user) => {
      if (!user) throw createError(404, `User with id ${id} not found`);
      else res.status(200).send(user);
    })
    .catch((error) => next(error));
};

const createUser = async (req, res, next) => {
  const data = req.body;

  return User.create(data)
    .then((user) => res.status(201).send(user))
    .catch((error) => next(error));
};

const updateUser = async (req, resp, next) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, { ...req.body })
    .then(() => {
      User.findById(id).then((user) => resp.status(200).send(user));
    })
    .catch((error) => next(error));
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;

  User.findByIdAndDelete(id)
    .then((user) => {
      if (!user) throw createError(404, `User with id ${id} not found`);
      else res.status(200).send('Done');
    })
    .catch((error) => next(error));
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
