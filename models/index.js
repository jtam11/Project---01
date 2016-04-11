var mongoose = require('mongoose');
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/3000" );


module.exports.Clothes = require('./clothes');
module.exports.User = require('./user');
