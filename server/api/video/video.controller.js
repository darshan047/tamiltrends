/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /videos              ->  index
 * POST    /videos              ->  create
 * GET     /videos/:id          ->  show
 * PUT     /videos/:id          ->  update
 * DELETE  /videos/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Video = require('./video.model');
var Playlist = require('../playlist/playlist.model');
//var defaults = {skip: 0};

// Get list of videos
exports.index = function(req, res) {
  //var options = _.defaults(req.query, defaults);
  var options = req.query;
  if(options.playlistId){
        Playlist.findById(options.playlistId)
          .populate('videos')
          .exec(function(err, playlist) {
            if(err) { return handleError(res, err); }
            if(!playlist) { return res.send(404); }
            return res.json(playlist.videos);
          });
    }else{
      if(options.limit && options.page){
          options.skip = options.limit * (options.page - 1);
      }
      Video.find({},"",options,function (err, videos) {
        if(err) { return handleError(res, err); }
        return res.json(200, videos);
      });
    }
};

// Get a single video
exports.show = function(req, res) {
  Video.findById(req.params.id, function (err, video) {
    if(err) { return handleError(res, err); }
    if(!video) { return res.send(404); }
    return res.json(video);
  });
};

// Creates a new video in the DB.
exports.create = function(req, res) {
  //if(req.body.publishedAt){req.body.publishedAt = new Date(req.body.publishedAt);};
  Video.create(req.body, function(err, video) {
    if(err) { return handleError(res, err); }
    return res.json(201, video);
  });
};

// Updates an existing video in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Video.findById(req.params.id, function (err, video) {
    if (err) { return handleError(err); }
    if(!video) { return res.send(404); }
    var updated = _.merge(video, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, video);
    });
  });
};

// Deletes a video from the DB.
exports.destroy = function(req, res) {
  Video.findById(req.params.id, function (err, video) {
    if(err) { return handleError(res, err); }
    if(!video) { return res.send(404); }
    video.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}