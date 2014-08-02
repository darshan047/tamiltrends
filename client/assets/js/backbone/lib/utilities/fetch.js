TamilTrends.module("Utilities", function(Utilities, App, Backbone, Marionette, $, _){

  App.commands.setHandler("when:fetched", function(entities, callback){
  	   xhrs = _.chain([entities]).flatten().pluck("_fetch").value();
    //if _.isArray(entities)
    //   xhrs.push(entity._fetch) for entity in entities
    // else
    //   xhrs.push(entities._fetch)

    $.when.apply($, xhrs).done(callback);
  });
});