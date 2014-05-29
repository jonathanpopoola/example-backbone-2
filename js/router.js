define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/header',
  'views/common/menu',
  'views/rightPanel',
  'views/landing',
  'views/personalBanking',
  'views/currentAccounts',
  'views/signIn',
  'views/cms/cmsView',
  'views/e-savings',
  'views/e-isa',
  'views/investments',
  'views/selectSilver',
  'views/carInsurance',
  'views/homeInsurance',
  'views/applyOne',
  'views/haveMortgage',
  'views/noMortgage',

  
], function($, _, Backbone, headerView, menuView, rightPanelView, landingView, personalBankingView, accountsView, signInView, CMS, savingView, isaView, investView,silverView, carInsur,homeInsurView,appOneView,haveMortgageView,noMortgageView){
	
	function getActions(actions) {
		return actions;
	}
	
	var AppRouter = Backbone.Router.extend({
		currentView: null,
		
		initialize: function() {
			
			this.showView(headerView);
			this.showView(menuView);
			//TODO set for TV-width
			console.log($(window).width());
			if($(window).width() > 180) {
				this.showView(rightPanelView);
			}
		},
	
		routes: {
			'': 'defaultAction',
			'personal': 'showPersonalBankingView',
			'accounts': 'showCurrentAccountsView',
			'signIn': 'showSignInView',
			'CMS': 'CMSView',
			'savingView' : 'esavingsView',
			'isaView' : 'showisaView',
			'investView' : 'showinvestmentView',
			'silverView' : 'viewsilverView',
			'carInsur' : 'showCarInsuranceView',
			'homeInsurView' : 'showHomeInsuranceView',
			'appOneView' : 'appOneShowView',
			'haveMortgageView': 'showhaveMortgageView',
			'noMortgageView':'shownoMortgageView',
		},

		defaultAction: function(actions){
			this.showView(landingView);
		},
		
		shownoMortgageView: function(actions) {
			this.showView(noMortgageView);
		},
		
		showhaveMortgageView: function(actions) {
			this.showView(haveMortgageView);
		},
		
		appOneShowView: function(actions) {
			this.showView(appOneView);
		},
		
		showHomeInsuranceView: function(actions) {
			this.showView(homeInsurView);
		},
		
		showCarInsuranceView: function(actions) {
			this.showView(carInsur);
		},
		
		viewsilverView: function(actions) {
			this.showView(silverView);
		},
		
		showinvestmentView: function(actions) {
			this.showView(investView);
		},
		
		showisaView: function(actions){
			this.showView(isaView);  
		},
		
		esavingsView: function(actions){
			this.showView(savingView); 
		},
		
		showPersonalBankingView: function(actions){
			this.showView(personalBankingView);
		},
		
		showCurrentAccountsView: function(actions){
			this.showView(accountsView);
		},

		showSignInView: function(actions){
			this.showView(signInView);
		},
		
		CMSView: function(actions){
			this.showView(CMS);
		},

		showView: function(view) {
			view.render();
			if(view.postRender) {
				view.postRender();
			}	
		}
	});

	var initialize = function(){
		new AppRouter();
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
