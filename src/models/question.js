'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'webcast': {type: Schema.ObjectId, ref: 'Webcast', required: true},
  'email': {type: String, default: '', trim: true, required: true},
  'username': {type: String, default: '', trim: true, required: true},
  'message': {type: String, default: '', trim: true, required: true}
});

module.exports = mongoose.model('Question', ModelSchema);
