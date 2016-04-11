var db = require('../models');

function index(req, res) {
  res.json(req.user.clothes);
}

function create(req, res) {
  if (req.user) {
    req.user.clothes.push(req.body);
    req.user.save( function (err, savedClothing) {
      res.json(savedClothing);
    });
  }
}

function destroy(req, res) {
  req.user.clothes.id(req.params.clothingId).remove();
  req.user.save( function (err, foundClothing) {
    res.json(foundClothing);
  });
  // db.Clothes.findOneAndRemove({_id: req.params.clothingId}, function(err, foundClothing){
  //   res.json(foundClothing);
  // });
}

function update (req, res) {
  console.log("updating with", req.body);
  db.Clothes.findById(req.params.clothingId, function (err, foundClothing) {
    console.log(foundClothing);
    foundClothing.picture = req.body.picture;
    foundClothing.description = req.body.description;
    foundClothing.max = req.body.max;
    foundClothing.save(function (err, savedClothing) {
      if(err) {
        console.log('update clothing failed', err);
        }
      res.json(savedClothing);
    });
  });
}

function show (req, res) {
  db.Clothes.findById(req.params.clothingId, function (err, foundClothing) {
    console.log('showing one article of clothing:', foundClothing);
    res.json(foundClothing);
  });
}

function type (req, res) {
  db.Clothes.find({type: req.params.type}, function (err, foundClothes) {
    res.json(foundClothes);
  });
}



module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update,
  show: show,
  type: type
};
