define([
  'jquery',
  'underscore',
  'backbone',
  'views/common/parent',
  'text!templates/investments.html',
  'text!templates/common/guidesTools.html'
], function($, _, Backbone, ParentView, mainTemplate, guidesTemplate){

	var investView = ParentView.extend({
		render : function() {
			this.$el.html(mainTemplate);
			$("#guidesHolder", this.$el).html(guidesTemplate); 
		}
	});

	return new investView;
});
