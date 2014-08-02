'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Video = require('../video/video.model');

var PlaylistSchema = new Schema({
  _id: String,
  publishedAt: Date,
  title: String,
  description: String,
  thumbnail: String,
  videos: [{type: String, ref: 'Video'}]
});

PlaylistSchema.pre('save', function preSave(next){
	    //if(req.body.publishedAt){req.body.publishedAt = new Date(req.body.publishedAt);};
    //this.publishedAt = new Date();
    //console.log(this);
  //var something = this;
  //something.updatedAt(Date.now());
  //console.log(this);
  next();
});

module.exports = mongoose.model('Playlist', PlaylistSchema);