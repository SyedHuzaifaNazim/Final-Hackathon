const Appointment = require('../models/Appointment');
const QRCode = require('qrcode');

// Generate Appointment Slip
const createAppointment = async (req, res) => {
  const { date, time, location } = req.body;
  const token = Math.random().toString(36).substring(2, 8).toUpperCase();

  try {
    const qrCodeData = `${token}-${date}-${time}`;
    const qrCode = await QRCode.toDataURL(qrCodeData);

    const appointment = await Appointment.create({
      userId: req.user.id,
      date,
      time,
      location,
      token,
      qrCode,
    });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ message: 'Error generating appointment slip', error: err });
  }
};

module.exports = { createAppointment };
