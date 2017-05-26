var mongoose = require('mongoose');

var User = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', User);

//database Server
//model template that uses schema to record username and password as a string to the database
