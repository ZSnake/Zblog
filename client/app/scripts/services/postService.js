angular.module('Zblog.Services').factory('postService', ['$http',
	function($http){
		return {
	        GetAll: function () {
	            return $http.get("/api/posts");            
	        },
	    };  
}]);