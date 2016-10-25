// const models = require('../models/');
const express = require('express');
const router = express.Router();

router.get('/profile', function(req, res) {
  res.render('profile');
})

router.post('/profile', function(req, res){

})

module.exports = router;
