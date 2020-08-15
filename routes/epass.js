const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');
const epass = require('../controllers/epass');

router.get('/', function (req, res) {
  epass.index(req, res);
});

router.post('/addepass', function (req, res) {
  epass.create(req, res);
});

router.get('/getepasses', function (req, res) {
  epass.list(req, res);
});

module.exports = router;
