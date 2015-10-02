angular.module('Zblog.Controllers')
  .controller('ViewPostController', ['$scope', '$moment', '$state', 'postService', 'toaster', '$stateParams', function ($scope, $moment, $state, postService, toaster, $stateParams) {
    	$scope.post = {};
        postService.GetById($stateParams.postId).then(function(response){
            $scope.post = response.data[0];
            toaster.pop('success', 'Great success!', 'Post retrieved successfully!');
        }).catch(function(err){
            toaster.pop('error', 'oh noes!', 'We had a problem retrieving your post. Heres the error: ' + err);
        });

  }]);
