TamilTrends.module("Controllers", function(Controllers, App, Backbone, Marionette, $, _) {
    Controllers.Application = Marionette.Controller.extend({
        constructor: function(options) {
            options = options ? options : {};
            this.region = options.region || App.request("default:region");
            Marionette.Controller.prototype.constructor.apply(this, arguments);
            //this._instance_id = _.uniqueId("controller");
            //App.execute("register:instance", this, this._instance_id);
        },
        close: function() {
            console.log("closing", this);
            App.execute("unregister:instance", this, this._instance_id);
            Marionette.Controller.prototype.close.apply(this);
        },
        show: function(view, options) {
            _.defaults(options, {
                loading: false,
                region: this.region
            });
            //allow us to pass in a controller instance instead of a view
            //if controller instance, set view to the mainView of the controller
            view = view.getMainView ? view.getMainView() : view;
            if (!view) {
                throw new Error("getMainView() did not return a view instance or #{view?.constructor?.name} is not a view instance");
            }
            //
            this.setMainView(view)
            this._manageView(view, options);
        },
        getMainView: function() {
            return this._mainView;
        },
        setMainView: function(view) {
            // the first view we show is always going to become the mainView of our
            // controller (whether its a layout or another view type).  So if this
            // *is* a layout, when we show other regions inside of that layout, we
            // check for the existance of a mainView first, so our controller is only
            // closed down when the original mainView is closed.
            if (this._mainView) return;
            this._mainView = view
            this.listenTo(view, "close", this.close);
        },
        _manageView: function(view, options) {
            if (options.loading) {
                // show the loading view
                App.execute("show:loading", view, options);
            } else {
                options.region.show(view);
            }
        },

        mergeDefaultsInto: function(obj) {
            obj = _.isObject(obj) ? obj : {};
            return _.defaults(obj, this._getDefaults());
        },

        _getDefaults: function() {
            return _.clone(_.result(this, "defaults"));
        }
    });

});
