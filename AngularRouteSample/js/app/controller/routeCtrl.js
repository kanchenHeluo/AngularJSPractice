routeApp.controller("routeCtrl", function($scope){
	$scope.messages = "route sample";

	$scope.obj={
		events : [{
			id: 1,
			name: 'badminton',
			date: '2015/10/01',
			location: 'school gym'
		},{
			id: 2,
			name: 'having fun',
			date: '2015/05/01',
			location: 'guanji'
		}]
	};
});