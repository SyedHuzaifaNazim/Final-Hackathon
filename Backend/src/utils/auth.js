const jwt = require('jsonwebtoken');
require('dotenv').config();

// JWT generation
const generateToken = (data) => jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });

// Middleware to authenticate JWT
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

module.exports = { generateToken, authenticate };
