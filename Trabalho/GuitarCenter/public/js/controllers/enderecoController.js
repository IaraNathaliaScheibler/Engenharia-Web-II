angular.module('produtos')
    .controller('enderecoController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {

            $scope.endereco = {};
            $scope.mensagem = '';

            if ($routeParams.id) {
                $http.get('/api/endereco/' + $routeParams.id)
                    .success(function (categoria) {
                        $scope.endereco = endereco;
                    })
                    .error(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível obter';
                    });
            }

            $scope.submeter = submeter;
            function submeter() {
                if ($scope.formularioEndereco.$valid) {
                    if ($routeParams.id) {
                    
                        $http.post('/api/endereco', $scope.endereco)
                            .success(function () {
                                $scope.endereco = {};
                                $scope.mensagem = 'Endereço cadastrado com sucesso!';
                            })
                            .error(function (erro) {
                                console.log(erro);
                                $scope.mensagem = 'Não foi possível cadastrar o endereço!';
                            });
                    
                }
            }

        }]);