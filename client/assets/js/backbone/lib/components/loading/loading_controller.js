TamilTrends.module("Components.Loading", function(Loading, App,
	Backbone, Marionette, $, _) {
	Loading.LoadingController = App.Controllers.Application.extend({
		initialize: function (options) {
			var view = options.view;
			var config = options.config;

			var config = _.isBoolean(config) ? {} : config;
			_.defaults(config, {
				loadingType: "spinner",
				entities: this.getEntities(view),
				debug: false
			});
			var loadingView = this.getLoadingView();
			this.show(loadingView, {});
			this.showRealView(view, loadingView, config);
		},
		showRealView: function (realView, loadingView, config) {
			App.execute("when:fetched", config.entities, function(){

				if(this.region.currentView != loadingView) {
					realView.close();
					return;
				}
				config.debug ? false : this.show(realView, {});
			}.bind(this));
		},
		getEntities: function(view){
			return _.chain(view).pick("model","collection").toArray().compact().value();
		},
		getLoadingView: function(){
			return new Loading.LoadingView();
		}
	});

	App.commands.setHandler("show:loading", function(view, options) {
		return new Loading.LoadingController({
			view: view,
			region: options.region,
			config: options.loading
		});
	});
});
