const errorsMiddleware = (error, req, res, next) => {
  const currentError = error.status || 500;
  res.status(currentError);
  res.json(`Error ${currentError}: ${error.message}`);
};

module.exports = errorsMiddleware;
