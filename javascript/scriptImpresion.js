const listaParse = JSON.parse(localStorage.getItem("listaDeEmpleadosJSON"));

if (listaParse == null) {
    alert("No hay empleados cargados en la nomina")
} else {
    for (const emps of listaParse) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = "<h3> ID: ${emp.id} </h3><ul><li>Nombre: ${emps.nombre}</li><li>Apeliido: ${emps.apellido}</li><li>DNI: ${emps.dni}</li><li>Fecha de Nacimiento: ${emps.nacimiento}</li><li>Localidad: ${emps.localidad}</li><li>Direccion: ${emps.}calle ${emps.altura}</li><li>Telefono: ${emps.telefono}</li><li>Puesto: ${emps.puesto}</li><li>Fecha de Alta: ${emps.fechaDeAlta}</li></ul>"

        document.body.appendChild(contenedor);
    }

}
