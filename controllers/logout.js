// const models = require('../models/');
const express = require('express');
const router = express.Router();

router.get('/logout', function(req, res) {
  res.render('logout');
})

router.post('/logout', function(req, res){

})

module.exports = router;
