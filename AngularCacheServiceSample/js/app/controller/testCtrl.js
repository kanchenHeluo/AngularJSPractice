testApp.controller('testCtrl', function(bookSvc){
	var vm = this;
	vm.books = [];
	vm.againBooks = [];

	vm.getBooks = function(){
		bookSvc.getBooks().then(function(data){
			vm.books = data;
		});
	};

	vm.getAgainBooks = function(){
		bookSvc.getBooks().then(function(data){
			vm.againBooks = data;
		});
	};

});