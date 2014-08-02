TamilTrends.module("Video.List", function(List, TamilTrends,
    Backbone, Marionette, $, _) {
    List.Layout = Marionette.LayoutView.extend({
        template: "#videos-layout",

        regions: {
            videoRegion: "#video-region",
            paginationRegion: "#pagination-region"
        }
    });
    List.Video = Marionette.ItemView.extend({
        tagName: "div",
        className: "column_middle_grid1",
        template: "#video-item-template",
        events: {
            "click .profile_picture": "showClicked"
        },
        showClicked: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.trigger("video:show", this.model);
        }
    });
    List.Pagination = Marionette.ItemView.extend({
        tagName: "div",
        className: "column_full",
        template: _.template(""),
        onShow: function() {
            this.$el.pagination(150, {
                items_per_page: 20,
                load_first_page: false,
                callback: (this.pageNumberClicked).bind(this)
            });
        },
        pageNumberClicked: function(page) {
            this.trigger("pagination:change", page + 1);
        }
    });
    List.Videos = Marionette.CollectionView.extend({
        childView: List.Video,
        childViewContainer: "div"
    });
});
