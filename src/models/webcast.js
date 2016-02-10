'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ModelSchema = new Schema({
  'name': {type: String, default: '', trim: true, required: true},
  'customer': {type: Schema.ObjectId, ref: 'Customer', required: true},
  'state': {type: String, default: '', trim: true, required: true},
  'preliveStateData': {
    'hdsUrl': {type: String, default: '', trim: true, required: true},
    'hlsUrl': {type: String, default: '', trim: true, required: true},
    'dashUrl': {type: String, default: '', trim: true, required: true}
  },
  'liveStateData': {
    'hdsUrl': {type: String, default: '', trim: true, required: true},
    'hlsUrl': {type: String, default: '', trim: true, required: true},
    'dashUrl': {type: String, default: '', trim: true, required: true}
  },
  'postliveStateData': {
    'hdsUrl': {type: String, default: '', trim: true, required: true},
    'hlsUrl': {type: String, default: '', trim: true, required: true},
    'dashUrl': {type: String, default: '', trim: true, required: true}
  },
  'theme': {
    'logoUrl': {type: String, default: '', trim: true, required: true},
    'backgroundColor': {type: String, default: '', trim: true, required: true}
  },
  'showQnA': { type: Boolean, default: false },
  'showChat': { type: Boolean, default: false },
  'showSlides': { type: Boolean, default: false },
  'showDataminerForm': { type: Boolean, default: false }
});

module.exports = mongoose.model('Webcast', ModelSchema);
