define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/common/menu.html',
  'utils/menuEventProxy'
], function($, _, Backbone, mainTemplate){
	
	var menuView = Backbone.View.extend({
		el : $('#menu'),
		
		initialize: function() {
			menuProxy.on('menuToggle', this.menuToggle, this);
		},
		
		render : function() {
			this.$el.html(mainTemplate);
		},
		
		events: {
			"click .page-link": "menuiPadItemSelected",
			"click .accordion-toggle": "toogleAccordianIcon"
		},
		
		menuiPadItemSelected: function(event) {
			$("#header, #menu, #screen").toggleClass("ipad-visible-menu");
		},
		
		toogleAccordianIcon: function(event) {
			$(event.target).find('.expand-icon').toggleClass('expanded');
		}
	});

	return new menuView;
});
