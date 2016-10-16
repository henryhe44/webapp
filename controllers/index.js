var express = require('express');
var router = express.Router();
var models = require('../models/user');

router.get('/', function(req, res) {
  res.render('register');
})

router.post('/', function(req, res){

})

module.exports = router;
