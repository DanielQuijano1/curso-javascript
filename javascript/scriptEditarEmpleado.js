let verificars = document.getElementById("verificarEmpleado");
let editor = document.getElementById("empleadoGuardarCambios");

function verificar(e) {
    e.preventDefault();

    let idDni = document.getElementById("editarEmpleado").value;

    const listaEmpleadoParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

    let busquedaPorID = listaEmpleadoParse.some((empleado) => empleado.id === idDni);

    let busquedaPorDNI = listaEmpleadoParse.some((empleado) => empleado.dni === idDni);

    busquedaPorDNI || busquedaPorID ? Swal.fire("El empleado se encuentra registrado") : Swal.fire("El empleado no se encuentra cargado en la nomina, primero debe cargarlo")

}

function editar(e) {
    e.preventDefault();

    const listaDeEmpleados = [];

    const listaEmpleadoParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

    for (const empleadoNuevo of listaEmpleadoParse) {
        listaDeEmpleados.push(new EmpleadoPrueba(empleadoNuevo));
    }

    let posicion = devuelvePosicion(listaDeEmpleados);

    let datoAEditar = document.getElementById("empleadoEdicion").value;

    let nuevoValor = document.getElementById("empleadoCambio").value;

    if(posicion == null){
        Swal.fire("Coloque un dni o id correcto que se encuentre cargado en la nomina")
    }else{

    validarDato(nuevoValor);

    if (validarDato(nuevoValor)) {
        switch (datoAEditar) {
            case "Nombre":
                listaDeEmpleados[posicion].setNombre(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Nombre modificado exitosamente");
                break;

            case "Apellido":
                listaDeEmpleados[posicion].setApellido(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Apellido modificado exitosamente");
                break;

            case "DNI":
                listaDeEmpleados[posicion].setDNI(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("DNI modificado exitosamente");
                break;

            case "Localidad":
                listaDeEmpleados[posicion].setLocalidad(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Localidad modificado exitosamente");
                break;

            case "Calle":
                listaDeEmpleados[posicion].setCalle(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Calle modificado exitosamente");
                break;

            case "Altura":
                listaDeEmpleados[posicion].setAltura(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Altura modificado exitosamente");
                break;

            case "Telefono":
                listaDeEmpleados[posicion].setTelefono(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Telefono modificado exitosamente");
                break;

            case "Puesto":
                listaDeEmpleados[posicion].setPuesto(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Puesto modificado exitosamente");
                break;

            case "Sueldo":
                listaDeEmpleados[posicion].setSueldo(nuevoValor);
                listaDeEmpleados[posicion].id = listaDeEmpleados[posicion].apellido + " " + listaDeEmpleados[posicion].nombre;
                Swal.fire("Sueldo modificado exitosamente");
                break;
        }

        const listaDeEmpleadosSt = JSON.stringify(listaDeEmpleados);
        localStorage.setItem("listaEmpleadosJSON",listaDeEmpleadosSt);
    }else{
        Swal.fire("Debe ingresar un nuevo valor para poder editar correctamente")
    }
}
 
}
function devuelvePosicion(busqueda){
    for(i=0; busqueda.length; i++){
        let dniId = document.getElementById("empleadoEditar").value;
        if(busqueda[i].dni== dniId || busqueda[i].id == dniId){
            return i;
        }
    }
}

function validarDato(dato){
    if(dato == ""){
        return false;
    }else{
        return true;
    }
}

verificars.addEventListener("click",verificar);
editor.addEventListener("click",editar)