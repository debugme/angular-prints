(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	var ShoppingController = ShoppingModule.controller("ShoppingController", function($scope, CatalogService, TrolleyService, CaptionService, OrderService) {
		$scope.catalog = CatalogService;
		$scope.trolley = TrolleyService;
		$scope.caption = CaptionService;
		$scope.order = OrderService;
		$scope.processItem = function(item) {
			if (item.available) {
				$scope.catalog.removeItem(item.id);
				$scope.trolley.insertItem(item);
			} else {
				$scope.trolley.removeItem(item.id);
				$scope.catalog.insertItem(item.id);
			}
		};
	});

})();
