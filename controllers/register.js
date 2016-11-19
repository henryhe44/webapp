var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/register', function(req, res){
  res.render('register_home');
})

router.post('/register', isNotLoggedIn, function(req, res){
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

function isNotLoggedIn(req, res, next) {
  if (req.isUnAuthenticated())
    return next()
  res.redirect('/profile')
}

module.exports = router;
