// const models = require('../models/')
const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile')
})

router.post('/profile', isLoggedIn, function(req, res){

})

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next()
  res.redirect('/login')
}

module.exports = router;
