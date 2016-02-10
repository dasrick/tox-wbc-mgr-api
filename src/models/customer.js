'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'parent': {type: Schema.ObjectId, ref: 'Customer', required: true}
});

module.exports = mongoose.model('Customer', ModelSchema);
