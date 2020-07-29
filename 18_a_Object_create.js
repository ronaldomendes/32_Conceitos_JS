let Usuario = function (nome, idade) {
    this.nome = nome
    this.idade = idade
}

const godofredo = new Usuario('Godofredo', 23)
const godo = Object.create(godofredo)
console.log(godo instanceof Usuario)
console.log(godo.nome)

function Carro(cor) {
    this.cor = cor
    this.descricao = descricao
}

Carro.prototype.pegaInformacoes = function () {
    return this.descricao + ' e a cor ' + this.cor
}

let meuCarro = Object.create(Carro.prototype)
meuCarro.cor = 'azul'
console.log(meuCarro.pegaInformacoes())

const novoCarro = Object.create(Carro, {
    cor: { writable: true, configurable: true, value: 'vermelho' },
    descricaoPadrao: { writable: false, configurable: true, value: 'Meu carro' },
    descricao: {
        configurable: true, get: function () {
            return this.descricaoPadrao.toUpperCase()
        }, set: function (valor) {
            this.descricaoPadrao = valor.toLowerCase()
        }
    }
})
novoCarro.cor = 'laranja'
console.log(novoCarro.cor)