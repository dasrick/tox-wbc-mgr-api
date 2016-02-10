'use strict';

module.exports = function (app, router) {
  var controller = require('./../controllers/group')();

  router
    .route('/')
    .get(controller.list)
    .post(controller.create);

  router
    .route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

  app.use('/api/group', router);
};