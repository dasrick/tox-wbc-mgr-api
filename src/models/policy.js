'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PolicySchema = new Schema({
  name: {type: String, default: '', trim: true}
  // customer: { type : Schema.ObjectId, ref : 'Customer' },
  //customer:
  //permissions: []
  // createdAt  : { type : Date, default : Date.now }
});

PolicySchema.path('name').required(true, 'Policy name cannot be blank');

PolicySchema.statics = {

  FindById: function (id, cb) {
    return this.FindOne({
      _id: id
    }, function (err, entity) {
      cb(err, entity);
    });
  },

  FindOne: function (params, cb) {
    return this.findOne(params, function (err, entity) {
      if (!err && !entity) {
        err = true;
      }

      cb(err, entity);
    });
  },

  FindAll: function (params, cb, lean) {
    if (!lean) {
      return this.find(params).exec(cb);
    } else {
      return this.find(params).lean().exec(cb);
    }
  },

  Save: function (obj, cb) {
    var entity = new this(obj);
    return entity.save(function (err) {
      cb(err);
    });
  },

  Update: function (entity, cb) {
    return this.FindById(entity.id, function (err, oldEntity) {
      if (err) {
        cb(err);
      } else {
        oldEntity = entity;
        oldEntity.save(cb);
      }
    })
  },

  Delete: function (entity, cb) {
    return entity.remove(function (err) {
      cb(err);
    });
  }

}
;


module.exports = mongoose.model('Policy', PolicySchema);
