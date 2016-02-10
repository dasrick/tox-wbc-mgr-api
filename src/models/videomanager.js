'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'customer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'instanceUrl': {type: String, default: '', trim: true, required: true},
  'vmproId': {type: Number, default: 0, required: true}
});

module.exports = mongoose.model('Videomanager', ModelSchema);
