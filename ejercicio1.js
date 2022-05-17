
//calculadora
let bienvenida = prompt("Bienvenido a la calculadora, para seguir ingrese Y , para salir, ingrese N");

bienvenida = bienvenida.toUpperCase

while (bienvenida != "Y") {
    alert("No se puede iniciarla calculadora")
    bienvenida = prompt("Ingrese Y para continuar")
}

let primerNumero = prompt("Ingrese el primer numero a calcular");

let operacion = prompt("ingrese la operacion a realizarse: + - * /");

let segundoNumero = prompt("ingrese segundo numero a calcular");

primerNumero = parseInt(primerNumero);

segundoNumero = parseInt(segundoNumero);

switch (operacion) {
    case "+":
        alert(primerNumero + "+" + segundoNumero + "+" + (primerNumero + segundoNumero));
        break;
    case "-":
        alert(primerNumero + "-" + segundoNumero + "-" + (primerNumero - segundoNumero));
        break;
    case "*":
        alert(primerNumero + "*" + segundoNumero + "*" + (primerNumero * segundoNumero));
        break;
    case "/":
        alert(primerNumero + "/" + segundoNumero + "/" + (primerNumero / segundoNumero));
        break;
    default:
        alert("Perdon, no reconozco la operacion")
}
