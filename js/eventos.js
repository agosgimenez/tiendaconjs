

let compra = document.querySelector (".comprar");

compra.addEventListener ('click', clickCompra)

function clickCompra () {
    console.log ('evento click escuchado');
}

let pago = document.querySelector (".formaPago");

pago.addEventListener ('pago',formadePago );

function formadePago () {
    console.log (formaPago.addEventListener);
}