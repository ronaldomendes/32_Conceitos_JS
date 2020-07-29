const dragao = (nome, tamanho, elemento) => {
    return `${nome} é um dragão ${tamanho} e cospe ${elemento}`
}
console.log(dragao('Bolota', 'pequeno', 'ácido'))

// CURRYING
const dragaoCurrying = nome => tamanho => elemento => {
    return `${nome} é um dragão ${tamanho} e cospe ${elemento}`
}
console.log(dragaoCurrying('Bolota')('grande')('fogo'))

const bolota = dragaoCurrying('Bolota')
console.log(bolota('grande')('gelo'));
console.log(bolota('médio')('água'));

const bolotaPequeno = bolota('pequeno')
console.log(bolotaPequeno('terra\n'))

// COMPOSE
const incrementar = x => x + 1
const dobrar = x => x * 2
const valor = incrementar(5)
const resultado = dobrar(valor)
console.log(resultado);
const valor2 = 3
const resultCompose = dobrar(incrementar(valor2))
console.log(resultCompose);

// PIPE
const pipe = (inc, dob) => args => dob(inc(args))
const incrementaEDobra = pipe(incrementar, dobrar)
const resultPipe = incrementaEDobra(7)
console.log(resultPipe)
