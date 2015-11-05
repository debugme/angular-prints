(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	var TrolleyService = ShoppingModule.service("TrolleyService", function() {
		var items = {};
		this.insertItem = function(item) {
			items[item.id] = item;
		};
		this.removeItem = function(id) {
			delete items[id];
		};
		this.getTotal = function() {
			var sum = 0.0;
			for (var id in items)
				sum += items[id].cost;
			return sum;
		};
		this.getItems = function() {
			return items;
		};
		this.reset = function() {
			for (var id in items)
				delete items[id];
		};
	});

})();
