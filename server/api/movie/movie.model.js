'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: String,
  rating: Number,
  director: String,
  release: Number,
  plot:String,
  trailer:String, // url
  image:String,
  starring: [{name : String}]
});

module.exports = mongoose.model('Movie', MovieSchema);