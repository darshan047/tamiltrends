TamilTrends.module("HeaderApp.List", function(List, App,
    Backbone, Marionette, $, _) {
    List.Nav = Marionette.ItemView.extend({
        tagName: "li",
        className: "active",
        template: "#header-link"
    });
    List.Header = Marionette.CompositeView.extend({
        template: "#header-template",
        className: "header_top",
        childView: List.Nav,
        childViewContainer: "ul",
        
        events: {
        "change #playlistContainer select": "playlistSelected"
    },

    playlistSelected: function(){
        var playlistId = this.$("#playlistContainer select").val();
        console.log("trigger playlist:selected");
        this.trigger("playlist:selected", playlistId);
    }

    });
});
