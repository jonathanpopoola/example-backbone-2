require.config({
	baseUrl: "js",
	paths: {
		"jquery": 'libs/jquery-1.8.2.min',
		"underscore": 'libs/underscore/underscore',
		"backbone": 'libs/backbone/backbone',
		"text": 'libs/require/text',
		"hammer": 'libs/hammer',
		"jHammer":'libs/jquery.specialevent.hammer',
		//"gmaps":'http://maps.google.com/maps/api/js?key=AIzaSyC_Ri9HUBzM6NC2-s9tyeFvhXJkR19suvc&sensor=false',
		"bootstrap": 'libs/bootstrap/js/bootstrap',
		"templates": '../templates'
	},
	shim: {
	    'bootstrap': ['jquery'],
	    'hammer':['jquery'],
	    'jHammer':['hammer'],
		// Backbone
	    "backbone": {
	      // Depends on underscore and jQuery
	      "deps": ["underscore", "jquery"],
	      // Exports the global window.Backbone object
	      "exports": "Backbone"
	    }
	},
	waitSeconds: 10
});

require(['app', 'bootstrap', 'jHammer'], function(App){
	App.initialize();
});

