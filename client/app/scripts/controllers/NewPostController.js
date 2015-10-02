angular.module('Zblog.Controllers')
  .controller('NewPostController', ['$scope', '$moment', 'postService', function ($scope, $moment, postService) {

    	$scope.post = {};

    	$scope.CreatePost = function(){
    		postService.CreatePost({title: $scope.post.title, subtitle: $scope.post.subtitle, content: $scope.post.content, author: 'Zsnake', date:new Date()})
    	}

  }]);
