angular.module('Zblog.Controllers')
  .controller('HomeController', ['$scope', '$moment', '$state', 'postService', function ($scope, $moment, $state, postService) {
    	$scope.posts = {};
    	postService.GetAll().then(function(posts){
    		$scope.posts = posts.data;
    	}).catch(function(err){
    		alert("Something really motherfucking bad happened, bruh: " + err);
    	});

    	$scope.CreatePost = function(){
    		$state.go('newPost');
    	}
  }]);
