
var turno = prompt('Elegí el nº de combo que quieras:\n 1) Manicuría + Pedicuría\n 2) Sólo Manicuría\n 3) Sólo Pedicuría');
console.log (turno);

switch (turno) {
        case '1':
            alert ('Elegiste Manucuría + Pedicuría');
            break;
        case '2':
            alert ('Elegiste Sólo Manicuría');
            break;
        case '3':
            alert ('Elegiste Sólo Pedicuría');
            break;
        default:
            alert ('Si necesitás otro tratamiento podés enviar tu consulta a deconails@gmail.com');
            break;
    }   

var tratamiento = prompt ('Indicá tipo de tratamiento:\n 1) Esmaltado clásico\n 2) Esmaltado Semipermanente\n 3) Kapping gel\n 4) Esculpidas');
console.log (tratamiento);

if ( tratamiento == '1') {
    alert ('Optaste por esmaltado clásico');
} else if ( tratamiento == '2') {
    alert ('Optaste por esmaltado semipermanente');
} else if ( tratamiento == '3') {
    alert ('Optaste por kapping gel');
} else if (tratamiento == '4') {
    alert ('Optaste por esculpidas');
} else {
    alert ('Debes optar por un tipo de tratamiento');

    while ( tratamiento != '1' || tratamiento != '2' || tratamiento != '3' || tratamiento !== '4') {
        var tratamiento = prompt ('Indicá tipo de tratamiento: 1) Esmaltado clásico / 2) Esmaltado Semipermanente / 3) Kapping gel');
    }
}