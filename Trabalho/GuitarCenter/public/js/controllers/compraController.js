angular.module('produtos')
    .controller('compraController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {

            $scope.compra = {};
            $scope.mensagem = '';

            if ($routeParams.id) {
                $http.get('/api/comprar/' + $routeParams.id)
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

        }]);