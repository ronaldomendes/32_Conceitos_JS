const Usuario = function (nome) {
    this.nome = nome
}

const nome = new Usuario('Godofredo')
Usuario.prototype.getNome() = function() {
    console.log(this.nome)
}

nome.getNome()