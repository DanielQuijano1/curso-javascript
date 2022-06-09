const listaDeEmpleados = [];

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

    if(validarDatos(nombre) && validarDatos(apellido) && validarDatos(dni) && validarDatos(nacimiento) && validarDatos(localidad) && validarDatos(calle) && validarDatos(altura) && validarDatos(telefono) && validarDatos(puesto) && validarDatos(sueldo)){
        let empleado = new Empleado(nombre,apellido,dni,nacimiento,localidad,calle,altura,telefono,puesto,sueldo,id,fechaDeAlta);
        listaDeEmpleados.push(empleado)

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

cargar.addEventListener("click",cargarEmpleado);
reset.addEventListener("click",restart)