angular.module('Zblog')
  .controller('HomeController', ['$scope', '$moment', function ($scope, $moment) {
  	d = new Date();
    $scope.posts = [
    	{title: 'MGSV: The Phantom Pain', subtitle: 'Kojima, let me carry your children!', author: 'Zsnake', creationDate: $moment().subtract(6, 'days').calendar()},
      	{title: 'Dota 2 reborn', subtitle: 'How to piss off angry nerds in 2 patches', author: 'Zsnake', creationDate: $moment().subtract(7, 'days').calendar()},
      	{title: 'HTML5 Boilerplate', subtitle: 'This is the first subtitle we have here', author: 'Zsnake', creationDate: $moment().subtract(100, 'days').calendar()}
    ];
  }]);