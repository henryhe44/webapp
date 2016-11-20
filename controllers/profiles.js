// const models = require('../models/')
const express   = require('express')
const router    = express.Router()
const passport  = require('passport')
const Redirect  = require('../middlewares/redirect')

router.get('/profile', Redirect.ifNotLoggedIn, function(req, res) {
    res.render('profiles')
})

router.post('/profile', Redirect.ifNotLoggedIn, function(req, res){

})


module.exports = router;
