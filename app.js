/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
var app = express()
// app.set('port', (process.env.PORT || 7000));
if (app.get('env') === 'development') { 

   require('dotenv').config(); 
} 

var AUTH_REQUIRED = process.env.AUTH_REQUIRED;
console.log(AUTH_REQUIRED);
var exphbs = require('express-handlebars');

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.logger('dev'))
app.use(stylus.middleware(
  { src: __dirname + '/public'
  , compile: compile
  }
))
app.use(express.static(__dirname + '/public'))
if (AUTH_REQUIRED === 'true') {

var basicAuth = require('basic-auth');


var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    if (user.name === process.env.USER_NAME && user.pass === process.env.PASS_WORD) {
        return next();
    } else {
        return unauthorized(res);
    };
};
app.get('/', auth, function (req, res) {
    res.render('index',
    { title: 'Home' }
    )
})
}else{
app.get('/',  function (req, res) {
    res.render('index',
    { title: 'Home' }
    )
})
}

module.exports = app;



