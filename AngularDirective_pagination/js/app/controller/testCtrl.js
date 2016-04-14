testApp.controller('testCtrl', function($scope){
	$scope.msg = 'halou';
	$scope.books = [];
	$scope.bookCnt = 57;

	var newBook = function(i){
		return {id: i, name: 'name'+i};
	};

	$scope.init = function(){
		for(var i=0; i<57; i++){
			$scope.books[i] = newBook(i);
		}
	};

	/*pagination*/
	$scope.currentPage = 1;
	$scope.perPageSize = 5;


});