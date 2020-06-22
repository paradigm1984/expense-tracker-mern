// transaction_controller.js

const Transaction = require('../models/transaction.model');

exports.getTransactions = async (req, res, next) => {
 try {
  // await makes the function wait until the mongoose find function is complete
  const transactions = await Transaction.find();
  return res.status(200).json({
   success: true,
   count: transactions.length,
   data: transactions
  });
 } catch (err) {
  // sending 500 because its a server error
  return res.send(500).json({
   success: false,
   error: '.:SERVER ERROR:.'
  })
 }
}

exports.addTransaction = async (req, res, next) => {

 try {
  const { text, amount } = req.body;
  const transaction = await Transaction.create(req.body);

  return res.status(201).json({
   success: true,
   data: transaction
  });
 } catch(err) {
  if (err.name === 'ValidationError') {
   // getting the proper validation message we set in our mongoose schema by mapping
   // through the val object
   const messages = Object.values(err.errors).map(val => val.message);
   // sending 400 because its a client error; some validation error was triggered
   return res.status(400).json({
    success: false,
    error: messages
   })
  } else {
   // sending 500 because its a server error
   return res.send(500).json({
    success: false,
    error: '.:SERVER ERROR:.'
   })
  }
 }
}

exports.deleteTransaction = async (req, res, next) => {
 try {

  // grabbing the transaction by ID
  const transaction = await Transaction.findById(req.params.id);

  // error handling if there is no transaction by the submitted ID
  if (!transaction) {
   res.status(404).json({
    success: false,
    error: 'No transaction found'
   })
  } 
  // only calling the mongose remove function after the response is returned
  await transaction.remove();
  // then return a success message. no need to send any data. could put a message if needed
  return res.status(200).json({
   success: true,
   data: {}
  })
 } catch {
  return res.send(500).json({
   success: false,
   error: '.:SERVER ERROR:.'
  })
 }
}