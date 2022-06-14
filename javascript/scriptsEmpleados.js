const listaEmpleados = [];

const listaEmpleadosJSON = JSON.stringify(listaEmpleados);

let verificar = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

if(verificar == null){
    localStorage.setItem("listaEmpleadosJSON",listaEmpleadosJSON);
}

let cargar = document.getElementById("cargarEmpleado");

function validarDatos(dato){

    if(dato == ""){
        return false;
    }else{
        return true;
    }
}

function cargarEmpleado(e){
    e.preventDefault();

    let nombre = document.getElementById("nombreEmpleado").value;
    let apellido = document.getElementById("apellidoEmpleado").value;
    let dni = document.getElementById("dniEmpleado").value;
    let nacimiento = document.getElementById("nacimientoEmpleado").value;
    let localidad = document.getElementById("localidadEmpleado").value;
    let calle = document.getElementById("calleEmpleado").value;
    let altura = document.getElementById("alturaEmpleado").value;
    let telefono = document.getElementById("telefonoEmpleado").value;
    let puesto = document.getElementById("puestoEmpleado").value;
    let id = apellido + " " + nombre;
    let fechaDeAlta = document.getElementById("altaEmpleado").value;
    let sueldo = salario(puesto);

    if (existe(dni) == true){
        alert("El empleado ya se encuentra cargado en la nomina")
    }else if(validarDatos(nombre) && validarDatos(apellido) && validarDatos(dni) && validarDatos(nacimiento) && validarDatos(localidad) && validarDatos(calle) && validarDatos(altura) && validarDatos(telefono) && validarDatos(puesto) && validarDatos(sueldo)){
        let empleado = new Empleado(nombre,apellido,dni,nacimiento,localidad,calle,altura,telefono,puesto,sueldo,id,fechaDeAlta);
        
        const listaEmpleadosParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

        listaDeEmpleados.push(empleado)

        const listaEmpleadosSt = JSON.stringify(listaEmpleadosParse);

        localStorage.setItem("listaEmpleadosJSON",listaEmpleadosSt);

        let mostrar = empleado.devolucion();

        let confirmacion = confirm("Carga completada con Exito" + "\n" + mostrar);

        restart(e)
    }else{
        alert("Revise los datos cargados")
    }
}

function salario(cargo){

    if(cargo == "Recepcionista"){
        return 95000;
    }else if(cargo == "Peluquero-corte"){
        return 80000;
    }else if(cargo == "Peluquero-color"){
        return 85000;
    }else if(cargo == "Manicura"){
        return 75000;
    }else if(cargo == "spa"){
        return 82000;
    }else if(cargo == "Limpieza"){
        return 70000;
    }
}

function restart(e){
    e.preventDefault();
    document.querySelector("form").reset();
}

function existe(dniCargado){
    const empleadoParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));
    console.log(empleadoParse);
    for (i = 0; i < empleadoParse.length; i++){
        if (dniCargado == empleadoParse[i].dni){
            return true;
        }
    }
}

cargar.addEventListener("click",cargarEmpleado);
reset.addEventListener("click",restart)