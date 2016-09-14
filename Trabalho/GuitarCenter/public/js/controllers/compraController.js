angular.module('produtos')
    .controller('compraController', ['$scope', '$http', '$routeParams',

        function ($scope, $http, $routeParams) {

            $scope.compra = {};
            $scope.mensagem = '';
            produto ={};
            $scope.compra.formaPag= "Dinheiro";

            if ($routeParams.id) {
                $http.get('api/produtos/' + $routeParams.id)
                    .success(function (produto) {                        
                        $scope.compra.produto = produto;
                    })
                    .error(function (erro) {
                        console.log(erro);
                        $scope.mensagem = 'Não foi possível obter';
                    });
            }


            $scope.submeter = submeter;
            function submeter() {
                if ($scope.formularioCompra.$valid) {
                    
                        $http.post('/api/compras', $scope.compra)
                            .success(function () {
                                $scope.compra = {};
                                $scope.mensagem = 'Compra realisada com sucesso!';
                            })
                            .error(function (erro) {
                                console.log(erro);
                                $scope.mensagem = 'Não foi possível realizar a  compra!';
                            });
                    
                }

            }
        }]);