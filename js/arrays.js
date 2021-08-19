// ARRAYS //

//declaro el array que va a ir sumando todos los objetos vajilla al carrito
const totalVajilla = [];

//declaro las propiedades de cada producto
class Producto {
    constructor (objeto, linea, tamano, precio) {
        this.objeto = objeto.toUpperCase();
        this.linea = linea.toUpperCase();
        this.tamano = tamano;
        this.precio = parseFloat(precio);
    }
    //////MÉTODO PARA DESCUENTO DE 10 %//////
    conDescuento () {
        this.precio = this.precio * 0.90;
    }
    //////MOSTRAR X CONSOLA DETALLADO//////
    mostrar () {
        for (const propiedad in this) { 
            console.log (propiedad + ':' + this [propiedad]);
        }
    }
}

//comienzo la interacción...

let continuar = true;

    //bucle para sumar productos al carrito...
        
        do {

            let objeto = prompt ('Qué vajilla estás buscando?');

            let linea = prompt ('Ingresá la línea');

            let tamano = prompt ('Ingresá el tamaño');

            let precio = prompt ('Ingresa el precio');
        
            let vajilla = new Producto (objeto, linea, tamano, precio);
            console.log (vajilla);

            continuar = confirm ('Querés seguir agregando productos al carrito?');

            totalVajilla.push (vajilla);

        } while (continuar != false);

        console.log (totalVajilla);



