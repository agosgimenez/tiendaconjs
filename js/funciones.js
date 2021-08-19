var total = parseInt (prompt("Ingrese total de la compra"));

function calculadora(montoTotal, operacion) {
    switch (operacion) {
        case "3":
            return montoTotal / 3;

        case "6":
            return montoTotal / 6;

        case "9":
            return montoTotal / 9;

        case "12":
            return montoTotal / 12;

        default:
            return 0;

    }
}
console.log(calculadora(1890, "6"));
