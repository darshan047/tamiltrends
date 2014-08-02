TamilTrends.module("HeaderApp", function(HeaderApp, App, Backbone, Marionette, $, _) {

        var API = {
            list: function(navs) {
                new HeaderApp.List.Controller({
                    navs: navs,
                    region: App.headerRegion
                });
            }
        };
        HeaderApp.on("start", function() {
            var navs = TamilTrends.request("headers:entities");
            API.list(navs);
        });
});
