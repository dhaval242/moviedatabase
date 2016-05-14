'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  director: String,
  year: Number,
  starring: [{name : String}]
});

module.exports = mongoose.model('Movie', MovieSchema);