TamilTrends.module("HeaderApp.List", function(List, App,
	Backbone, Marionette, $, _) {
	List.Controller = App.Controllers.Application.extend({
		initialize: function(options) {
			var listView = this.getListView(options.navs);
			listView.on("playlist:selected", function(playlistId){
				App.trigger("playlist:selected", playlistId);
			});
			App.headerRegion.show(listView);
			var playlists = TamilTrends.request("playlists:entities");
			App.execute("when:fetched", playlists, function(values){
				$.each(values, function(key, value) {   
     				$('#playlistContainer select')
         				.append($("<option></option>")
         				.attr("value",value._id)
         				.text(value.title));
					});
					$('#playlistContainer select').selectric();
			}.bind(listView));
		},
		getListView: function(navs){
			return new List.Header({collection:navs});
		}
	});
});