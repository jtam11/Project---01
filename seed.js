var db = require('./models');

var primaryObject = [{
    name: "Justin",
    favoriteColor: "Purple",
    shoes: "Metcons"
  }];

db.Primary.remove({}, function(err, primary){

  db.Primary.create(primaryObject, function(err, primary){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });

});
