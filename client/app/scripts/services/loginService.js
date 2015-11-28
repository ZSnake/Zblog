angular.module('Zblog.Services').factory('loginService', ['$http',
	function($http){
		return {
	        Logout: function () {
	            return $http.get("/api/logout");
	        },
	        Login: function(payload){
	        	return $http.post("/api/login", payload);
	        },
	    };
}]);
