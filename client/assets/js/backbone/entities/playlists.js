TamilTrends.module("Entities", function(Entities, TamilTrends,
	Backbone, Marionette, $, _) {
	Entities.Playlist = Backbone.Model.extend({
		parse: function(response){
			response.id = response._id;
			return response;
		}
	});
	Entities.Playlists = Backbone.Collection.extend({
		model: Entities.Playlist
	});

	var playlists;

	var initializePlaylists = function(options) {
		playlists = new Entities.Playlists();
		playlists.url= "/api/playlists",
		playlists.fetch();
	}

	var API = {
		getPlaylistEntities: function(options) {
			if (playlists === undefined) {
				initializePlaylists(options);
			}
			return playlists;
		}
	}
	TamilTrends.reqres.setHandler("playlists:entities", function(options) {
		return API.getPlaylistEntities(options);
	});
});
