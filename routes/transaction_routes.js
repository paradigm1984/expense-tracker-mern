// routes/index.js

const express = require('express');
const router = express.Router();
let Transaction = require("../models/transaction.model");

//get request that returns all transactions
router.route('/').get((req, res) => {
 Transaction.find()
  .then(transactions => res.json(transactions))
  .catch(err => res.status(400));
});

// add new transaction to db
router.route('/add').post((req, res) => {
 const amount = req.body.amount;
 const description = req.body.description;
 const date = Date.parse(req.body.date);
 const newTransaction = new Transaction ({
  amount,
  description,
  date,
 });
 newTransaction.save()
  .then(() => res.json('Transaction added'))
  .catch(err => res.status(400));
});

// get transaction based on the ID
router.route('/:id').get((req, res) => {
 Transaction.findById(req.params.id)
  .then(transaction => res.json(transaction))
  .catch(err => res.status(400));
});

// delete transaction based on ID
router.route('/:id').delete((req, res) => {
 Transaction.findByIdAndDelete(req.params.id)
  .then(() => res.json("transaction deleted"))
  .catch(err => res.status(400));
});

// update exercise based on ID
router.route('/update/:id').post((req, res) => {
 Transaction.findById(req.params.id)
  .then(transaction => {
   transaction.name = req.body.name;
   transaction.description = req.body.description;
   transaction.date = Date.parse(req.body.date);

   transaction.save()
    .then(() => res.json("transaction updated"))
    .catch(err => res.status(400))
  })
  .catch(err => res.status(400));
});

module.exports = router;