// const models = require('../models/');
const express   = require('express')
const router    = express.Router()
const passport  = require('../middlewares/authentication')
const User      = require('../models').User

router.get('/login', isNotLoggedIn,function(req, res) {
  res.render('login');
})

router.post('/login', isNotLoggedIn, function(req, res, next){
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
  })(req, res, next)
})

function isNotLoggedIn(req, res, next) {
  if (!req.isAuthenticated())
    return next()
  res.redirect('/profile')
}

module.exports = router;
