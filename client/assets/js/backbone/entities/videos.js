TamilTrends.module("Entities", function(Entities, TamilTrends,
	Backbone, Marionette, $, _) {
	Entities.Video = Backbone.Model.extend({
		parse: function(response){
			response.id = response._id;
			return response;
		}
	});
	Entities.Videos = Backbone.PageableCollection.extend({
		model: Entities.Video,
		mode: "server",
		queryParams: {
			pageSize: "limit",
			totalPages: null
		}
		
	});
	
	/*
	Entities.Videos = Backbone.Collection.extend({
		model: Entities.Video
	});*/

	var videos;

	var initializeVideos = function(options) {
		videos = new Entities.Videos();
		videos.url= "/api/videos",
		videos.fetch();
	}

	var API = {
		getVideoEntities: function(options) {
			if (videos === undefined) {
				initializeVideos(options);
			}
			return videos;
		}
	}
	TamilTrends.reqres.setHandler("videos:entities", function(options) {
		return API.getVideoEntities(options);
	});
});
