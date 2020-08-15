const express = require('express');
const router = express.Router();
const path = require('path');
const epass = require('../controllers/epass');

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  epass.list(req, res);
});

module.exports = router;
