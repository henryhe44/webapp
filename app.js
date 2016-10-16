const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const path  = require('path');
const User = require('./models/user');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.get('/', (req, res) => {
//   res.send("This is the home page");
// });
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./controllers'));
app.get('/register', function(req, res){
  res.render('register');
})
app.post('/register', function(req, res){
    var user = User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
})
app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})
app.listen(8000);
module.exports = app;
