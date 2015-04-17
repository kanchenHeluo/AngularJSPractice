//vm?
//deferred?

testApp.controller('testCtrl', function($scope, $q, dataSvc){

	//var vm = this;
	// testCtrl as t

	$scope.msg = 'halou';

	$scope.viplist = [];

	$scope.fetchData = function(){
		$scope.viplist = [];
		dataSvc.getCustomerVIP().then(function(result){
			$scope.viplist = result;
			throw 'this is exception';
		}, function(reason){
			console.log('error:'+reason);
		}, function(notification){
			console.log('notify:'+notification)
		}).catch(function(exceptioninfo){
			console.log('exceptioninfo:'+exceptioninfo);
		}).finally(function(){
			console.log('at last');
		});
	};

	$scope.fetch = function(){
		$scope.viplist = [];
		$q.all([dataSvc.getCustomerVIP(), dataSvc.getCustomer()]).then(function(resultArr){
			var arr1 = resultArr[0];
			var arr2 = resultArr[1];

			for(var i=0; i<arr1.length; i++){
				for(var j=0; j<arr2.length; j++){
					if(arr1[i].id == arr2[j].id){
						$scope.viplist.push(arr1[i]);
					}
				}
			}
		});
	}
});