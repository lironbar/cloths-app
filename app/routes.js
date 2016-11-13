angular.module('app')
.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when ('/main', {
      template: '<main></main>'
    });
    //.otherwise({redirectTo: '/movies'});
  }
]);
