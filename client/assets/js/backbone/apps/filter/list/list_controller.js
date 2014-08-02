TamilTrends.module("Header.List", function(List, TamilTrends,
	Backbone, Marionette, $, _) {
	List.Controller = {
		listHeader: function() {
			var Header = Backbone.Model.extend({});
			var Headers = Backbone.Collection.extend({
				model: Header
			});
			var links = TamilTrends.request("headers:entities");
			var headers = new List.Headers({
				collection: links
			});
			TamilTrends.headerRegion.show(headers);
		}
	};

	TamilTrends.on("header:list", function() {
		TamilTrends.Header.List.Controller.listHeader();
	});
});
