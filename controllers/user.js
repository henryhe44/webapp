const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/user', (req, res) => {
    res.render('user')
})


module.exports = router 