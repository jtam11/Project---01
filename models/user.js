var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    clothes = require ('./clothes');

var UserSchema = new Schema (
  {
    username: String,
    password: String,
    clothes: [ Clothes.schema ]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);
module.exports = Album;
