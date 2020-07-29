function Usuario(nome) {
    this.nome = nome
    this.log = function() {
        console.log(this)
    }
}

const nome = new Usuario('Godofredo')
console.log(nome)
console.log(nome instanceof Usuario)

