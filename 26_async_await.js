const mamaeLembrou = true
const passarParaComprarBrinquedo = new Promise((resolve, reject) => {
    if (mamaeLembrou) {
        resolve(true)
    } else {
        reject(false)
    }
})

const sairParaBrincar = (resultado) => {
    return new Promise((resolve, reject) => {
        if (resultado) {
            resolve('Vou sair para brincar')
        } else {
            resolve('Não vou sair para brincar')
        }
    })
}

async function vamosParaALoja() {
    try {
        const mamaeLembrou = await passarParaComprarBrinquedo
        const mensagem = await sairParaBrincar(mamaeLembrou)
        console.log(mensagem)
        return 'usando o return apenas para chamar a função usando .then()'
    } catch (naoLembrou) {
        const mensagem = await sairParaBrincar(naoLembrou)
        console.log(mensagem)
    }
}
vamosParaALoja()

vamosParaALoja().then(resultado => console.log(resultado))
