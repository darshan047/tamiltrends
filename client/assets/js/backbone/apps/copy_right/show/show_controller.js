TamilTrends.module("CopyRight.Show", function(Show, TamilTrends,
	Backbone, Marionette, $, _) {
	Show.Controller = {
		showCopyRight: function() {
			var copyRight = new Show.CopyRight();
			TamilTrends.copyRightRegion.show(copyRight);
		}
	};

	TamilTrends.on("copyRight:show", function(){
		TamilTrends.CopyRight.Show.Controller.showCopyRight();
	});


});
