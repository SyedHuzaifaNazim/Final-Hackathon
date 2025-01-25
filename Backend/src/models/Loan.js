const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  amount: { type: Number, required: true },
  guarantors: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      location: { type: String, required: true },
      cnic: { type: String, required: true },
    },
  ],
  statement: { type: String, required: true },
  salarySheet: { type: String, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

module.exports = mongoose.model('Loan', LoanSchema);
