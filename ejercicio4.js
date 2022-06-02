let lista = document.getElementById("listaJugadores");

let arregloDeItems = new Array();

function agregarItem(item) {
    let li = document.createElement("li");
    li.textContent = item.toUpperCase();
    lista.appendChild(li);
}


for (let i = 0; i < arregloDeItems.length; i++) {
    let item = arregloDeItems[i];
    agregarItem(item);
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