'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'presentation': {type: Schema.ObjectId, ref: 'Presentation', required: true},
  'sourceFile': {type: String, default: '', trim: true},
  'order': {type: Number, default: 0, required: true}
});

module.exports = mongoose.model('Slide', ModelSchema);
