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

module.exports = {
  index: index,
  create: create
};
