angular.module('Zblog.Controllers')
  .controller('NewPostController', ['$scope', '$moment', 'postService', function ($scope, $moment, postService) {

    	$scope.post = {};

    	$scope.CreatePost = function(){
    		console.log($scope.post.content);
    	}

  }]);
