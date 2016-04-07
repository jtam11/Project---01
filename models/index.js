var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/3000");


module.exports.Clothes = require('./clothes');
