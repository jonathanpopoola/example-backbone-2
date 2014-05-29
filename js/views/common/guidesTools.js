define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/common/guidesTools.html',
], function($, _, Backbone, mainTemplate){

	var guidesToolsView = Backbone.View.extend({

		
		initialize: function() {
			console.log("sam");
		},
		
		
		
		events: {
			"click #findBranch" : "revealBranch"
			
		},
		
		revealBranch: function(event) {
			event.preventDefault();
			console.log("reveal branch");
		}
		
		
	});

	return new guidesToolsView;
});
