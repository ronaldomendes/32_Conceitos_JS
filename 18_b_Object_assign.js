const alvo = { a: 1, b: 2 }
const dados = { b: 5, c: 4 }
const resultado1 = Object.assign(alvo, dados)
resultado1.a = 100
console.log(resultado1)

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
resultado2 = Object.assign({}, obj1, obj2)
console.log(resultado2)
