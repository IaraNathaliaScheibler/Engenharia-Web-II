angular.module('produtos')
  .controller('produtoController',
  function ($scope, $http, $routeParams) {
    $scope.produto = {};
    $scope.mensagem = 'produto';

    if ($routeParams.id) {
      $http.get('/api/produtos/' + $routeParams.id)
        .success(function (produto) {
          $scope.produto = produto;
        })
        .error(function (erro) {
          console.log(erro);
          $scope.mensagem = 'Não foi possível obter';
        });
    }

    $scope.submeter = function () {
      $scope.submeter = function () {
        if ($scope.formulario.$valid) {
          if ($routeParams.id) {
            $http.put('/api/produtos/' + $scope.produto._id, $scope.produto)
              .success(function () {
                $scope.mensagem = 'Produto alterado com sucesso!';
              }).error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível alterar!';
              });
          } else {
            $http.post('/api/produtos', $scope.produto)
              .success(function () {
                $scope.produto = {};
                $scope.mensagem = 'Produto cadastrado com sucesso!';
              })
              .error(function (erro) {
                console.log(erro);
                $scope.mensagem = 'Não foi possível cadastrar os produtos!';
              });
          }
        }
      };
    };
    });