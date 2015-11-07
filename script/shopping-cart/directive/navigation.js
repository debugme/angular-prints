(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	ShoppingModule.directive('navigation', function($window) {
		var directive = {};
		directive.restrict = "E";
		directive.scope = {company: "=company", total: "=total"};
		directive.templateUrl = "script/shopping-cart/template/navigation.html";
		directive.link = function (scope, element, attr) {
			angular.element(document).ready(function () {
	        $('[data-toggle="tooltip"]').tooltip();
	    });
		};
		return directive;
	});

})();
