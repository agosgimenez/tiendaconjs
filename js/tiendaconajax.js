
//JSON LOCAL:
// const docJson = "../json/infoback.json";

//////////////////////////////////////////////////
//    WEB BLANCO PIEDRA - CURSO JAVA SCRIPT    //
/////////////////////////////////////////////////

//////// ARCHIVO JS PARA HTML TIENDA ////////

//CONFIRMO QUE EL DOM ESTA LISTO PARA AGREGARLE EVENTOS:
$(document).ready(function(){
    console.log('el dom está listo')
    

//CARGO LOS PRODUCTOS CON FUNCIÓN AJAX GETJSON:
const jsonLocal = '../json/infoback.json';

$("#botonTienda").click(() => {
    $.getJSON(jsonLocal,function(datos,estado){
        if (estado === "success"){
            let infoJson = datos;
            for (const dato of infoJson){
                    $('#tienda').append(`
                    <div class="col-xs col-sm col-md-4 col-lg-3">
                    <div class="card">
                        <img src="media/${dato.imgProducto}" class="card-img-top" alt="portautensillos azul">
                        <div class="card-body card-body--producto">
                            <h5 class="card-title tipo">${dato.tipo}</h5>
                            <p class="card-text precio"><em>$${dato.precio}</em></p>
                            <button id="boton${dato.id}" type="button" class="btn boton--comprar btn-sm agregarCarrito">Añadir a carrito</button>
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
        //console.log(clickAgregar.id);
    
        const productoAgregado = productos.find((productoItem) => productoItem.id === parseInt(producto.id));
        productoAgregado.agregado = true;


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
        });


            };
        };
    });
});

});
