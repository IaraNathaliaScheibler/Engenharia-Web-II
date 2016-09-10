angular.module('categorias')
  .controller('categoriasController',
    function ($scope, $http) {
      
      $scope.order = false;

      $scope.categorias = [  ];

      $http.get('api/categorias')
        .success(function (data) {
          $scope.categorias = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });

      
      $scope.del = function(id){

      $http.delete('api/categorias/'+id)
        .success(function(){
          console.log("Categoria deletada com sucesso");  

           $http.get('api/categorias')
        .success(function (data) {
          $scope.categorias = data;
        })
        .error(function (statusText) {
          console.log(statusText);
        });
                
        }).error(function (statusText) {
          console.log(statusText);
        });
      };
      
    });
