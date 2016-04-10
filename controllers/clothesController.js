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

module.exports = {
  index: index,
  create: create,
  destroy: destroy
};
