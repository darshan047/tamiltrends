TamilTrends.module("CopyRight.Show", function(Show, TamilTrends,
	Backbone, Marionette, $, _) {
	Show.CopyRight = Marionette.ItemView.extend({
		tagName: "p",
		template: "#copy-right-view"
	});
});
