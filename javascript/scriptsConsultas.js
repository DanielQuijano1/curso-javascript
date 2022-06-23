let mostrarNomina = document.getElementById("consultaNomina");

let mostrarInfoDeEmpleado = document.getElementById("consultaBuscarEmpledo");

let editarEmpleado = document.getElementById("consultaEditarEmpleado");

let visualizarSueldoMensual = document.getElementById("consultaSueldo")

let consultaSueldoDolarizado = document.getElementById("consultaSueldoDolarizado")

function menuConsultas(e){
    e.preventDefault();
    location.href="impresion.html"
}

function mostrarEmpleado(e){
    e.preventDefault();
    location.href = "impresionEmpleado.html"
}

function editarUnEmpleado(e){
    e.preventDefault();
    location.href = "editarEmpleado.html"
}

function visualizarSueldosMensuales(e){
    e.preventDefault();
    location.href = "visualizarSueldosMensuales.html"
}

function visualizarSueldoEspecifico(e){
    e.preventDefault();
    location.href="visualizarSueldoEmpleado.html"
}

mostrarNomina.addEventListener("click",menuConsultas);
mostrarInfoDeEmpleado.addEventListener("click",mostrarEmpleado);
editarEmpleado.addEventListener("click",editarUnEmpleado);
visualizarSueldoMensual.addEventListener("click",visualizarSueldosMensuales);
consultaSueldoDolarizado.addEventListener("click",visualizarSueldoEspecifico);