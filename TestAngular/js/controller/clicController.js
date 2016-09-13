angular.module('teste')
.controller('clicController', function() {
    this.cont=0;
    this.count=function () {
        this.cont++;
    }
});