/*global TamilTrends:true, Marionette, Backbone*/
TamilTrends = new Marionette.Application();


TamilTrends.addRegions({
	headerRegion: "#header-region",
	mainRegion: "#main-region",
	copyRightRegion: "#copy-right-region"
});

TamilTrends.addInitializer(function(){
	TamilTrends.module("HeaderApp").start();
	//TamilTrends.trigger("video:list");
});

TamilTrends.reqres.setHandler("default:region",function(){
	return TamilTrends.mainRegion;
});

TamilTrends.on("before:start", function() {
	console.log("on before start");
});

TamilTrends.navigate = function(route, options) {
	options || (options = {});
	Backbone.history.navigate(route, options);
}

TamilTrends.getCurrentRoute = function() {
	return Backbone.history.fragment;
}

TamilTrends.on("start", function() {
	console.log("on start");
	if (Backbone.history) {
		Backbone.history.start({});

		if (this.getCurrentRoute() === "") {
			TamilTrends.navigate("videos", {trigger: true});
			//TamilTrends.trigger("copyRight:show");
			//TamilTrends.trigger("header:list");
			//TamilTrends.trigger("video:list");
		}
	}
});