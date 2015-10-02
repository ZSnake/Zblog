angular.module('Zblog.Controllers')
  .controller('HomeController', ['$scope', '$moment', '$state', 'postService', 'toaster', function ($scope, $moment, $state, postService, toaster) {
    	$scope.posts = {};
    	postService.GetAll().then(function(posts){
    		$scope.posts = posts.data;

    	}).catch(function(err){
    		toaster.pop('error', 'Oh noes!', 'We had trouble getting your posts. Heres the error: ' + err);
    	});

    	$scope.CreatePost = function(){
    		$state.go('newPost');
    	}
  }]);
