const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transaction_controller')


router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransactions);

module.exports = router;