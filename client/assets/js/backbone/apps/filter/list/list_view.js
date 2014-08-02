TamilTrends.module("Header.List", function(List, TamilTrends,
	Backbone, Marionette, $, _) {
	List.Header = Marionette.ItemView.extend({
		tagName: "li",
		template: "#header-link"
	});
	List.Headers = Marionette.CompositeView.extend({
		template: "#header-template",
		className:"header_top",
		childView: List.Header,
		childViewContainer: "ul"
	});
});
