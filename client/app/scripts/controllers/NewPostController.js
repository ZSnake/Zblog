angular.module('Zblog.Controllers')
  .controller('NewPostController', ['$scope', '$moment', 'postService', 'toaster', function ($scope, $moment, postService, toaster) {

    	$scope.post = {};

    	$scope.CreatePost = function(){
    		postService.CreatePost({title: $scope.post.title, subtitle: $scope.post.subtitle, content: $scope.post.content, author: 'Zsnake', date:new Date()}).then(function(response){
    			toaster.pop('success', 'Success!', 'Post created successfully.');
    		}).catch(function(error){
    			toaster.pop('error', 'Error.', 'Post creation failed. Error: ' + error);
    		})
    	}

  }]);
