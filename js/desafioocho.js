const productos = [

    {
        tipo: 'tazas',
        precio: 750,
    },
    {
        tipo: 'vasos',
        precio: 650,
    },
    {
        tipo: 'mates',
        precio: 750,
    },
    {
        tipo: 'bowls',
        precio: 850,
    },
    {
        tipo: 'bandejas',
        precio: 1200,
    },
    {
        tipo: 'platos',
        precio: 850,
    },
]

//DOM 

    //creo una variable para tomar los datos desde un elemento del html ...
    const sectionCarrito = document.querySelectorAll ('.carrito');
    
    //creo el elemento divCarrito donde se va a ir cargando toda la info según el html...
    let divCarrito = document.createElement ('ul');

    //for of para ir recorriendo el array en base al html...
    for (let elegido of carrito) {

    //voy a la clase del elemento div que cree segun como esté en el html...
    divCarrito.className = 'detalleCarrito';

    //creo html dinámico desde java script 
    divCarrito.innerHTML =`
    <li class="list-group-item">${elegido.tipo}, color: ${elegido.linea}, tamaño: ${elegido.tamano}, precio: ${elegido.precio}, cantidad: ${elegido.cantidad}</li>
    <h3>SUBTOTAL:${elegido.resultado}<h3>
    <button type="button" class="btn boton--comprar btn-sm">COMPRAR!</button>`
    
    sectionCarrito[0].appendChild(divCarrito);
    console.log (sectionCarrito);

};