const pedido = { titulo: 'meu pedido', status: false }
const copiaPedido = pedido => {
    const novoPedido = Object.assign({}, pedido)
    novoPedido.status = true
    return novoPedido
}

const novoPedido = copiaPedido(pedido)
novoPedido.titulo = 'segundo pedido'
console.log(pedido)
console.log(novoPedido)