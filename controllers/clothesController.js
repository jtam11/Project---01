var db = require('../models');

function index(req, res) {
  db.Clothes.find({}, function(err, allClothes) {
    res.json(allClothes);
  });
}

function create(req, res) {
  db.Clothes.create(req.body, function (err, clothes) {
    if (err) {
      console.log(err);
    }
    res.json(clothes);
  });
}

function destroy(req, res) {
  db.Clothes.findOneAndRemove({_id: req.params.clothingId}, function(err, foundClothing){
    res.json(foundClothing);
  });
}

function update (req, res) {
  console.log("updating with", req.body);
  db.Clothes.findById(req.params.clothingId, function (err, foundClothing) {
    foundClothing.picture = req.body.picture;
    foundClothing.description = req.body.description;
    foundClothing.max = req.body.max;
    foundClothing.save(function (err, savedClothing) {
      if(err) {
        console.log('update clothing failed');
        }
      res.json(savedClothing);
    });
  });
}



module.exports = {
  index: index,
  create: create,
  destroy: destroy,
  update: update
};
