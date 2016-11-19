const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function(req, res){
  res.render('search');
})

router.post('/', isLoggedIn, function (req, res) {
  // post method for search queries
})

function isLoggedIn (req, res, next) {
  if(req.isAuthenticated())
    return next()
  res.redirect('/login')
}

module.exports = router;
