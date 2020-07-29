const Mamifero = function (nome, som) {
    return { nome, som }
}

const cachorro = Mamifero('Cachorro', 'Au, Au, Au')
console.log(cachorro)

const gato = Mamifero('Gato', 'Miau')
console.log(gato)
