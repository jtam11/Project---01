var db = require('../models');

function index(req, res) {
  db.Clothes.find({}, function(err, allClothes) {
    res.json(allClothes);
  });
}

module.exports = {
  index: index
};
