(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	var CatalogService = ShoppingModule.service("CatalogService", function() {
		var items = {
			'andrew.och': {id: 'andrew.och', firstname: 'Andrew', lastname: 'Och', position: 'Seaman', cost: 25, available: true},
			'asad.razvi': {id: 'asad.razvi', firstname: 'Asad', lastname: 'Razvi', position: 'Diplomat', cost: 45, available: true},
			'chris.henson': {id: 'chris.henson', firstname: 'Chris', lastname: 'Henson', position: 'Sailor', cost: 15, available: true},
			'david.bailey': {id: 'david.bailey', firstname: 'David', lastname: 'Bailey', position: 'Broker', cost: 35, available: true},
			'gordon.banks': {id: 'gordon.banks', firstname: 'Gordon', lastname: 'Banks', position: 'Spy', cost: 45, available: true},
			'nigel.bell': {id: 'nigel.bell', firstname: 'Nigel', lastname: 'Bell', position: 'Airman', cost: 75, available: true},
			'ross.weir': {id: 'ross.weir', firstname: 'Ross', lastname: 'Weir', position: 'Captain', cost: 95, available: true},
			'daniel.taylor': {id: 'daniel.taylor', firstname: 'Dan', lastname: 'Taylor', position: 'Nurse', cost: 55, available: true},
		};
		this.insertItem = function(id) {
			items[id].available = true;
		};
		this.removeItem = function(id) {
			items[id].available = false;
		};
		this.getItems = function() {
			return items;
		};
		this.reset = function() {
			for (var id in items)
				items[id].available = true;
		};
	});

})();
