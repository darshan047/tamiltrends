TamilTrends.module("Video.List", function(List, App,
	Backbone, Marionette, $, _) {

	List.Controller = App.Controllers.Application.extend({

		initialize: function (options) {
			if(options){
				var videos = TamilTrends.request("videos:entities", options);
			}else{
				var videos = TamilTrends.request("videos:entities");
			}
			
			App.on("pagination:change", function(page){
				videos.getPage(page);
			});
			App.on("playlist:selected", function(playlistId){
				videos.fetch({"data": {"playlistId": playlistId}});
				console.log(playlistId);
			})
			
			this.layout = this.getLayoutView(videos);

			this.listenTo(this.layout, "show", function() {
				this.showVideoRegion(videos);
				this.showPaginationRegion();
			});

			//this.videosView = this.getVideoView(videos);
			//this.listenTo(this.videosView, "show",);
			//this.listenTo(videosView, "close", this.close);
			//this.show(videosView, {"loading": true});
			this.show(this.layout, {loading:true});
			
			/*App.execute("when:fetched", [videos], function(){
				TamilTrends.mainRegion.show(videosView);
			});*/
			//TamilTrends.mainRegion.show(videosView);
			

		},
		showVideoRegion: function(videos) {
			var videosView = this.getVideoView(videos);
			videosView.on("childview:video:show", function(childView, model){
				console.log("childview:video:show");
				App.trigger("video:show", model.get("id"));
			});
			this.show(videosView, {region: this.layout.videoRegion});
		},
		showPaginationRegion: function() {
			var paginationView = this.getPaginationView();
			paginationView.on("pagination:change", function(page){
				App.trigger("pagination:change", page);
			});
			this.show(paginationView, {region: this.layout.paginationRegion});
		},
		getLayoutView: function(videos){
			return new List.Layout({
				collection: videos
			});
		},
		getVideoView: function(videos){
			return new List.Videos({
				collection: videos
			});
		},
		getPaginationView: function(){
			return new List.Pagination({
			});
		}
	});
});
