// const models = require('../models/');
const express = require('express')
const router = express.Router()
const passport = require('../middlewares/authentication')

router.get('/login', function(req, res) {
  res.render('login');
})

router.post('/login', function(req, res){
  console.log('recieved')
  passport.authenticate('local', {
    successRedirect: '/register',
    failureRedirect: '/login'
  })(req, res)
})

module.exports = router;
