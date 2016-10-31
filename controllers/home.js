var express = require('express')
var router = express.Router()

router.get('/home', function(req, res){
  res.render('home');
})

router.post('/home', function(req, res){
   // post method for the search query
})

module.exports = router;
