const express = require("express");
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

const transactions = require('./routes/transaction_routes');


connectDB();

// app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/transactions', transactions);

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.listen(port, () => {
 console.log(`server is running on port: ${port}`.blue.bold)
});