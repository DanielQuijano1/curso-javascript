const listaParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

if (listaParse == null) {
    Swal.fire("No hay empleados cargados en la nomina")
} else {

    for (const emples of listaParse) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML=`
        <h3>ID: ${emples.id}<h3>
        <ul>
            <li>Nombre: ${emples.nombre}</li>
            <li>Apellido: ${emples.apellido}</li>
            <li>DNI: ${emples.dni}</li>
            <li>Fecha de nacimiento: ${emples.nacimiento}</li>
            <li>Localidad: ${emples.localidad}</li>
            <li>Direccion: ${emples.calle} ${emples.altura} </li>
            <li>Telefono: ${emples.telefono}</li>
            <li>Puesto: ${emples.puesto}</li>
            <li>Fecha de alta: ${emples.fecha_alta}</li>
        </ul>`;
        
        document.body.appendChild(contenedor);
    }

}
