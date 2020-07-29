class Subject {
    constructor() {
        this.observadores = []
    }

    assinarObservavel(observador) {
        this.observadores.push(observador)
    }

    notificarObservador(observador) {
        const index = this.observadores.indexOf(observador)
        if (index > -1) {
            this.observadores[index].notificar(index)
        } else {
            console.log('Esse observador não existe');
        }
    }

    notificarTodosObservadores() {
        this.observadores.forEach((observador, index) => observador.notificar(index))
    }
}

class Observer {
    notificar(index) {
        console.log(`Observador ${index} foi notificado`)
    }
}

const subject = new Subject()
const obs00 = new Observer()
const obs01 = new Observer()
const obs02 = new Observer()
const obs03 = new Observer()

subject.assinarObservavel(obs00)
subject.assinarObservavel(obs01)
subject.assinarObservavel(obs02)
subject.assinarObservavel(obs03)

// subject.notificarObservador(obs00)
// subject.notificarTodosObservadores()


const impressora = (function () {
    let instanciaDaImpressora;

    function criar() {
        function imprimir() {
            console.log('Imprimindo documento...');
        }

        function ligar() {
            console.log('Ligando impressora...');
        }

        function desligar() {
            console.log('Desligando impressora...')
        }
        return { imprimir, ligar,desligar }
    }
    return {
        pegarInstancia: function () {
            if (!instanciaDaImpressora) {
                instanciaDaImpressora = criar()
            }
            return instanciaDaImpressora
        }
    }
})();

const impressoraDaEmpresa1 = impressora.pegarInstancia().desligar()
const impressoraDaEmpresa2 = impressora.pegarInstancia().imprimir()
const impressoraDaEmpresa3 = impressora.pegarInstancia()
impressoraDaEmpresa3.ligar()
console.log(impressoraDaEmpresa3);
console.log(impressoraDaEmpresa1 === impressoraDaEmpresa2);
