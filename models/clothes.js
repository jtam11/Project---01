var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClothesSchema = new Schema ({
  type: String,
  description: String,
  picture: String,
  max: String,
  worn: String,
  dirty: Boolean
});

var Clothes = ('Clothes', ClothesSchema);

module.exports = Clothes;
