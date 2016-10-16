const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const pug = require('pug');
const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const path  = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.get('/', (req, res) => {
//   res.send("This is the home page");
// });
app.use(require('./controllers/'));

app.listen(8000);
module.exports = app;
