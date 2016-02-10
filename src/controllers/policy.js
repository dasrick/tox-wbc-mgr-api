'use strict';

module.exports = function () {

  var mongoose = require('mongoose');
  var Policy = mongoose.model('Policy');

  function doList(req, res) {
    Policy.FindAll(
      {},
      function (err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      },
      true
    );
  }

  function doCreate(req, res) {

    var policy = {
      name: req.body.name
    };

    Policy.Save(
      policy,
      function (err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      }
    );
  }

  function doRead(req, res) {

    Policy.FindById(
      req.params.id,
      function (err, result) {

        console.log(err);
        console.log(result);

        if (err) {
          res.send(err);
        }
        res.json(result);
      }
    );

    //res.json({message: 'route: ' + req.originalUrl + ' - READ - ' + req.params.id});
  }

  function doUpdate(req, res) {
    res.json({message: 'route: ' + req.originalUrl + ' - UPDATE - ' + req.params.id});
  }

  function doDelete(req, res) {
    res.json({message: 'route: ' + req.originalUrl + ' - DELETE - ' + req.params.id});
  }

  return {
    list: doList,
    create: doCreate,
    get: doRead,
    update: doUpdate,
    delete: doDelete
  }
};