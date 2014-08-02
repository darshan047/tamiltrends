TamilTrends.module("Entities", function(Entities, TamilTrends,
	Backbone, Marionette, $, _) {
	Entities.Header = Backbone.Model.extend({});
	Entities.Headers = Backbone.Collection.extend({
		model: Entities.Header
	});

	var headers;

	var initializeHeaders = function() {
		headers = new Entities.Headers([{
				name: "Videos",
				url: "videos",
				icon: "videos"
			}])
	}

	var API = {
		getHeaderEntities: function(){
			if (headers === undefined){
				initializeHeaders();
			}
			return headers;
		}
	}
	TamilTrends.reqres.setHandler("headers:entities", function() {
		return API.getHeaderEntities();
	});
});