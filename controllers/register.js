var express = require('express')
var router = express.Router()
var models = require('../models/user')

router.get('/register', function(req, res){
  res.render('register_home');
})

router.post('/register', function(req, res){
    var user = models.User.create({
      firstName:  req.body.firstName,
      lastName:   req.body.lastName,
      username:   req.body.username,
      email:      req.body.email,
      password:   req.body.password,
      overwatch:  req.body.overwatch ? true : false,
      league:     req.body.league    ? true : false,
      starcraft:  req.body.starcraft ? true : false
    })
    user.save(function(err){
        if(err){
          console.log(err)
        }
    })
})

module.exports = router;
