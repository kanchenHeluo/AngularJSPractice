testApp.factory('dataSvc',['$q', '$timeout', dataSvc]);

function dataSvc($q, $timeout){
	var GoodsVIP = [
		{id:2, name:'lijian'}, {id:7, name:'eason'}, {id:9, name:'wangfei'}
	];

	var Goods = [
		{id:1, name:'alin'}, {id:2, name:'lijian'}, {id:3, name:'zhixuan'}
	];

	function getCustomerVIP(){
		var deferred = $q.defer();

		$timeout(function(){
			var success = true;
			if(success){
				deferred.notify('this is notification from vip');
				deferred.resolve(GoodsVIP);
			}else{
				deferred.reject('hei it failed to get the lists');
			}
		}, 2000);

		return deferred.promise;
	};

	function getCustomer(){
		var deferred = $q.defer();

		$timeout(function(){
			var success = true;
			if(success){
				deferred.notify('this is nofication from customer');
				deferred.resolve(Goods);
			}else{
				deferred.reject('hei it failed to get the lists');
			}
		}, 2000);

		return deferred.promise;
	};

	return {
		getCustomerVIP : getCustomerVIP,
		getCustomer : getCustomer
	}

};
