/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')
var app = express()
app.set('port', (process.env.PORT || 7000));

var basicAuth = require('basic-auth');

var exphbs = require('express-handlebars');
var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.send(401);
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    };

    if (user.name === 'foo' && user.pass === 'bar') {
        return next();
    } else {
        return unauthorized(res);
    };
};

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

app.get('/',  function (req, res) {
    res.render('index',
    { title: 'Home' }
    )
})
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
module.exports = app;



