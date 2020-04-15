const mongoose = require("mongoose");


// mongoose.connect(process.env.MONGODB_URI || "mongodb://blanco:blanco1@ds133262.mlab.com:33262/heroku_vwh00jbz", { useMongoClient: true, useUnifiedTopology: true, useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//  console.log("MongoDB database connection established successfully");
// }).catch(function (error) {
//  console.log(error);
// });

const connectDB = async () => {
 try {
  const connection = await mongoose.connect(process.env.MONGODB_URI || "mongodb://blanco:blanco1@ds133262.mlab.com:33262/heroku_vwh00jbz", {
   useMongoClient: true,
   useUnifiedTopology: true,
   useNewUrlParser: true
  });
  console.log(`MongoDB database connected: ${connection.connection.host}`.cyan.bold);
 } catch (err) {
  console.log(`error: ${err.message}`.red.bold);
  procces.exit(1);
 }
}

module.exports = connectDB