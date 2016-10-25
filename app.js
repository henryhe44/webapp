const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const pug = require('pug')
const express = require('express')
const expressSession = require('express-session')
const flash = require('connect-flash')
const methodOverride = require('method-override')
const path  = require('path')
const app = express()
const User = require('./models/user.js')
const models = require('./models/')
const Sequelize = require('sequelize')

var connection = new Sequelize("arena_test", "arena", "password", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(require('./controllers/'))



app.listen(8000)
module.exports = app

connection.sync();
