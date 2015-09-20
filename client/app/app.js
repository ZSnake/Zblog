angular.module('Zblog', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
$routeProvider.when('/', {
        templateUrl: 'index.html',
        controller: 'HomeCtrl'
    });
}])