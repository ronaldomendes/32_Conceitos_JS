// VARIAVEIS
// exemplos ruins
var c = 0
var tempo = 15
var tmpParaAguardRespINT = 15

// exemplos ideais
var chamadasRealizadasParaApi = 0
var tempoParaAguardarRespostas = 15
const CHAMADAS_REALIZADAS_PARA_API = 0

// FUNÇÕES
// exemplos ruins
function atualizaUsuarioLocal(id) {
    http.get('url?id=' + id).then(dadosDoUsuario => {
        this.usuario = dadosDoUsuario
    })
}

// exemplos ideais
async function buscaUsuarioPorId(id) {
    return await http.get('url?id=' + id)
}
this.usuario = buscaUsuarioPorId(1)

this.usuario = atualizaUsuarioLocal({
    nome: 'Godofredo', idade: 26, telefone: '11999999999', endereco: 'casa'
})

// atualizaUsuarioLocal(usuario) {
//     usuario.nome, usuario.telefone
// }


// OBJETOS
function criarUsuario(nome) {
    this.nome = nome
    getNome = () => this.nome
    setNome = nome => this.nome = nome

    return { getNome, setNome }
}
const usuario = criarUsuario('Godofredo')


// CLASSES
class Utilitarios {
    constructor() {
        this.texto = ''
    }
    getTexto = () => this.texto
    setTexto = texto => {
        this.texto = texto
        return this
    }

    maiusculo = () => {
        this.texto = this.texto.toUpperCase()
        return this
    }

    reverter = () => {
        this.texto = this.texto.split('').reverse().join('')
        return this
    }
}

const _utilitarios = new Utilitarios()
let texto = _utilitarios.setTexto('Godofredo').reverter().maiusculo().getTexto()
