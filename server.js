'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// the packages
// ---------------------------------------------------------------------------------------------------------------------
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var app = express();
var restify = require('express-restify-mongoose');

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
//// ---------------------------------------------------------------------------------------------------------------------
//// test route to make sure everything is working (accessed at GET http://localhost:6080/api)
//router.get('/', function (req, res) {
//  res.json({message: 'yeah! welcome to api of WBC-MGR!'});
//});
//// ---------------------------------------------------------------------------------------------------------------------
//// register routes
//app.use('/api', router);


// setup restify
restify.defaults({
  prefix: '/api',
  version: '/v1',
  totalCountHeader: true
});


// import and use models
restify.serve(router, require('./src/models/customer'));
restify.serve(router, require('./src/models/datamineruser'));
restify.serve(router, require('./src/models/group'));
restify.serve(router, require('./src/models/permission'));
restify.serve(router, require('./src/models/policy'));
restify.serve(router, require('./src/models/presentation'));
restify.serve(router, require('./src/models/question'));
restify.serve(router, require('./src/models/role'));
restify.serve(router, require('./src/models/slide'));
restify.serve(router, require('./src/models/user'));
restify.serve(router, require('./src/models/videomanager'));
restify.serve(router, require('./src/models/webcast'));

app.use(router);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// START SERVER
// ---------------------------------------------------------------------------------------------------------------------
//app.listen(app.get('port'), function () {
//  console.log('Node app of WBC-API running ...');
//  console.log('Host: localhost:' + app.get('port'));
//  console.log('Env: ', process.env.NODE_ENV);
//});

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
