TamilTrends.module("Video.Show", function(Show, TamilTrends,
	Backbone, Marionette, $, _) {
	Show.Controller = {
		showVideo: function(id) {
			var videos = TamilTrends.request("videos:entities");
			var view;
			var video = videos.get(id);
			console.log(video);
			if(video !== undefined){
				var videoView = new Show.Video({
					model:video
				});
			view = videoView;
			TamilTrends.mainRegion.show(videoView);
			}
		}
	};
});