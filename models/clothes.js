var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClothesSchema = new Schema ({
  type: String,
  worn: false,

});

var Clothes = ('Clothes', ClothesSchema);

module.exports = Clothes;
