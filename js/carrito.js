//ARCHIVO JS PARA HTML DE CARRITO 

/////INICIO DE COMPRA/////

let mailContacto = prompt ('Ingresar mail de contacto:');
console.log (mailContacto);

/////CALCULO DE COMPRA/////

function sumarProductos (produc1, produc2, produc3, produc4) {
    return produc1 + produc2 + produc3 + produc4;
}

let resultado = sumarProductos (600,600, 2000, 400);
console.log(resultado);
alert ('El subtotal de tu carrito es de $ ' + resultado);


// /////MEDIO DE PAGO /////


let medioPago = prompt ('Ingresá el modo de pago que prefieras:\n 1) Efectivo\n 2) Transferencia\n 3) En cuotas.');
console.log (medioPago);

if ( medioPago == '1') {
    alert ('Optaste por pagar en efectivo al momento de retirar tu compra!')
} else if ( medioPago == '2') {
    alert ('Te llegará por mail los datos de la cuenta a transferir.');
} else if ( medioPago == '3') {
    let cuotas = parseInt(prompt ('En cuántas cuotas querés abonar?:\n 3 cuotas sin interés\n 6 cuotas sin interés.'));
    console.log (cuotas);

        /////CALCULO DE CUOTAS////
        function calculoCuota (resultado, cuotas) {
            switch (cuotas) {
                case 3:
                        return resultado / 3;
                case 6: 
                        return resultado / 6;
                default: 
                        return 0;
            }
        }
        let valorCuota = calculoCuota (resultado,cuotas);
        console.log (valorCuota);
        alert ('El valor de cada cuota es de $ ' + valorCuota);
} else {
    alert ('Debes indicar opción 1 , 2 o 3.');
            while ( medioPago != '1' || medioPago != '2' || medioPago != '3') {
                let medioPago = prompt ('Ingresá el modo de pago que prefieras:\n 1) Efectivo\n 2) Transferencia\n 3) En cuotas.');
            }
        }

/////CALCULO DE ENVÍO/////

let despacho = prompt ('Ingresá número correspondiente de acuerdo a lo que prefieras:\n 1) Pasar a retirar mi compra\n 2) Envío a domicilio.');
console.log (despacho);

if ( despacho == '1') {
    alert ('Contactarse por whatsapp para coordinar día y horario!');
} else {
    let ciudad = prompt ('Elegiste envío a domicilio! Indicá opción que corresponda:\n 1) Capital Federal\n 2) Gran Bs.As\n 3) Interior del país');

            if ( ciudad == '3') {
            alert ('El costo de envío es de $ 800');
        } else if ( ciudad == '2') {
            alert ('El costo del envío es de $ 600');
        } else if ( ciudad == '1') {
            alert ('El costo del envío es de $ 400');
            let barrio = prompt ('Indicá a qué barrio se envía.');
        } else {
            alert ('Debes indicar opción 1 , 2 o 3.');

            while ( ciudad != '1' || ciudad != '2' || ciudad != '3') {
                let ciudad = prompt ('Indicá opción que corresponda:\n 1) Capital Federal\n 2) Gran Bs.As\n 3) Interior del país');
            }
        }
    }












    



















