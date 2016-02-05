'use strict';

const express = require('express');

const port = process.env.PORT || 6080;
const app = express();

module.exports = app;




app.set('port', port);
app.listen(app.get('port'), function () {
  console.log('Node app of WBC-API running ...');
  console.log('Host: localhost:' + app.get('port'));
  console.log('Env: ', process.env.NODE_ENV);
});