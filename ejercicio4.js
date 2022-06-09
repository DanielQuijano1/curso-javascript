let lista = document.getElementById("listaJugadores");

let arregloDeItems = new Array();


for (let i = 0; i < arregloDeItems.length; i++) {
    let item = arregloDeItems[i];
    agregarItem(item);
}

function agregarItem(item) {
    let li = document.createElement("li");
    li.textContent = item.toUpperCase();

    lista.appendChild(li);
}

function agregarContador(){
    //let cnt = document.createElement("div");
    //cnt.textContent = 0;

    //let incrementar = document.createElement("button");
    var contadorPuntos = 0;

function incrementarClick() {
    mostrarEnPantalla(++contadorPuntos);
}

function resetearContador() {
    contadorPuntos = 0;
    mostrarEnPantalla(contadorPuntos);
}

function mostrarEnPantalla(val) {
    document.getElementById("contador").innerHTML = val;
}


}

let input = document.getElementById("nombreJugador");
input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        mostrarItem();
    }
});

function mostrarItem() {
    if (input.value.trim != "") {
        agregarItem(input.value);
        input.value = "";
    }
}

let boton = document.getElementById("agregarJugador");
boton.addEventListener("click", (e) => {
    mostrarItem();
}
)





var contadorPuntos = 0;

function incrementarClick() {
    mostrarEnPantalla(++contadorPuntos);
}

function resetearContador() {
    contadorPuntos = 0;
    mostrarEnPantalla(contadorPuntos);
}

function mostrarEnPantalla(val) {
    document.getElementById("contador").innerHTML = val;
}

