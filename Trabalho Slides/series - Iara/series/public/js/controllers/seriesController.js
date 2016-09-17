angular.module('series')
  .controller('SeriesController', function ($scope) {
    $scope.total = 0;

    $scope.somar = function(){
      $scope.total++;
    }

  });
