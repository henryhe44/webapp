var express = require('express')
var router = express.Router()

router.get('/search', function(req, res){
  res.render('search');
})

router.post('/search', function(req, res){
   // post method for the search query
})

module.exports = router;
