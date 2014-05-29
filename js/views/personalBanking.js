define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/personalBanking.html'
], function($, _, Backbone, ParentView, mainTemplate){

	var personalView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
		}
	});

	return new personalView;
});
