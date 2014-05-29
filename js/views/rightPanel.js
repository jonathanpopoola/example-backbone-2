define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/rightPanel.html',
  'text!templates/signIn.html',
], function($, _, Backbone, mainTemplate, signInTemplate){

	var menuView = Backbone.View.extend({
		el : $('#rightPanel'),
		initialized: false,
		currentTemplate: null,
		logInTemplate: null,
		signInTemplate: null,
		loggedInTemplate: null,
		
		initialize: function() {
			
		},
		
		render : function() {
			this.$el.html(mainTemplate);
			$("#signIn", this.$el).html(signInTemplate);
			this.renderScreen();
		},
		
		renderScreen: function() {
			if(!this.initialized)
				this.initializeTemplates();
			$("#signInContainer", this.$el).html(this.currentTemplate);
		},
		
		initializeTemplates: function() {
			this.logInTemplate = _.template($("#logInTemplate").html());
			this.signInTemplate = _.template($("#signInTemplate").html());
			this.loggedInTemplate = _.template($("#loggedInTemplate").html());
			this.currentTemplate = this.logInTemplate;
			this.initialized = true;
		},
		
		events: {
			"click #logInBtn" : "displaySignIn",
			"click #signInBtn" : "displayWelcome",
		},
		
		displaySignIn: function(event) {
			event.preventDefault();
			this.currentTemplate = this.signInTemplate;
			this.renderScreen();
		},
		
		displayWelcome: function(event) {
			event.preventDefault();
			this.currentTemplate = this.loggedInTemplate;
			this.renderScreen();
		}
	});

	return new menuView;
});
