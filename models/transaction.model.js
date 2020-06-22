// transaction.model.js

var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
    // `name` must be unique and of type String
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Please add a description']
    },
    description: {
         type: String,
        required: [true, 'Please add a positive or negative amount']
    },
    createdAt: {
         type: Date,
         default: Date.now
    },
},   {
        timestamps: true,
    });

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
  