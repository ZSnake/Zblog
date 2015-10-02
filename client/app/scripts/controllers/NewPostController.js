angular.module('Zblog.Controllers')
  .controller('NewPostController', ['$scope', '$moment', 'postService', 'toaster', '$state', function ($scope, $moment, postService, toaster, $state) {

    	$scope.post = {};

    	$scope.CreatePost = function(){
    		postService.CreatePost({title: $scope.post.title, subtitle: $scope.post.subtitle, content: $scope.post.content, author: 'Zsnake', date:new Date(), body:$scope.post.body}).then(function(response){
    			toaster.pop('success', 'Success!', 'Post created successfully.');
    			$state.go('home');

    		}).catch(function(error){
    			toaster.pop('error', 'Error.', 'Post creation failed. Error: ' + error);
    		})
    	}

  }]);
