angular.module('series')
  .controller('seriesController',
    function ($scope, $http) {
      $scope.total = 0;
      $scope.filtro = '';
      $scope.sortValue = 'nome';
      $scope.order = false;

      $scope.series = [];

      $http.get('api/series')
        .success(function (data) {
          $scope.series = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      $scope.sort = function (fild) {
        $scope.sortValue = fild;
        $scope.order = !$scope.order;
      };

      $scope.del = function(id){

      $http.delete('api/series/'+id)
        .success(function(){
          console.log("Série deletada com sucesso");  

           $http.get('api/series')
        .success(function (data) {
          $scope.series = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });
                
        }).error(function (statusText) {
          console.log(statusText);
        });
      };
      
    });
