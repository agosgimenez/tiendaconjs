//////////////////////////////////////////////////
//    WEB BLANCO PIEDRA - CURSO JAVA SCRIPT    //
/////////////////////////////////////////////////

//////// ARCHIVO JS PARA HTML TIENDA ////////

/////////////////////////////////////// SELECCION DE PRODUCTOS ////////////////////////////////////////////

//////////////////////////////////////////////////
//    WEB BLANCO PIEDRA - CURSO JAVA SCRIPT    //
/////////////////////////////////////////////////

//////// ARCHIVO JS PARA HTML TIENDA ////////

//ARRAY DE PRODUCTOS:
const productos = [

    {
        tipo: 'tazas',
        precio: 750,
        id: 1,
        imgProducto: "taza_azul.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'vasos',
        precio: 650,
        id: 2,
        imgProducto: "vaso_pastel.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'mates',
        precio: 750,
        id: 3,
        imgProducto: "mate_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'bowls',
        precio: 850,
        id: 4,
        imgProducto: "bowl_pastel.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'bandejas',
        precio: 1200,
        id: 5,
        imgProducto: "tabla_azul.jpeg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'platos',
        precio: 850,
        id: 6,
        imgProducto: "plato_pastel.jpeg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set mesa de 4',
        precio: 5200,
        id: 7,
        imgProducto: "set_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set mesa de 6',
        precio: 6000,
        id: 8,
        imgProducto: "set_pastel.jpeg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set merienda para 4',
        precio: 6500,
        id: 9,
        imgProducto: "set_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set merienda para 6',
        precio: 6800,
        id: 10,
        imgProducto: "set_pastel.jpeg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set bowls fan',
        precio: 3600,
        id: 11,
        imgProducto: "bowl_azul.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'set bowls súper fan',
        precio: 4800,
        id: 12,
        imgProducto: "bowls_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'porta utensillos',
        precio: 1000,
        id: 13,
        imgProducto: "portauten_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'macetas',
        precio: 950,
        id: 14,
        imgProducto: "macetas_index.jpg",
        cantidad: 1,
        agregado: false,
    },
    {
        tipo: 'ceniceros',
        precio: 950,
        id: 15,
        imgProducto: "cenicero_pastel.jpeg",
        cantidad: 1,
        agregado: false,
    },

];

//CONFIRMO QUE EL DOM ESTA LISTO PARA AGREGARLE EVENTOS:
$(document).ready(function(){
    console.log('el dom está listo')
    });


//RECORRO EL ELEMENTO DEL ARRAY PRODUCTOS Y PINTO EN EL HTML LA TIENDA:
for (const producto of productos){
    $('#tienda').append(`
    <div class="col-xs col-sm col-md-4 col-lg-3">
    <div class="card">
        <img src="media/${producto.imgProducto}" class="card-img-top" alt="portautensillos azul">
        <div class="card-body card-body--producto">
            <h5 class="card-title tipo">${producto.tipo}</h5>
            <p class="card-text precio"><em>$${producto.precio}</em></p>
            <button id="boton${producto.id}" type="button" class="btn boton--comprar btn-sm agregarCarrito">Añadir a carrito</button>
        </div>
    </div>
    </div>
    `);

    //"AÑADIR AL CARRITO":
    $(`#boton${producto.id}`).click((event) => {
    $('.tablaCarrito').fadeIn();
    $('#carrito').append(`<tr>
        <td>${producto.tipo}</td>
        <td class="precioCarrito">$${producto.precio}</td>
        </tr></tr>`);

        const clickAgregar = event.target
        console.log(clickAgregar.id);

        const productoAgregado = productos.find((productoItem) => productoItem.id === parseInt(producto.id));
        productoAgregado.agregado = true;

        console.log(productoAgregado);


     //GUARDO EN LOCALSTORAGE LOS PRODUCTOS QUE SE CARGARON EN EL CARRITO:    
     const productosEnCarrito = productos.filter((productoItem) => productoItem.agregado === true);
     localStorage.setItem('producto seleccionado', JSON.stringify(productosEnCarrito));
     
     //MUESTRO POR CONSOLA LOS PRODUCTOS GUARDADOS EN LOCALSTORAGE:
     console.log(localStorage.getItem('producto seleccionado'));
 
     let subtotalCarrito = 0;
 
     for (const producto of productosEnCarrito){
         subtotalCarrito += parseInt(producto.precio);
         $('.carritoSub').append(`
         <p>${subtotalCarrito}</p>`)
     }

    })
};



//métodos de pago:

let transferencia = document.getElementsByClassName('transf');

let cuotas = 3  //document.querySelector('.cuotas');
console.log('cuotas:' + cuotas);

let subtotal = 500; //document.getElementsByClassName('subtotal');
console.log('subtotal: ' + subtotal);

function calculoCuotas (subtotal,cuotas ) {
    switch (cuotas) {
                    case '3':
                            return (subtotal /0.90) / 3;
                    case '6':
                        return (subtotal /0.90) / 6;
                    case '12':
                        return (subtotal /0.90) / 12;

                        default:
                            return 0;
                }
    }

let pagoEnCuotas = calculoCuotas(500, "6");
    
//metodo de entrega:

let entrega = 'caba' //document.getElementsByClassName('entrega');

function calculoEntrega(subtotal,entrega) {
    switch (entrega) {
                    case 'retiro':
                            return subtotal;
                    case 'caba':
                        return subtotal + 500;
                    case 'correo':
                        return subtotal + 1200;
                }
    }

let envio = calculoEntrega(500, "correo");
console.log('El costo con envío es de: $' + envio);

let total = subtotal + pagoEnCuotas + envio;
console.log('El total de su compra es de: $' + total);







