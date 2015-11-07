angular.module('Zblog.Controllers')
  .controller('HomeController', ['$scope', '$moment', 'postService', 'toaster', function ($scope, $moment, postService, toaster) {
    	$scope.posts = {};
    	postService.GetAll().then(function(response){
    		$scope.posts = _.map(response.data, function(element){
                return {
                    _id: element._id,
                    title: element.title,
                    subtitle: element.subtitle,
                    body: element.body,
                    author: element.author,
                    date: $moment(element.date).fromNow()
                }
            });

    	}).catch(function(err){
    		toaster.pop('error', 'Oh noes!', 'We had trouble getting your posts. Heres the error: ' + err);
    	});
  }]);
