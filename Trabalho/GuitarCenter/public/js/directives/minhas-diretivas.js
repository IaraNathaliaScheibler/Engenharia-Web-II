angular.module('meusComponentes', [])
    .directive('meuPainel', function() {
        var directive = {};

        directive.restrict = 'EA';

        directive.scope = {
            titulo: '@',
            mensagem: '@',
            currentNavItem: '@'
        };

        directive.templateUrl = 'js/templates/painel.html';

        return directive;
    });