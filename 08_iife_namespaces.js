function alerta1() {
    console.log('Alerta 01')
}
alerta1()

const alerta2 = function () {
    console.log('Alerta 02')
}
alerta2()

!function () {
    console.log('Alerta 03');
}();

(function () {
    console.log('Alerta 04');
}());

!function alerta5() {
    console.log('Alerta 05');
}()

let numero = 20
!function alerta6() {
    numero = 30
}()
console.log(numero);

let dados = (function() {
    let contador = 0
    return {
        incrementar: function() {
            contador++
            return contador
        }, 
        somar: function(a, b) {
            return a + b
        }, 
        multiplicar: function(a, b) {
            return a * b
        }
    }
})()

console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.incrementar());
console.log(dados.somar(10, 5));
console.log(dados.multiplicar(6, 8));
