'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the packages
// ---------------------------------------------------------------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// config env stuff
// ---------------------------------------------------------------------------------------------------------------------
var port = process.env.PORT || 6080;
var mongoconnection = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1:27017';
var env = process.env.NODE_ENV || 'development';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// config app
app.set('port', port);
app.use(morgan('dev'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// config body parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MONGOOSE
// ---------------------------------------------------------------------------------------------------------------------
//mongoose.connect(mongoconnection); // connect to our database
function connect() {
  var options = {server: {socketOptions: {keepAlive: 1}}};
  return mongoose.connect(mongoconnection, options).connection;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MODELS
// ---------------------------------------------------------------------------------------------------------------------
require('./src/models/policy');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ROUTES
// ---------------------------------------------------------------------------------------------------------------------
// create router
var router = express.Router();
// ---------------------------------------------------------------------------------------------------------------------
// middleware to use for all requests
//router.use(function (req, res, next) {
//  // do logging
//  console.log('something is going on...');
//  next();
//});
// ---------------------------------------------------------------------------------------------------------------------
// test route to make sure everything is working (accessed at GET http://localhost:6080/api)
//router.get('/', function (req, res) {
//  res.json({message: 'yeah! welcome to api of WBC-MGR!'});
//});
// ---------------------------------------------------------------------------------------------------------------------
// register routes
require('./src/routes/policy')(app, router);
require('./src/routes/group')(app, router);

//app.use('/api/policy', require('./src/routes/policy'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// START SERVER
// ---------------------------------------------------------------------------------------------------------------------
connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen);

function listen() {
  //if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Node app of WBC-API running ...');
  console.log('Host: localhost:' + port);
  console.log('Env: ', env);
}
