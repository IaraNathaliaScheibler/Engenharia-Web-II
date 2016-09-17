angular.module('series')
  .config(function ($routeProvider) {

    $routeProvider.when('/series', {
      templateUrl: 'partials/series.html',
      controller: 'seriesController'
    });

    $routeProvider.when('/series/new', {
      templateUrl: 'partials/formulario.html',
      controller: 'serieController'
    });

    $routeProvider.when('/series/:id', {
      templateUrl: 'partials/formulario.html',
      controller: 'serieController'
    });

    $routeProvider.otherwise(
      { redirectTo: '/series' });
  });
