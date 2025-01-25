const Loan = require('../models/Loan');

// Submit Loan Request
const submitLoanRequest = async (req, res) => {
  const { category, subcategory, amount, guarantors, statement, salarySheet } = req.body;

  try {
    const loan = await Loan.create({
      userId: req.user.id,
      category,
      subcategory,
      amount,
      guarantors,
      statement,
      salarySheet,
    });
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ message: 'Error submitting loan request', error: err });
  }
};

// Admin - View All Loan Applications
const getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching loan applications', error: err });
  }
};

module.exports = { submitLoanRequest, getAllLoans };
