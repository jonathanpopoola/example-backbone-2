define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/applyOne.html'
], function($, _, Backbone, ParentView, mainTemplate){

	var appOneView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
		}
	});

	return new appOneView;
});
