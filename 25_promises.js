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

passarParaComprarBrinquedo.then(lembrou => {
    console.log('lembrou')
}).catch(naoLembrou => {
    console.log('não lembrou')
})

passarParaComprarBrinquedo
    .then(sairParaBrincar)
    .catch(sairParaBrincar)
    .then(resultado => console.log(resultado))