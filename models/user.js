var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose'),
    Clothes = require('./clothes');

var UserSchema = new Schema ({
    username: String,
    password: String,
    clothes: [{
              type: Schema.Types.ObjectId,
              ref: 'Clothes'
    }]
});

UserSchema.plugin(passportLocalMongoose, {
    populateFields: 'clothes'
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
