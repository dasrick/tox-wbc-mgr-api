'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'customer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'users': [{type: Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Group', ModelSchema);
