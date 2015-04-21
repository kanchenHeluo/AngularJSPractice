testApp.factory('bookSvc', ['$cacheFactory', '$q', '$timeout', bookSvc]);

function bookSvc($cacheFactory, $q, $timeout){
	var books = [{
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

	function getBooks(){
		var deferred = $q.defer();

		var cacheData = $cacheFactory.get('booksId');
		if(!cacheData){
			cacheData = $cacheFactory('booksId');
		}
		var data = cacheData.get('books');
		if(data){
			deferred.resolve(data);
		}else{
			$timeout(function(){	
				cacheData.put('books', books);
				deferred.resolve(books);
			},5000);
		}		
		return deferred.promise;
	};

	return {
		getBooks: getBooks
	}
};