routeApp.factory('eventData',function($resource){
	var resource = $resource('/data/event/:id', {id:'@id'},
		{'getAll':{method: 'GET', isArray:true}});

	return {
		getEvent: function(eventId){
			return resource.get({id:eventId});
		},
		getAllEvent: function(){
			return resource.query();
		}
	}
	
});