//calculador de precio final en cuotas (pago de cuotas sobre un monto determinado)
const sumar = (a, b) => a + b;


while (true) {
    var precioIngresadoACalcular = parseFloat(prompt("Ingrese el precio del producto a calcular"));
    if (!isNaN(precioIngresadoACalcular) && precioIngresadoACalcular != "" && precioIngresadoACalcular != null) {
        alert("ingresaste: $" + precioIngresadoACalcular + ", a continuacion selecciona la cantidad de cuotas");
        break;
    }
    else {
        alert("no ingresaste una cantidad especifica");
        continue;
    }
}

let cuotas;

while (cuotas != 1 && cuotas != 3 && cuotas != 6) {
    cuotas = parseInt(prompt("Usted puede abonar el pago en 1, 3 y 6 cuotas"));

    switch (cuotas) {
        case 1:
            alert("el precio final en 1 pago es de: $" + sumar(precioIngresadoACalcular, (precioIngresadoACalcular * 0.08)));
            break;

        case 3:
            alert("el precio final de 3 cuotas es de: $" + sumar(precioIngresadoACalcular, (precioIngresadoACalcular * 0.15)));
            break;

        case 6:
            alert("el precio final de 3 cuotas es de: $" + sumar(precioIngresadoACalcular, (precioIngresadoACalcular * 0.35)));
            break;

        default:
            alert("No ingresaste una cantidad de cuotas valida")
    }
}