const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const createError = require('http-errors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const loggerMiddleware = require('./middlewares/logger');
const corsMiddleware = require('./middlewares/cors');
const errorsMiddleware = require('./middlewares/errors');

dotenv.config();
const { PORT = 3005, MONGODB_URL, API_URL } = process.env;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(userRoutes);
app.use(bookRoutes);

app.use((req, res, next) => next(createError(400)));
app.use(errorsMiddleware);

app.listen(PORT, () => {
  console.log(`Server is started at ${API_URL}:${PORT}/`);
});
