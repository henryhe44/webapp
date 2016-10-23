var express = require('express')
var router = express.Router()
var models = require('../models')

router.get('/register', function(req, res){
  res.render('register_home');
})

router.post('/register', function(req, res){
   models.User.sync().then(function() {
     return models.User.create({
       firstName: req.body.firstName,
       lastName: req.body.lastName,
       username: req.body.username,
       email: req.body.email,
       password: req.body.password
     })
   })

   res.end("Success")
})

module.exports = router;
