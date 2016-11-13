// const models = require('../models/')
const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/profile',
  passport.authenticate('local',
    { failureRedirect: '/login' }),
  function(req, res) {
    res.render('profile')
})

router.post('/profile', function(req, res){

})

module.exports = router;
