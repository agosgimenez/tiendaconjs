

var universidad = prompt ('Ingrese el nombre de su Universiadad');
console.log (universidad);

if ((universidad.toLowerCase() == 'uade') || (universidad.toLowerCase() == 'uai') || (universidad.toLowerCase() == 'uces')) {
    alert ('Su universidad tiene convenio con nosotros para aplicar a visa de estudios. Querés más info?');

        var pais = prompt ('Los países a los que podés aplicar visa son: Canadá, Inglaterra y Portugal. A cuál irías?.')
        console.log (pais);

            if (pais.toLowerCase() == 'canadá') {
                alert ('Enviar consulta al siguiente mail: visacanada@armatuviaje.com');
            } 
            else if (pais.toLowerCase() == 'canada') {
                alert ('Enviar consulta al siguiente mail: visacanada@armatuviaje.com');
            } 
            else if (pais.toLowerCase() == 'inglaterra') {
                alert ('Enviar consulta al siguiente mail: visaing@armatuviaje.com');
            } else if (pais.toLowerCase() == 'portugal') {
                alert ('Enviar consulta al siguiente mail: visaportu@armatuviaje.com');
            } else {
                alert ('Si estás interesado en algún otro país diferente... no te preocupes!Contactanos: consultas@armatuviaje.com');
            }

        var edad = parseInt(prompt ('Dependiendo tu edad, podés aplicar también a diferentes visas de estudio + trabajo. Cuál es tu edad?'));
        console.log (edad);

            if ((edad > 18) && (edad <= 21)) {
                alert ('En base a tu edad las vacantes laborales son: gastronomía, turismo y au pair');
            } else if ((edad >21) && (edad <= 26)) {
                alert ('En base a tu edad las vacantes laborales son: gastronomía, turismo, au pair y mensajería');
            } else if ((edad > 26) && (edad <= 30)) {
                alert ('En base a tu edad las vacantes laborales son: au pair, administrativo y contact center');
            } else if ((edad > 30) && (edad <= 35)) {
                alert ('En base a tu edad las vacantes laborales son: administrativo');
            } else {
                alert ('En base a tu edad no hay vacantes laborales disponibles. Lo sentimos!')
            }

    } else {
        alert ('Su universidad no tiene convenio con nosotros para aplicar a visa de estudios. Lo sentimos!')
    }    
