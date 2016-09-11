angular.module('produtos')
    .config( ['$routeParams',
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

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'

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

        $routeProvider.otherwise({ redirectTo: '/produtos' });
        
    }]);