var routeApp = angular.module('routeApp',['ngRoute'])
.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/events',
	{
		templateUrl: 'templates/EventList.html',
		controller: 'eventListCtrl'
	}).when('/detail/:eventId',{
		templateUrl: 'templates/EventDetail.html',
		controller: 'eventDetailCtrl'
	}).otherwise({redirectTo: '/events'});

	$locationProvider.html5Mode(true);
});