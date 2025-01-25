const User = require('../models/User');

// Register User
const registerUser = async (req, res) => {
  const { name, email, cnic } = req.body;
  const password = Math.random().toString(36).substring(7); // Temporary password

  try {
    const newUser = await User.create({ name, email, cnic, password });
    console.log(`Email sent to ${email} with password: ${password}`); // Mock email send
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: 'Error registering user', error: err });
  }
};

// User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken({ id: user._id, email: user.email });
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err });
  }
};

module.exports = { registerUser, loginUser };
