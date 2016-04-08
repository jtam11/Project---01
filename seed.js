var db = require('./models');

var clothesList =[
  {
    type: 'Hat',
    description: 'Giants Hat',
    picture: 'http://goo.gl/S78Cdd',
    max: '10'
  },
  {
    type: 'Top',
    description: 'Giants Shirt',
    picture: 'http://goo.gl/TFPN0L',
    max: '2'
  },
  {
    type: 'Bottom',
    description: "Black Basketball Shorts",
    picture: 'http://goo.gl/8SfTrj',
    max: '2'
  },
  {
    type: 'Shoes',
    description: 'Orange Flyknits',
    picture: 'https://goo.gl/KbDSrP'
  }
];

db.Clothes.remove({}, function(err, clothes){

  db.Clothes.create(clothesList, function(err, clothes){
    if (err) { return console.log('ERROR', err); }
    process.exit();
  });

});
