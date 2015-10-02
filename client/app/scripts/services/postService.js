angular.module('Zblog.Services').factory('postService', ['$http',
	function($http){
		return {
	        GetAll: function () {
	            return $http.get("/api/posts");            
	        },
	        CreatePost: function(payload){
	        	return $http.post("/api/post", payload);
	        },
	        GetById: function(id){
	        	return $http.get("/api/posts/" + id);
	        }
	    };  
}]);