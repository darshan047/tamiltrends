TamilTrends.module("Video.Show", function(Show, TamilTrends,
	Backbone, Marionette, $, _) {
	Show.Video = Marionette.ItemView.extend({
		tagName: "div",
		template: "#video-player-template"
	});

});