define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/haveMortgage.html'
], function($, _, Backbone, ParentView, mainTemplate){

	var haveMortgageView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
		}
	});

	return new haveMortgageView;
});
