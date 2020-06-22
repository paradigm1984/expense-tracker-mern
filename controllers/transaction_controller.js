// transaction_controller.js

const Transaction = require('../models/transaction.model');

exports.getTransactions = async (req, res, next) => {
 // res.send('get all transactions');
 try {

 } catch (err) {
  
 }
}

exports.addTransaction = async (req, res, next) => {
 res.send('add a transaction');
}

exports.deleteTransaction = async (req, res, next) => {
 res.send('delete a transaction');
}