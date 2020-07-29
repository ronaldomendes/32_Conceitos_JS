function contagem1(num) {
    console.log(num)
    if (num > 0)
        contagem1(num - 1)
}
contagem1(5)

function contagem2(num) {
    for (; num >= 0; num--) {
        console.log(num)
    }
}
contagem2(6)