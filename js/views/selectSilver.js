define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/selectSilver.html',
  'text!templates/common/guidesTools.html'
], function($, _, Backbone, ParentView, mainTemplate, guidesTemplate){

	var silverView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
			$("#guidesHolder", this.$el).html(guidesTemplate);
		}
	});

	return new silverView;
});
