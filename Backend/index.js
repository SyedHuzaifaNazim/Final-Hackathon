// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const QRCode = require('qrcode');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Database Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected successfully"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Models
// const User = mongoose.model('User', new mongoose.Schema({
//   name: String,
//   email: String,
//   cnic: String,
//   password: String,
// }));

// const Loan = mongoose.model('Loan', new mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   category: String,
//   subcategory: String,
//   amount: Number,
//   guarantors: [
//     {
//       name: String,
//       email: String,
//       location: String,
//       cnic: String,
//     },
//   ],
//   statement: String,
//   salarySheet: String,
//   status: { type: String, default: 'Pending' },
// }));

// const Appointment = mongoose.model('Appointment', new mongoose.Schema({
//   userId: mongoose.Schema.Types.ObjectId,
//   date: Date,
//   time: String,
//   location: String,
//   token: String,
//   qrCode: String,
// }));

// // Utilities
// const generateToken = (data) => jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '1d' });
// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) return res.status(401).json({ message: 'No token provided' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ message: 'Invalid token' });
//     req.user = decoded;
//     next();
//   });
// };

// // Routes
// // User Registration
// app.post('/api/register', async (req, res) => {
//   const { name, email, cnic } = req.body;
//   const password = Math.random().toString(36).substring(7); // Generate temporary password

//   try {
//     const newUser = await User.create({ name, email, cnic, password });
//     // Send email with password (mocked here)
//     console.log(`Email sent to ${email} with password: ${password}`);
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: 'Error registering user', error: err });
//   }
// });

// // User Login
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email, password });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = generateToken({ id: user._id, email: user.email });
//     res.status(200).json({ token });
//   } catch (err) {
//     res.status(400).json({ message: 'Error logging in', error: err });
//   }
// });

// // Submit Loan Request
// app.post('/api/loan', authenticate, async (req, res) => {
//   const { category, subcategory, amount, guarantors, statement, salarySheet } = req.body;

//   try {
//     const loan = await Loan.create({
//       userId: req.user.id,
//       category,
//       subcategory,
//       amount,
//       guarantors,
//       statement,
//       salarySheet,
//     });
//     res.status(201).json(loan);
//   } catch (err) {
//     res.status(400).json({ message: 'Error submitting loan request', error: err });
//   }
// });

// // Generate Appointment Slip
// app.post('/api/appointment', authenticate, async (req, res) => {
//   const { date, time, location } = req.body;
//   const token = Math.random().toString(36).substring(2, 8).toUpperCase();

//   try {
//     const qrCodeData = `${token}-${date}-${time}`;
//     const qrCode = await QRCode.toDataURL(qrCodeData);

//     const appointment = await Appointment.create({
//       userId: req.user.id,
//       date,
//       time,
//       location,
//       token,
//       qrCode,
//     });
//     res.status(201).json(appointment);
//   } catch (err) {
//     res.status(400).json({ message: 'Error generating appointment slip', error: err });
//   }
// });

// // Admin - View All Loan Applications
// app.get('/api/admin/loans', authenticate, async (req, res) => {
//   try {
//     const loans = await Loan.find();
//     res.status(200).json(loans);
//   } catch (err) {
//     res.status(400).json({ message: 'Error fetching loan applications', error: err });
//   }
// });

// // Admin - Filter Loan Applications by City/Country (Mocked for simplicity)
// app.get('/api/admin/loans/filter', authenticate, async (req, res) => {
//   const { city, country } = req.query;

//   try {
//     const filteredLoans = await Loan.find({
//       'guarantors.location': { $regex: city || country, $options: 'i' },
//     });
//     res.status(200).json(filteredLoans);
//   } catch (err) {
//     res.status(400).json({ message: 'Error filtering loan applications', error: err });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// Import routes
const userRoutes = require('../Backend/src/routes/userRoutes');
const loanRoutes = require('../Backend/src/routes/loan');
const appointmentRoutes = require('../Backend/src/routes/appointmentRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Use routes
app.use('/api', userRoutes);
app.use('/api', loanRoutes);
app.use('/api', appointmentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
