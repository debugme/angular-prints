(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	ShoppingModule.directive('navigation', function() {
		var directive = {};
		directive.restrict = "E";
		directive.scope = {company: "=company", total: "=total"};
		directive.templateUrl = "script/shopping-cart/template/navigation.html";
		return directive;
	});

})();
