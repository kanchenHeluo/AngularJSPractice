testApp.controller('testCtrl', ['$cookies', '$cookieStore', testCtrl]);

function testCtrl($cookies, $cookieStore){
	var vm = this;
	vm.books = [{
		id: 1,
		title: '八卦艺术史',
		author: '其四'
	},{
		id: 2,
		title: 'Black Swan',
		author: 'Nasim.Nicolas.Taleb'
	},{
		id: 3,
		title: 'Hunger Game',
		author: 'Suzanne Collins'
	}];

	vm.currentBook = '';


	vm.setCurrentBook = function(item){
		vm.currentBook = item.title;		
		$cookieStore.put('lastViewBook', vm.currentBook);
	};

	vm.setAsFavorite = function(item){
		$cookies.favoriteBook = item.title;
	};
};