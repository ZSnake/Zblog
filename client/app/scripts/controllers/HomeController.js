angular.module('Zblog.Controllers')
  .controller('HomeController', ['$scope', '$moment', 'postService', function ($scope, $moment, postService) {
    	$scope.posts = {};
    	postService.GetAll().then(function(posts){
    		$scope.posts = posts.data;
    		console.log($scope.posts);
    	}).catch(function(err){
    		alert("Something really motherfucking bad happened, bruh: " + err);
    	});

  }]);
