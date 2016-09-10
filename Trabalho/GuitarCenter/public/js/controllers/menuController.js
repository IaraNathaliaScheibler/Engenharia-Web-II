 (function() {
  'use strict';
 angular.module('navBarDemoBasicUsage', ['ngMaterial'])
      .controller('menuController', menuCtrl);

  function menuCtrl($scope) {
    $scope.currentNavItem = 'partials/home.html';
  }
  })();