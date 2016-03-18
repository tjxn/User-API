/// <reference path="./typings/browser/ambient/express/express.d.ts"/>
/// <reference path="./typings/browser/ambient/mongoose/mongoose.d.ts"/>
import express = require("express");
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

var mongoose = require('mongoose');

let api = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/User', api);

var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:G0teamcharbroiled@ds015919.mlab.com:15919/heroku_3wqm7pr1', function(err) {
  if(err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

//catch 404 and forward to error handler
app.use((req, res, next) => {
    let err:any;
    err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err:any, req, res, next) => {
    res.status(err['status'] || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err:any, req, res, next)=> {
  res.status(err['status'] || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
