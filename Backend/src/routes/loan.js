const express = require('express');
const router = express.Router();
const { submitLoanRequest, getAllLoans } = require('../controllers/loancontroller');
const { authenticate } = require('../utils/auth');

router.post('/loan', authenticate, submitLoanRequest);
router.get('/admin/loans', authenticate, getAllLoans);

module.exports = router;
