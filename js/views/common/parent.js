define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'utils/menuEventProxy'
	], function($, _, Backbone) {

	var ParentView = Backbone.View.extend({
		el : $("#screen"),

		initialize: function() {
			var self = this;
			$(window).resize(function() {
				 self.adjustWidth(); 
			});
		},
		
		postRender : function() {
			menuProxy.on('menuToggle', this.menuToggle, this);
			WL.Utils.replaceElementsText(null, null, null);
			this.adjustWidth();
		},
		
		unregisterMenuEvent: function() {
			menuProxy.off('menuToggle', this.menuToggle, this);
		},

		events : {
		},

		menuToggle: function(msg) {
			$(this.$el).toggleClass("menu-showing");
		},
		
		adjustWidth: function() {
			//$(this.$el).css("width", $(window).width()+"px");
		},

		scrollToTop : function() {
			$("html, body").animate({
				scrollTop : 0
			}, "slow");
		},

		dummy : function(event) {
			event.preventDefault();
		}
	});

	return ParentView;
});
