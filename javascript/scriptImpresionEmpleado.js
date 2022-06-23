const listaParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

let copia = document.getElementById("copia");
let inputTexto = document.getElementById("buscarEmpleado");

inputTexto.addEventListener("keyup", () =>{

    let dniEmpleado = document.getElementById("buscarEmpleado").value;

    if(listaParse == null){
        Swal.fire("No hay empleados cargados en la nomina para mostrar");
    }else{
        for(i = 0; i < listaParse.length; i++){
            if(listaParse[i].dni == dniEmpleado){
                copia.innerHTML = `
                <h3>ID: ${listaParse[i].id}<h3>
                <ul>
                    <li>Nombre: ${listaParse[i].nombre}</li>
                    <li>Apellido: ${listaParse[i].apellido}</li>
                    <li>DNI: ${listaParse[i].dni}</li>
                    <li>Fecha de nacimiento: ${listaParse[i].nacimiento}</li>
                    <li>Localidad: ${listaParse[i].localidad}</li>
                    <li>Direccion: ${listaParse[i].calle} ${listaParse[i].altura} </li>
                    <li>Telefono: ${listaParse[i].telefono}</li>
                    <li>Puesto: ${listaParse[i].puesto}</li>
                    <li>Fecha de alta: ${listaParse[i].fechaAlta}</li>
                    <li>Sueldo base: ${listaParse[i].sueldo}</li>
                </ul>`;
                break;
            }else if(i == listaParse.length - 1 && listaParse[i].dni != dniEmpleado){
                copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en la nomina<h3>`;
            }
        }
    }
})