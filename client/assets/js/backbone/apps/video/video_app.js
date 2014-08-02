TamilTrends.module("Video", function(Video, TamilTrends, Backbone, Marionette, $, _) {
	Video.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"videos": "listVideos",
			"video/:id": "showVideo"
		}
	});
	var API = {
		listVideos: function(options){
			new TamilTrends.Video.List.Controller(options);
		},
		showVideo: function(id){
			TamilTrends.Video.Show.Controller.showVideo(id);
		}
	}

	TamilTrends.on("video:list", function(){
		TamilTrends.navigate("videos");
		API.listVideos();
	});
	
	TamilTrends.on("playlist:selected", function(playlist_id){
		TamilTrends.navigate("videos");
		API.listVideos({playlist_id: playlist_id});
	});
	
	TamilTrends.on("video:show", function(id){
		TamilTrends.navigate("video/" + id);
		API.showVideo(id);
	});
	
	
	TamilTrends.addInitializer(function() {
		new Video.Router({
			controller: API
		});
	});
})
