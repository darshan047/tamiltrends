'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VideoSchema = new Schema({
  _id: String,
  kind: String,
  publishedAt: Date,
  title: String,
  description: String,
  thumbnail: String
});

VideoSchema.pre('save', function preSave(next){
	    //if(req.body.publishedAt){req.body.publishedAt = new Date(req.body.publishedAt);};
    //this.publishedAt = new Date();
    //console.log(this);
  //var something = this;
  //something.updatedAt(Date.now());
  //console.log(this);
  next();
});

module.exports = mongoose.model('Video', VideoSchema);