// lexico
var nome = 'Godofredo'
function teste() {
    var variavel = 'teste 1'
    function teste2() {
        variavel = 'teste 2'
    }
}
teste()

// global
var a = 0
function alterar() {
    a = 10
}
console.log(a);
alterar()
console.log(a);

// função
// igual ao escopo lexico

// bloco
function bloco() {
    var teste
    if (true) {
        teste = 'teste'
        let teste2 = 'teste2'
    }
    console.log('teste', teste);
    console.log('teste2', teste2);
    
}
bloco()
