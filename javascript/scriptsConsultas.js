let mostrarNomina = document.getElementById("consultaNomina");

function menuConsultas(e){
    e.preventDefault();
    location.href="impresion.html"
}

mostrarNomina.addEventListener("click",menuConsultas)