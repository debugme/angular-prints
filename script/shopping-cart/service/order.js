(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	var OrderService = ShoppingModule.service("OrderService", function(CatalogService, TrolleyService) {
		 this.deliveryOption = 0;
		 var options = [
			 {id: 0, details: 'Bronze: 5 - 6 business days', cost: 5},
			 {id: 1, details: 'Silver: 3 - 4 business days', cost: 10},
			 {id: 2, details: 'Gold: 1 - 2 business days', cost: 20},
		 ];
		 this.getOptions = function() {
			 return options;
		 };
		 this.getTotalCost = function() {
			 return TrolleyService.getTotal();
		 };
		 this.getDeliveryCost = function() {
				return options[this.deliveryOption].cost;
		 };
		 this.reset = function() {
			 CatalogService.reset();
			 TrolleyService.reset();
		 };
	});

})();
