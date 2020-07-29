// SET TIMEOUT
setTimeout(() => {
    console.log('Executando setTimeout')
}, 1000);

const mostraAlerta = () => console.log('Set Timeout')
setTimeout(mostraAlerta, 1500)

const mostraAlertaComParametro = (nome) => console.log(`Você sabe o que é ${nome}?`)
setTimeout(mostraAlertaComParametro, 2000, 'Blá!')

const timeout = setTimeout(mostraAlertaComParametro, 3500, 'Smartphone')

setTimeout(() => {
    console.log('Finalizando...');
    clearTimeout(timeout)
}, 1500)

//SET INTERVAL
const interval = setInterval(() => {
    console.log('teste');
}, 1000)

setTimeout(() => {
    console.log('Finalizando interval...');
    clearInterval(interval)
}, 5000)

//REQUEST ANIMATION FRAME - EXECUTAR NO BROWSER
let contador = 0
function animation() {
    contador++
    console.log(contador);
    loop = requestAnimationFrame(animation);
}

let loop = requestAnimationFrame(animation);
setTimeout(() => {
    cancelAnimationFrame(loop);
}, 5000);
