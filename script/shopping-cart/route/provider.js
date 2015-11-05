(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	ShoppingModule.config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'script/shopping-cart/partial/catalog.html',
				controller: 'ShoppingController'
			}).
			when('/order', {
				templateUrl: 'script/shopping-cart/partial/order.html',
				controller: 'ShoppingController'
			}).
			when('/thanks', {
				templateUrl: 'script/shopping-cart/partial/thanks.html',
				controller: 'ShoppingController'
			}).
			otherwise({redirectTo: '/'});
	}]);

})();
