//////////////////////////////////////////////////
// WEB CON JS BLANCO PIEDRA - AGOSTINA GIMENEZ //
/////////////////////////////////////////////////

//////// ARCHIVO JS PARA HTML CONTACTO ////////

//CREO ARCHIVO JSON LOCAL//

const jsonLocal = '../json/infoback.json';

//GENERO UNA CLASE CONSTRUCTORA CON TODOS LOS DATOS QUE SE CARGAN X FORMULARIO:
class Contacto {
    constructor (nombre, email, conocimiento, consulta) {
        this.nombre = nombre;
        this.email = email;
        this.conocimiento = conocimiento;
        this.consulta = consulta;
    }
};


$.getJSON(jsonLocal,function(data,status){
    console.log(data)
});

//CREO ARRAY VACÍO PARA TODOS LOS CONTACTOS QUE VAYAN INGRESANDO:
let contactoNuevo = [];

//DOM//

const envioFormulario = document.querySelector ('.formulario');
envioFormulario.addEventListener ('submit', (e) => {e.preventDefault ();})

const nombre = document.querySelector ('.nombre');
const email = document.querySelector ('.email');
const consulta = document.querySelector ('.consulta');
    
let contactoIngresado = new Contacto (nombre, email, consulta);
contactoNuevo.push(contactoIngresado);

//EVENTOS//

//TOMO LOS INPUTS DEL FORMULARIO:
const inputnombre = document.getElementById ('nombre');
const inputemail = document.getElementById ('email');
const inputconsulta = document.getElementById ('consulta');

//APLICO EVENTO CHANGE A CADA UNO:
inputnombre.onchange = () => {console.log(inputnombre.value)};
inputemail.onchange = () => {console.log(inputemail.value)};
inputconsulta.onchange = () => {console.log(inputconsulta.value)};

//TOMO EL BOTON DE ENVIAR:
const inputEnviarContacto = document.getElementById ('enviar');

//APLICO EVENTO ON CLICK:
inputEnviarContacto.onclick =() => {console.log (contactoNuevo)}; 
//NO ME MUESTRA LOS VALORES DE CADA ATRIBUTO 

//STORAGE//

//CARGO EN LOCALSTORAGE Y PASO A JSON PARA QUE LOS STRINGS LOS TOME EN TEXTO PLANO:
localStorage.setItem ('nuevo contacto ingresado', JSON.stringify (contactoIngresado));

//MUESTRO POR CONSOLA DATOS EN STORAGE:
console.log (localStorage.getItem (contactoIngresado));

//JQUERY//


