// const models = require('../models/');
const express   = require('express')
const router    = express.Router()
const passport  = require('../middlewares/authentication')
const User      = require('../models').User

router.get('/login', function(req, res) {
  res.render('login');
})

router.post('/login', function(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next)
})

module.exports = router;
