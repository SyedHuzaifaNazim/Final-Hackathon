const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  token: { type: String, required: true },
  qrCode: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
