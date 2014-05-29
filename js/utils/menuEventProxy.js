define([
'underscore', 
'backbone'], 
function(_, Backbone) {
	window.menuProxy = {};
	_.extend(menuProxy, Backbone.Events);
});