// const models = require('../models/');
const express = require('express');
const router = express.Router();

router.get('/profile', function(req, res) {
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  })(req, res, next)
})

router.post('/profile', function(req, res){

})

module.exports = router;
