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
  console.log("this is what updatedCLothing is", updatedClothing);
  updatedClothing.picture = req.body.picture;
  updatedClothing.description = req.body.description;
  updatedClothing.max = req.body.max;
  console.log("new updated clothing is:", updatedClothing);
  req.user.save(function (err, savedClothing) {
    if(err) {
      console.log('update clothing failed', err);
      }
      console.log("this is being saved:", savedClothing);
    res.json(updatedClothing);
  });
}

function show (req, res) {
    res.json( req.user.clothes.id(req.params.clothingId) );
}

function type (req, res) {
  res.json( req.user.clothes.find({'clothes.type': req.params.type}) );
}



module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update,
  show: show,
  type: type
};
