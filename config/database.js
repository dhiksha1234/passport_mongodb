 

 const mongoose = require('mongoose');

 require('dotenv').config();
 
 /**
  * -------------- DATABASE ----------------
  */
 
 /**
  * Connect to MongoDB Server using the connection string in the `.env` file.  To implement this, place the following
  * string into the `.env` file
  * 
 n */ 
 
 const conn = process.env.DB_STRING;
 
 const connection = mongoose.createConnection(conn, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });
 
  const UserSchema = new mongoose.Schema({
     username: String,
     hash: String,
     salt: String
 });
 
 
 const User = connection.model('User', UserSchema);
 
 // Expose the connection
 module.exports = connection;
 