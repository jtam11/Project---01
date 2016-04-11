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
  var deletedClothing = req.user.clothes.id(req.params.clothingId);
  req.user.clothes.id(req.params.clothingId).remove();
  req.user.save( function (err, foundClothing) {
    if(err) {
      console.log('destroy error:', err);
    }
    res.json(deletedClothing);
  });
  // db.Clothes.findOneAndRemove({_id: req.params.clothingId}, function(err, foundClothing){
  //   res.json(foundClothing);
  // });
}

function update (req, res) {
  console.log("updating with", req.body);
  var updatedClothing = req.user.clothes.id(req.params.clothingId);
  req.user.clothes.id(req.params.clothingId, function (err, foundClothing) {
    console.log('found clothing =', foundClothing);
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
    res.json( req.user.clothes.id(req.params.clothingId) );
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
