var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var login = require('./routes/login');
var mongoose = require('mongoose');

// DB connection
   mongoose.connect('mongodb://192.168.1.6:27017/FashionTour', function(err) { 
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful....');
  }
});

var app = express();

app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,enctype,authorization');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
app.set('views', path.join(__dirname, 'views'));

app.use('/', login);
// app.use('/dashboard', dashboard);
// app.use('/feedback',feedback)

module.exports = app;