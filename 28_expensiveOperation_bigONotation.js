const dados = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const numero = dados.pop()
console.log(numero);

function o_n(entrada, numero) {
    for (let i = 0, max = entrada.length; i < max; i++) {
        if (entrada[i] === numero) {
            return i
        }
    }
    return -1
}

console.log(o_n(dados, 5))

function o_n_quadrado(entrada) {
    const matriz = []
    for (let i = 0, max = entrada.length; i < max; i++) {
        matriz[i] = [];
        for (let j = 0, maxj = entrada.length; j < maxj; j++) {
            matriz[i].push(j)
        }
    }
    return matriz
}

const dados1 = [0, 1, 2, 3]
console.log(o_n_quadrado(dados1))

const dados2 = ['q', 'a', 'z', 'w', 's', 'b', 'r', 'y', 'f', 'h', 'j', 'i', 'g', 'k']
function quicksort(entrada) {
    if (entrada.length < 2) {
        return entrada
    }
    let pivo = entrada[0]
    let esquerda = []
    let direita = []
    console.log(pivo);
    for (let i = 1, max = entrada.length; i < max; i++) {
        if (entrada[i] < pivo) {
            esquerda.push(entrada[i])
        } else {
            direita.push(entrada[i])
        }
    }
    console.log(esquerda, direita);
    return [...quicksort(esquerda), pivo, ...quicksort(direita)]
}
console.log(quicksort(dados2))