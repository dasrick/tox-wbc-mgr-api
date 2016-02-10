'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'webcast': {type: Schema.ObjectId, ref: 'Webcast', required: true},
  'firstname': {type: String, default: '', trim: true, required: true},
  'surname': {type: String, default: '', trim: true, required: true},
  'jobTitle': {type: String, default: '', trim: true, required: true},
  'companyName': {type: String, default: '', trim: true, required: true},
  'phoneNumber': {type: String, default: '', trim: true, required: true}
});

module.exports = mongoose.model('DataminerUser', ModelSchema);
