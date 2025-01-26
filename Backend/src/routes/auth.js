const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();

// Mock user data (replace with a database in production)
const users = [
  {
    id: 1,
    email: 'testuser@example.com',
    password: '$2b$10$9q1H8n1VWmDql/rU0F1ReON4QkxtZWRZ54Jn6E.BCb0CCTcWtU6pm', // Hashed password for 'password123'
  },
];

// Middleware for protecting routes
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).send({ message: 'Access Token Required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send({ message: 'Invalid Token' });
    req.user = user;
    next();
  });
};

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).send({ message: 'User not found' });

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(401).send({ message: 'Invalid credentials' });

  // Generate JWT
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.send({ message: 'Login successful', token });
});

// Protected Route Example
router.get('/protected', authenticateToken, (req, res) => {
  res.send({ message: 'Welcome to the protected route', user: req.user });
});

module.exports = router;
