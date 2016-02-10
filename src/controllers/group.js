'use strict';

module.exports = function () {

  function doList(req, res) {
    res.json({ message: 'route: '  + req.originalUrl + ' - LIST'});
  }

  function doCreate(req, res) {
    res.json({ message: 'route: '  + req.originalUrl + ' - CREATE'});
  }

  function doRead(req, res) {
    res.json({ message: 'route: '  + req.originalUrl + ' - READ - ' + req.params.id});
  }

  function doUpdate(req, res) {
    res.json({ message: 'route: '  + req.originalUrl + ' - UPDATE - ' + req.params.id});
  }

  function doDelete(req, res) {
    res.json({ message: 'route: '  + req.originalUrl + ' - DELETE - ' + req.params.id});
  }

  return {
    list: doList,
    create: doCreate,
    get: doRead,
    update: doUpdate,
    delete: doDelete
  }
};