(function() {

	"use strict";

	var ShoppingModule = angular.module("ShoppingModule");

	var CaptionService = ShoppingModule.service("CaptionService", function() {
		this.company = "Vintage Prints";
		this.copyright = "\u00A9 Asad Razvi (2015)";
		this.thankYou = "Thank you for visiting us and please come back soon!";
	});

})();
