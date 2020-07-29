function iteraNumeros(total) {
    for (let i = 0; i <= total; i++) {
        console.log(i)
    }
}
// iteraNumeros(5)

function *iteraGenerator(total) {
    for (let i = 0; i <= total; i++) {
        yield console.log(i)
    }
}
const totalGenerator = iteraGenerator(6)
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()
totalGenerator.next()


function *iteraGenerator2(total) {
    for (let i = 0; i <= total; i++) {
        yield i
    }
}

const totalGenerator2 = iteraGenerator2(3)
console.log(totalGenerator2.next().value)
console.log(totalGenerator2.next().value)
console.log(totalGenerator2.next().value)
console.log(totalGenerator2.next().value)
