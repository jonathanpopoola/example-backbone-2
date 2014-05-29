define([
        'jquery',
        'underscore',
        'backbone',
        'views/common/parent',
        'text!templates/cms/cmsView.html'
      ], function($, _, Backbone, ParentView, mainTemplate){

      	var cmsView = ParentView.extend({
      		render : function() {
      			this.$el.html(mainTemplate);
      			$("#menu").hide();
      		},
      		
      		
      	});

      	return new cmsView;
      });
