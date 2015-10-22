const express = require('express')
  , path = require('path')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , letters = require('./helpers/letters')
  , app = express()
  ;

const env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// Middleware
if (env === 'development') app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.get('/', function(req, res, next) {
  res.json({
    reply: letters.randomString()
  });
});

app.post('/', function(req, res, next) {
  res.json({
    reply: letters.reverseIt(req.body.string)
  });
});

// 404 catcher
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
    title: 'error'
  });
});

// Spin it up!
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function() {
  if (env !== 'test') console.log('Express server listening on port ' + server.address().port);
});

module.exports = server;
