angular.module('Zblog.Controllers')
  .controller('EditPostController', ['$scope', '$moment', 'postService', 'toaster', '$state', '$stateParams', function ($scope, $moment, postService, toaster, $state, $stateParams) {

    	$scope.post = {};

      $scope.GetPost = function(){
          postService.GetById($stateParams.postId).then(function(response){
            $scope.post = response.data[0];
          });
      }

    	$scope.EditPost = function(){
        var payload = {
          title: $scope.post.title,
          subtitle: $scope.post.subtitle,
          content: $scope.post.content,
          author: 'Zsnake',
          date:new Date(),
          body:$scope.post.body
        }
    		postService.EditPost($stateParams.postId, payload).then(function(response){
    			toaster.pop('success', 'Success!', 'Post updated successfully.');
    			$state.go('home');

    		}).catch(function(error){
    			toaster.pop('error', 'Error.', 'Post creation failed. Error: ' + error);
    		})
    	}

      $scope.GetPost();
  }]);
