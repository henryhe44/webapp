const User      = require('../models').User
const express   = require('express')
const router    = express.Router();

router.get('/users', (req, res) => {
    let all_users = User.findAll().then((users) => {console.log(users)})
    // console.log(all_users) 
    res.render('users', all_users)
})


module.exports = router 