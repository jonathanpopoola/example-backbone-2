define([ 
	'jquery', 
	'underscore', 
	'backbone',
	'text!templates/common/header.html',
	'text!templates/common/dropdown.html',
	'utils/menuEventProxy'
	], function($, _, Backbone, mainTemplate, dropdownTemplate) {

	var headerView = Backbone.View.extend({
		el : $('#header'),

		initialize: function() {
			menuProxy.on('menuToggle', this.menuToggle, this);
		},
		
		render : function() {
			//Important to use ' instead of " in dropdownTemplate. Breaks HTML of header otherwise
			this.$el.html(_.template(mainTemplate, {dropdownContent : dropdownTemplate}));
		},
		
		postRender : function() {
			$("#helpPopover", this.$el).popover();
			WL.Utils.replaceElementsText(null, null, null);
		},

		events : {
			"click #sideMenuButton" : "toogleSideMenu",
			"click #helpPopover" : "addPopoverOverlay",
			"click #sideMenuiPadButton" : "toggleiPadMenu",
			"click #logo" : "closeIpadMenu",
			
			
			/*TODO Would probably be better to handle this with HTML/CSS instead to move 
			 * the popover or set to fixed so that it could have a higher z-index than overlay...*/
			"click .popover-overlay, #logo, #rightMenu a" : "removePopoverOverlay",
		},
		
		toggleiPadMenu: function(event) {
			$("#header, #menu, #screen").toggleClass("ipad-visible-menu");
			$("#pgPersonalBankingTablet,#pgLanding, #pgCurrentAccounts,#pgSavings").toggleClass("fixed-pos");
		},
		closeIpadMenu: function(event) {
			$("#header, #menu, #screen").removeClass("ipad-visible-menu");
		
		},
		addPopoverOverlay: function(event) {
			//TODO Should check if it already exists...
			this.$el.append("<div class='popover-overlay'></div>");
		},
		
		removePopoverOverlay: function(event) {
			$('.popover-overlay', this.$el).remove();
			$('#helpPopover', this.$el).popover('hide');
		},
		
		toogleSideMenu : function(event) {
			this.removePopoverOverlay(event);
			event.preventDefault();
			//TODO Collapse all before showing?
			menuProxy.trigger("menuToggle");
		},
		
		menuToggle: function(msg) {
			$(this.$el).toggleClass("menu-showing");
			$('.navbar .container').toggleClass("fixed-header");
		},
	});

	return new headerView;
});
