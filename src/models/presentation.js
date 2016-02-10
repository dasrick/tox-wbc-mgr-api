'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'webcast': {type: Schema.ObjectId, ref: 'Webcast', required: true},
  'sourceFile': {type: String, default: '', trim: true},
  'order': {type: Number, default: 0, required: true},
  'presentationData': {
    'description': {type: String, default: '', trim: true}
  }
});

module.exports = mongoose.model('Presentation', ModelSchema);
