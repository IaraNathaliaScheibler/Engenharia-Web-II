angular.module('produtos')
    .controller('categoriasController', ['$scope', '$http',
        function ($scope, $http) {

            $scope.order = false;

            $scope.categorias = [];


            $http.get('api/categorias')
                .success(function (data) {
                    $scope.categorias = data;
                })
                .error(function (statusText) {
                    console.log(statusText);
                });


            $scope.del = del;
            function del(id) {
                $http.delete('api/categorias/' + id)
                    .success(function () {
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
            }

        }]);