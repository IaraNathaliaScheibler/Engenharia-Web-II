
angular.module('teste')
    .controller('calculadoraController', function () {
        this.resultado = 0;

        this.soma = function () {

            this.resultado = this.num1 + this.num2;
            this.zero();
        }
        this.subtracao = function () {
            this.resultado = this.num1 - this.num2;
            this.zero();

        }
        this.divisao = function () {
            this.resultado = this.num1 / this.num2;
            this.zero();
        }
        this.multi = function () {
            this.resultado = this.num1 * this.num2;
            this.zero();
        }
        this.raiz = function(){
            this.resultado 
        }
        this.zero = function () {
            this.num1 = 0;
            this.num2 = 0;
        }
    });