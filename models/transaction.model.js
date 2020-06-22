// transaction.model.js

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    // `name` must be unique and of type String
    amount: {
        type: Number,
        required: true,
    },
    description: {
         type: String,
         required: true,
    },
    date: {
         type: Date,
         required: true,
    },
},   {
        timestamps: true,
    });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
  