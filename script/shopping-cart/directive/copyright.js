(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	ShoppingModule.directive('copyright', function() {
		var directive = {};
		directive.restrict = "E";
		directive.scope = {message: "=message"};
		directive.templateUrl = "script/shopping-cart/template/copyright.html";
		return directive;
	});

})();
