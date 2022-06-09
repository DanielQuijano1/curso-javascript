let cargarEmpleado = document.getElementById("cargarMenu");

let cargarAsistencias = document.getElementById("asistencias");

let consultas = document.getElementById("consultas");

function menuCargarEmpleado(e){
    e.preventDefault();
    location.href = "cargar-empleado.html"
}

function menuCargarAsitencias(e){
    e.preventDefault();
    location.href = "asistencias.html"
}

function menuConsultas(e){
    e.preventDefault();
    location.href = "consultas.html"
}

cargarEmpleado.addEventListener("click",menuCargarEmpleado);
cargarAsistencias.addEventListener("click",menuCargarAsitencias);
consultas.addEventListener("click",menuConsultas);