angular.module('produtos')
    .config( ['$routeProvider',
        function($routeProvider) {

        $routeProvider.when('/produtos', {
            templateUrl: 'partials/produtos.html',
            controller: 'produtosController'
        });

        $routeProvider.when('/produtos/new', {
            templateUrl: 'partials/formularioProduto.html',
            controller: 'produtoController'
        });

        $routeProvider.when('/produtos/:id', {
            templateUrl: 'partials/formularioProduto.html',
            controller: 'produtoController'
        });

        $routeProvider.when('/comprar/:id', {
            templateUrl: 'partials/comprar.html',
            controller: 'compraController'
        });

        $routeProvider.when('/exibir', {
            templateUrl: 'partials/exibirCompra.html',
            controller: 'compraController'
        });

         $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'loginController'
        });

        $routeProvider.when('/endereco', {
            templateUrl: 'partials/formularioEndereco.html',
            controller: 'enderecoController'
        });
          
        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html'

        });

        $routeProvider.when('/categorias', {
            templateUrl: 'partials/categorias.html',
            controller: 'categoriasController'
        });

        $routeProvider.when('/categorias/new', {
            templateUrl: 'partials/formularioCategoria.html',
            controller: 'categoriaController'
        });

        $routeProvider.when('/sobre', {
            templateUrl: 'partials/sobre.html'

        });

        $routeProvider.otherwise({ redirectTo: '/login' });
        
    }]);