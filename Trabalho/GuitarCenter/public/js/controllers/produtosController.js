angular.module('produtos')
    .controller('produtosController', ['$scope', '$http',
        function ($scope, $http) {

            $scope.filtro = '';
            $scope.sortValue = 'nome';
            $scope.order = false;


            $scope.produtos = [];

            $http.get('api/produtos')
                .success(function (data) {
                    $scope.produtos = data;
                })
                .error(function (statusText) {
                    console.log(statusText);
                });

            $scope.sort = sort;
            function sort(fild) {
                $scope.sortValue = fild;
                $scope.order = !$scope.order;
            }

            $scope.del = del;
            function del(id) {

                $http.delete('api/produtos/' + id)
                    .success(function () {
                        console.log("Produto deletado com sucesso");

                        $http.get('api/produtos')
                            .success(function (data) {
                                $scope.produtos = data;
                            })
                            .error(function (statusText) {
                                console.log(statusText);
                            });

                    }).error(function (statusText) {
                        console.log(statusText);
                    });
            }

        }]);