routeApp.controller("eventDetailCtrl", function($scope, $routeParams){
	$scope.event = eventData.getEvent($routeParams.eventId);
});