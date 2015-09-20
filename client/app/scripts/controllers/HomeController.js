angular.module('Zblog')
  .controller('HomeController', ['$scope', function ($scope) {
    $scope.titles = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);