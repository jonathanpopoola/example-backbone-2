define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/landing.html'
], function($, _, Backbone, ParentView, mainTemplate){

	var landingView = ParentView.extend({
		
		initialize: function() {
			var self = this;
			$(window).resize(function() {
				 self.adjustHeight(); 
			});
		},
		
		render : function() {
			this.$el.html(mainTemplate);
			this.adjustHeight();
		},
	
		adjustHeight: function() {
			
			//TODO Subtract header and footer height. Not really self contained view but...
			
			//Adding 10 because of margin for secondary content in column two
			var primaryContent = $(window).height() * 0.66 + 10;
			var secondaryContent = $(window).height() * 0.33;
			$(".primary-content", this.$el).css("min-height", primaryContent+"px");
			$(".secondary-content", this.$el).css("min-height", secondaryContent+"px");
		},

	});

	return new landingView;
});
