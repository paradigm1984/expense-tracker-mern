const express = require('express');
const router = express.Router();
let Transaction = require("../models/transaction.model");

//get request that returns all transactions
router.route('/').get((req, res) => {
 Transaction.find()
  .then(transactions => res.json(transactions))
  .catch(err => res.status(400));
});











// const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transaction_controller')


// router.route('/').get(getTransactions).post(addTransactions);

// router.route('/:id').delete(deleteTransactions);

// module.exports = router;