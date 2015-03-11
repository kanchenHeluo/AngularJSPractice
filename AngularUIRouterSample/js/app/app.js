var identifyApp = angular.module('identifyApp',['ui.router']);

identifyApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/identify');

	$stateProvider
	.state('identify',{
		url: '/identify',
		templateUrl: 'templates/Identify.html',
		controller: 'identifyCtrl'
	})
	.state('about',{
		url: '/about',
		templateUrl: 'templates/About.html'
	})
}]);