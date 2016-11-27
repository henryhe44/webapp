'use strict'
var express = require('express')
var router = express.Router()
var models = require('../models')
const Redirect  = require('../middlewares/redirect')

router.get('/register', Redirect.ifLoggedIn('/profile'),function(req, res){
  res.render('register_home');
})

router.post('/register', Redirect.ifLoggedIn('/profile'), function(req, res){
   models.User.sync().then(function() {
     var user = models.User.build({
       firstName: req.body.firstName,
       lastName:  req.body.lastName,
       username:  req.body.username,
       email:     req.body.email,
       password:  req.body.password
     })
     user.save().then(function() {
       res.append('Content-Type', 'application/json')
       res.end(JSON.stringify(user))
     }).catch(function(error) {
       console.log(error)
     })
   })
})


module.exports = router;
