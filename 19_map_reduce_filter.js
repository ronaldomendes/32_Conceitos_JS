let dados = [
    { nome: 'Caramelo', idade: 3, tipo: 'cachorro' },
    { nome: 'Rex', idade: 6, tipo: 'cachorro' },
    { nome: 'Bolota', idade: 1, tipo: 'gato' },
    { nome: 'Thor', idade: 3, tipo: 'cachorro' }
]

const cachorros = dados.filter((dado, index) => dado.tipo === 'cachorro')
console.log(cachorros)

const idadeReal = cachorros.map((cachorro) => ({ nome: cachorro.nome, idade: cachorro.idade * 7 }))
console.log(idadeReal)

const totalIdades = idadeReal.reduce((soma = 0, dado) => {
    return soma + dado.idade
}, 0)
console.log(totalIdades)

const idade = dados.filter(dado => dado.tipo === 'cachorro')
    .map(cachorro => ({ nome: cachorro.nome, idade: cachorro.idade * 7 }))
    .reduce((soma = 0, dado) => { return soma + dado.idade }, 0)

console.log(idade)