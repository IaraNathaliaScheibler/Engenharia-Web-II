angular.module('produtos')
    .controller('categoriaController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {

            $scope.categoria = {};
            $scope.mensagem = '';

            if ($routeParams.id) {
                $http.get('/api/categorias/' + $routeParams.id)
                    .success(function (categoria) {
                        $scope.categoria = categoria;
                    })
                    .error(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível obter';
                    });
            }

            $scope.submeter = submeter;
            function submeter() {
                if ($scope.formularioCategoria.$valid) {
                    if ($routeParams.id) {
                        $http.put('/api/categorias/' + $scope.categoria._id, $scope.categoria)
                            .success(function () {
                                $scope.mensagem = 'Categoria alterada com sucesso!';
                            }).error(function (erro) {
                                console.log(erro);
                                $scope.mensagem = 'Não foi possível alterar!';
                            });
                    } else {
                        $http.post('/api/categorias', $scope.categoria)
                            .success(function () {
                                $scope.categoria = {};
                                $scope.mensagem = 'categoria cadastrada com sucesso!';
                            })
                            .error(function (erro) {
                                console.log(erro);
                                $scope.mensagem = 'Não foi possível cadastrar as categorias!';
                            });
                    }
                }
            }

        }]);