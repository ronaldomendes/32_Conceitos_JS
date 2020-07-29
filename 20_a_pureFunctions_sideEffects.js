const soma = (x, y) => x + y
const alteraNome = novoNome => { nome = novoNome }

const usuario = { nome: 'Godofredo', pontos: 0 }
const alteraUsuario = usuario => {
    usuario.nome = usuario.nome.toUpperCase()
    usuario.pontos += 1
    return usuario
}

alteraUsuario(usuario)
console.log(usuario)

const novoUsuario = { nome: 'Creuza', pontos: 5 }
const nomeMaiusculo = nome => nome.toUpperCase()
const incrementaPontos = pontos => pontos + 1

novoUsuario.nome = nomeMaiusculo(novoUsuario.nome)
novoUsuario.pontos = incrementaPontos(novoUsuario.pontos)
console.log(novoUsuario)
