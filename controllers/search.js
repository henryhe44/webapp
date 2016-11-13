var express = require('express')
var router = express.Router()

router.get('/', function(req, res){
  res.render('search');
})

router.post('/', function(req, res){
   // post method for the search query
   passport.authenticate('local', {
     // Not sure what the redirect should be yet
     successRedirect: '/search/results',
     failureRedirect: '/login'
   })(req, res, next)
})

module.exports = router;
