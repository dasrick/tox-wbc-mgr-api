'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'customer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'email': {type: String, default: '', trim: true, required: true}
});

module.exports = mongoose.model('User', ModelSchema);
