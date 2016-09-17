angular.module('teste')
.controller('testeController', function (){
     //this.texto = "funcionou";
})
.controller('tabelaController', function($http) {
 var vm = this;
 vm.contatos=[];

  $http.get('http://localhost:3000/user') 
  .success(function (data){
    vm.contatos = data;
  })
  .error(function(statusText){
    console.log(statusText);
  });

});