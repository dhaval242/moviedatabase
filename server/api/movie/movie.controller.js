'use strict';

var _ = require('lodash');
var Movie = require('./movie.model');

// Get list of movies
exports.index = function(req, res) {
  Movie.find(function (err, movies) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(movies);
  });
};


exports.findbyName = function(req, res) {
  var query = {name : req.params.name}
  Movie.findOne(query, function (err, movie) {
    if(err) { return handleError(res, err); }
    if(!movie) { 
      console.log("NOT FOUND");
      return res.status(404).json('Not Found'); 
    }
    
    return res.json(movie);
  });
};

exports.findbyDirector = function(req, res) {
  var query = {director : req.params.director}
  Movie.find(query, function (err, movie) {
    if(err) { return handleError(res, err); }
    if(!movie) { return res.status(404).send('Not Found'); }
    return res.json(movie);
  });
};

exports.findbyYear = function(req, res) {
  var query = {year : req.params.year}
  Movie.find(query, function (err, movie) {
    if(err) { return handleError(res, err); }
    if(!movie) { return res.status(404).send('Not Found'); }
    return res.json(movie);
  });
};



// Creates a new movie in the DB.
exports.create = function(req, res) {
  Movie.create(req.body, function(err, movie) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(movie);
  });
};

// Updates an existing movie in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Movie.findById(req.params.id, function (err, movie) {
    if (err) { return handleError(res, err); }
    if(!movie) { return res.status(404).send('Not Found'); }
    var updated = _.merge(movie, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(movie);
    });
  });
};

// Deletes a movie from the DB.
exports.destroy = function(req, res) {
  Movie.findById(req.params.id, function (err, movie) {
    if(err) { return handleError(res, err); }
    if(!movie) { return res.status(404).send('Not Found'); }
    movie.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}