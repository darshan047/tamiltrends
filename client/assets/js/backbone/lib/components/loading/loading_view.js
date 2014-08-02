TamilTrends.module("Components.Loading", function(Loading, App,
    Backbone, Marionette, $, _) {
    Loading.LoadingView = Marionette.ItemView.extend({
        template: _.template(""),
        className: "loading-container",

        onShow: function() {
            var options = this.getOptions();
            this.$el.spin(options);
            console.log("showing loading view");
        },
        onClose: function() {
            this.$el.spin(close);
            console.log("closing loading view");
        },
        getOptions: function() {
            var options= {
                lines: 10, // The number of lines to draw
                length: 5, // The length of each line
                width: 2.0, // The line thickness
                radius: 6, // The radius of the inner circle
                corners: 1, // Corner roundness (0..1)
                rotate: 9, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#FFF', //, //rgb orrrggbb
                speed: 1, // Rounds per second
                trail: 60, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: true, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)
                top: '50%', // Top position relative to parent in px
                left: '50%' // Left position relative to parent in px
            };
            return options;
        }
    });
});
