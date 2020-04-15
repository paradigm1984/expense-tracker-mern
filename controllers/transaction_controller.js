// GET request
// Get all transactions
// Path: /transactions
exports.getTransactions = (req, res, next) => {
 res.send('GET TRANSACTIONS');
}

// POST request
// Add transaction
// Path: /transactions
exports.addTransactions = (req, res, next) => {
 res.send('ADD TRANSACTIONS');
}

// POST request
// Delete transaction
// Path: /transactions/:id
exports.deleteTransactions = (req, res, next) => {
 res.send('DELETE TRANSACTIONS');
}