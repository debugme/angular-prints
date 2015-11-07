require.config({
    baseUrl: 'script',
    paths: {
        jquery:     	'jquery-2.1.4/jquery-2.1.4.min',
        bootstrap:   	'bootstrap-3.3.5/dist/js/bootstrap.min',
        angular: 			'angularjs-1.4.7/angular.min',
				angularRoute: 'angularjs-1.4.7/angular-route.min',
				common: 			'shopping-cart/common',
				navigation: 	'shopping-cart/directive/navigation',
				copyright:		'shopping-cart/directive/copyright',
				caption:			'shopping-cart/service/caption',
				catalog:			'shopping-cart/service/catalog',
				trolley:			'shopping-cart/service/trolley',
				order:				'shopping-cart/service/order',
				shopping:			'shopping-cart/controller/shopping',
				provider:			'shopping-cart/route/provider'
    }
});

require("jquery,bootstrap,angular,angularRoute,common,navigation,copyright,caption,catalog,trolley,order,shopping,provider".split(","), function() {});
