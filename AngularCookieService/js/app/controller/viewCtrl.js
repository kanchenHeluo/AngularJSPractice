
testApp.controller('viewCtrl', ['$cookies', '$cookieStore', viewCtrl]);

function viewCtrl($cookies, $cookieStore){
	var vm = this;

	vm.currentBook = $cookieStore.get('lastViewBook');
	vm.favoriteBook = $cookies.favoriteBook;

	vm.test = function(){
		vm.currentBook = $cookieStore.get('lastViewBook');
		vm.favoriteBook = $cookies.favoriteBook;
	};
};