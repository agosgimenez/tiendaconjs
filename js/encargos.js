//ARCHIVO JS PARA HTML ENCARGO

//Array donde se van a ir sumando todos los contactos...
let totalEncargos = [];

//objeto Contacto... 
class Encargo {
    constructor (nombre, email, pieza, color, particularidad, detallesEncargo) {
        this.nombre = nombre;
        this.email = email;
        this.pieza = pieza;
        this.color = color;
        this.particularidad = particularidad;
        this.detalles = detallesEncargo;
    }
};

let sectionEncargo= prompt ('Desea hacer un encargo personalizado?');

switch (sectionEncargo) {

    case 'si':
                //nombre...
                let nombre = prompt ('Ingrese su nombre');

                //email...
                let email = prompt ('Ingrese su email');

                //tipo de pieza ...
                let pieza = prompt('Qué tipo de pieza buscás?');

                switch (pieza) {
                    case 'vajilla':
                        alert ('Elegiste vajilla');
                        break;
                    case 'pastel':
                        alert ('Elegiste deco');
                        break;
                    case 'otro':
                        alert ('Por favor especificar qué tipo de pieza te gustaría en el espacio para agregar detalles.');
                        break;
                };  

                //colores ...
                let color = prompt('De qué color te gustaría?');

                switch (color) {
                    case 'azul':
                        alert ('Elegiste color azul');
                        break;
                    case 'pastel':
                        alert ('Elegiste color pastel');
                        break;
                    case 'blanco':
                        alert ('Elegiste color blanco');
                        break;
                    case 'otro':
                        alert ('Por favor especificar el color que te gustaría en el espacio para agregar detalles.');
                        break;
                };   

                //particularidad ...
                let particularidad = prompt('Qué particularidad debe tener la pieza?');

                switch (particularidad) {
                    case 'apto vajilla':
                        alert ('Solicitaste que sea apta para vajilla');
                        break;
                    case 'apto microondas':
                        alert ('Solicitaste que sea apta para microondas');
                        break;
                    case ('apto microondas' && 'apto vajilla'):
                        alert ('Solicitaste que sea apta para vajilla y para microondas');
                        break;
                    default:
                        console.log ('Particularidad no ingresada');
                        break;
                };  

                //consulta...
                let detallesEncargo = prompt ('Contame más detalles');
                console.log (detallesEncargo);
                
                //declaracion de nuevo contacto para sumar al array
                let encargoIngresado = new Encargo (nombre, email, pieza, color, particularidad, detallesEncargo);

                totalEncargos.push (encargoIngresado);

                console.log (totalEncargos);

                //enviar...
                function enviarFormulario (enviar, vaciar, operacion) {
                    switch (operacion) {
                        case enviar:
                                return ('formulario enviado');
                                alert ('formulario enviado');
                        case vaciar: 
                                return ('formulario vaciado');
                                alert ('formulario vaciado');
                        default: 
                                return ('no se completaron datos');
                                alert ('no se completaron datos');
                    }
                };
                break;
    case 'no':
                alert ('Continuar navegando sin hacer encargo');
                break;
}