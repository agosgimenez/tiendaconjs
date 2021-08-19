// ORDENAR UN ARRAY

const todosContactos = [];

class Contacto {
    constructor (nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
}

//ingreso de diferentes contactos...

let contacto1 = new Contacto ('Pedro', 'pedrito@unmail.com');
let contacto2 = new Contacto ('Sol', 'mariasol@unmail.com');
let contacto3 = new Contacto ('Camila', 'cami@unmail.com');
let contacto4 = new Contacto ('Anita', 'anita@unmail.com');
let contacto5 = new Contacto ('Martin', 'martincho@unmail.com');

todosContactos.push (contacto1);
todosContactos.push (contacto2);
todosContactos.push (contacto3);
todosContactos.push (contacto4);
todosContactos.push (contacto5);

//declaro funcion para empezar a ordenarlos...
todosContactos.sort ( function (a,b) {

        if (a.nombre < b.nombre) {
            return -1;
        }

        if (a.nombre > b.nombre) {
            return 1;
        }

        return 0;
    }    
    )

console.log (todosContactos);

