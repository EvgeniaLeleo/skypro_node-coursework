const dotenv = require('dotenv');

dotenv.config();
const { PORT = 3005, API_URL = 'http://127.0.0.1' } = process.env;

const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', `${API_URL}:${PORT}`);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, HEAD, POST, PATCH, PUT, DELETE',
  );
  next();
};

module.exports = corsMiddleware;
