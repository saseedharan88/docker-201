const path = require('path');
const Epass = require('../models/epass');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/index.html'));
};

exports.create = function (req, res) {
  var newEpass = new Epass(req.body);
  console.log(req.body);
  newEpass.save(function (err) {
    if (err) {
      res.status(400).send('Unable to save epass to database');
    }
    else {
      res.redirect('/getepasses');
    }
  });
};

exports.list = function (req, res) {
  Epass.find({}).exec(function (err, epasses) {
    if (err) {
      return res.send(500, err);
    }
    res.render('getepass', {
      applications: epasses
    });
  });
};
