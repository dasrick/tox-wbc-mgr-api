'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'customer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'targetCustomer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'policy': {type: Schema.ObjectId, ref: 'Policy', required: true},
  'group': {type: Schema.ObjectId, ref: 'Group', required: true}
});

module.exports = mongoose.model('Role', ModelSchema);
