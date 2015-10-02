var app = angular.module('Zblog', ['ui.router', 'angular-moment', 'Zblog.Services', 'Zblog.Controllers', 'textAngular', 'toaster', 'ngAnimate', 'infinite-scroll']);
 
angular.module('Zblog.Controllers', []);
angular.module('Zblog.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
        .state('newPost', {
        	url: '/posts/new',
        	templateUrl: 'views/newPost.html',
        	controller: 'NewPostController'
        }).
        state('viewPost', {
            url: '/posts/{postId}',
            templateUrl: 'views/post.html',
            controller: 'ViewPostController'
        });
}])