define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/noMortgage.html'
], function($, _, Backbone, ParentView, mainTemplate){

	var noMortgageView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
		}
	});

	return new noMortgageView;
});
