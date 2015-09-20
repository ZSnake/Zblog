angular.module('Zblog', ['ui.router', 'angular-moment'])
 
// Declared route 
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        })
}])