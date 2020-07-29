// THIS
console.log(this)

const func = () => console.log(this)
func()

// CALL
const dadosCall = { nome: 'Godofredo', filme: 'Godzilla'}
const saudacaoCall = function(idade) {
    console.log(`Bem vindo, ${this.nome}. Sua idade é ${idade}`)
}
saudacaoCall.call(dadosCall, 28)

// APPLY
const dadosApply = { nome: 'Godofredo', filme: 'Godzilla'}
const argumentos = [32]
const saudacaoApply = function(idade) {
    console.log(`Bem vindo, ${this.nome}. Sua idade é ${idade}`)
}
saudacaoApply.apply(dadosApply, argumentos)

// BIND
const dadosBind = { nome: 'Godofredo', filme: 'Godzilla'}
const saudacaoBind = function(idade) {
    console.log(`Bem vindo, ${this.nome}. Sua idade é ${idade}`)
}
const usingBind = saudacaoBind.bind(dadosApply)
usingBind(30)
