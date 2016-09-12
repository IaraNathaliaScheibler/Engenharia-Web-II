angular.module('produtos')
    .controller('homeController', ['$scope', function($scope) {
    
    
     $routeProvider.when('/home', {
            templateUrl: 'partials/home.html'

        });
    }]);