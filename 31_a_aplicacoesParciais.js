function lista(juncao, ...itens) {
    const separadoPorVirgula = itens.slice(0, -1).join(', ')
    const ultimoItem = itens.pop()
    return `${separadoPorVirgula} ${juncao} ${ultimoItem}`
}

// function parcial(funcao, juncao) {
//     return (...itens) => {
//         return funcao(juncao, ...itens)
//     }
// }

const parcial = (funcao, juncao) => (...itens) => funcao(juncao, ...itens)

const listaE = parcial(lista, 'e')
const listaOu = parcial(lista, 'ou')
const listaTalvez = parcial(lista, 'talvez')

console.log(lista('e', 'verde', 'azul', 'amarelo', 'branco'))
console.log(listaE('e', 'verde', 'azul', 'amarelo', 'branco'))
console.log(listaOu('e', 'verde', 'azul', 'amarelo', 'branco'))
console.log(listaTalvez('e', 'verde', 'azul', 'amarelo', 'branco'))
