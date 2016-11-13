// const models = require('../models/');
const express = require('express');
const router = express.Router();

router.get('/logout', function(req, res) {
  // will remove the req.user property from Passport
  req.logout()

  // redirect to the home page
  res.redirect('/')
})

router.post('/logout', function(req, res){

})

module.exports = router;
