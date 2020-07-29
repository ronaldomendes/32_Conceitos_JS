class Animal {
    constructor(pes) {
        this.pes = pes
    }

    qtdPes() {
        console.log(`Eu tenho ${this.pes} pés/patas`)
    }
}

const Mamifero = class extends Animal {
    constructor(nome, som, pes) {
        super(pes)
        this.nome = nome
        this.som = som
    }
    emitirSom() {
        console.log(`Esse animal faz: ${this.som}`)    
    }
}

const cachorro = new Mamifero('Cachorro', 'Au au, Au au', 4)
cachorro.emitirSom()
cachorro.qtdPes()
