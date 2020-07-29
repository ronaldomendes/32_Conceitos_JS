var nome = 'Creuza'
function olaPessoa() {
    console.log('Olá, ' + nome);
}
olaPessoa()

function buscaItem() {
    var numeroItem = 150
    fetch('/minha/url/do/banco?item=' + numeroItem, { method: 'GET' })
        .then(result => {
            console.log(`Busca pelo item ${numeroItem} deu certo`)
        })
}
buscaItem()
