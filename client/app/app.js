angular.module('Zblog', ['ui.router', 'angular-moment'])
 
// Declared route 
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })
}])