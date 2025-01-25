const express = require('express');
const router = express.Router();
const { createAppointment } = require('../controllers/appointmentcontroller');
const { authenticate } = require('../utils/auth');

router.post('/appointment', authenticate, createAppointment);

module.exports = router;
