let consultar = document.getElementById("buscar");

function visualizarSueldo(e) {

    e.preventDefault();
    let mesIngresado = document.getElementById("empleadoMes").value;
    let anioIngresado = document.getElementById("empleadoAnio").value;
    mesIngresado = mesIngresado.toUpperCase();

    switch (mesIngresado) {
        case "ENERO":
            if (anioIngresado == 2022) {
                const enero2022Parse = JSON.parse(localStorage.getItem("enero2022JSON"));
                if (enero2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>enero 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of enero2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const enero2023Parse = JSON.parse(localStorage.getItem("enero2023JSON"));
                if (enero2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>enero 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of enero2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "FEBRERO":
            if (anioIngresado == 2022) {
                const febrero2022Parse = JSON.parse(localStorage.getItem("febrero2022JSON"));
                if (febrero2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>FEBRERO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of febrero2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const febrero2023Parse = JSON.parse(localStorage.getItem("febrero2023JSON"));
                if (febrero2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>FEBRERO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of febrero2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
            }
             }
            break;

            case "MARZO":
            if (anioIngresado == 2022) {
                const marzo2022Parse = JSON.parse(localStorage.getItem("marzo2022JSON"));
                if (marzo2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>MARZO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of marzo2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 } 
            } else if (anioIngresado = 2023) {
                const marzo2023Parse = JSON.parse(localStorage.getItem("marzo2023JSON"));
                if (marzo2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>MARZO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of marzo2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "ABRIL":
            if (anioIngresado == 2022) {
                const abril2022Parse = JSON.parse(localStorage.getItem("abril2022JSON"));
                if (abril2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>ABRIL 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of abril2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const abril2023Parse = JSON.parse(localStorage.getItem("abril2023JSON"));
                if (abril2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>ABRIL 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of abril2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
            }
             }
            break;

            case "MAYO":
            if (anioIngresado == 2022) {
                const mayo2022Parse = JSON.parse(localStorage.getItem("mayo2022JSON"));
                if (mayo2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>MAYO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of mayo2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const mayo2023Parse = JSON.parse(localStorage.getItem("mayo2023JSON"));
                if (mayo2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>MAYO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of mayo2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "JUNIO":
            if (anioIngresado == 2022) {
                const junio2022Parse = JSON.parse(localStorage.getItem("junio2022JSON"));
                if (junio2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>JUNIO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of junio2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const junio2023Parse = JSON.parse(localStorage.getItem("junio2023JSON"));
                if (junio2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>JUNIO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of junio2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "JULIO":
            if (anioIngresado == 2022) {
                const julio2022Parse = JSON.parse(localStorage.getItem("julio2022JSON"));
                if (julio2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>JULIO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of julio2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const julio2023Parse = JSON.parse(localStorage.getItem("julio2023JSON"));
                if (julio2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>JULIO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of julio2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "AGOSTO":
            if (anioIngresado == 2022) {
                const agosto2022Parse = JSON.parse(localStorage.getItem("agosto2022JSON"));
                if (agosto2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>AGOSTO 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of agosto2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const agosto2023Parse = JSON.parse(localStorage.getItem("agosto2023JSON"));
                if (agosto2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>AGOSTO 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of agosto2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
            }
             }
            break;

            case "SEPTIEMBRE":
            if (anioIngresado == 2022) {
                const septiembre2022Parse = JSON.parse(localStorage.getItem("septiembre2022JSON"));
                if (septiembre2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>SEPTIEMBRE 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of septiembre2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const septiembre2023Parse = JSON.parse(localStorage.getItem("septiembre2023JSON"));
                if (septiembre2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>SEPTIEMBRE 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of septiembre2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "OCTUBRE":
            if (anioIngresado == 2022) {
                const octubre2022Parse = JSON.parse(localStorage.getItem("octubre2022JSON"));
                if (octubre2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>OCTUBRE 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of octubre2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const octubre2023Parse = JSON.parse(localStorage.getItem("octubre2023JSON"));
                if (octubre2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>OCTUBRE 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of octubre2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "NOVIEMBRE":
            if (anioIngresado == 2022) {
                const noviembre2022Parse = JSON.parse(localStorage.getItem("noviembre2022JSON"));
                if (noviembre2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueva != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>NOVIEMBRE 2023</h2>
                `;

                div.appendChild(mes);
                for (const empleados of noviembre2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const noviembre2023Parse = JSON.parse(localStorage.getItem("noviembre2023JSON"));
                if (noviembre2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>NOVIEMBRE 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of noviembre2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            }
            break;

            case "DICIEMBRE":
            if (anioIngresado == 2022) {
                const diciembre2022Parse = JSON.parse(localStorage.getItem("diciembre2022JSON"));
                if (diciembre2022Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis"

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>DICIEMBRE 2022</h2>
                `;

                div.appendChild(mes);
                for (const empleados of diciembre2022Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                 }
            } else if (anioIngresado = 2023) {
                const diciembre2023Parse = JSON.parse(localStorage.getItem("diciembre2023JSON"));
                if (diciembre2023Parse == null) {
                    Swal.fire("No hay sueldos cargados en el mes y anio ingresados");
                  } else { 
                let prueba = document.getElementById("divis");
                if (prueba != null) {
                    prueba.remove();
                }
                const div = document.createElement("div");
                div.id = "divis";

                const mes = document.createElement("div");
                mes.innerHTML = `
                <h2>DICIEMBRE 2023</h2>
                `;

                div.appendChild(mes);

                for (const empleados of diciembre2023Parse) {
                    const contenedor = document.createElement("div");

                    contenedor.innerHTML = `
                    <h3>ID: ${empleados.id}<h3>
                    <ul>
                        <li>DNI: ${empleados.dni}</li>
                        <li>Sueldo liquidado:: ${empleados.sueldoFinal}</li>
                    </ul>`;

                    div.appendChild(contenedor);
                    document.body.appendChild(div);
                }
                }
            }else {
                Swal.fire(
                  "El anio no se encuentra registrado, o revise los datos ingresados"
                );
             }
            break;

            default: Swal.fire("Verifique los valores ingresados.\n" + "Recuerde que las nominas comienzan desde mayo 2022 en adelante")
    }
}

consultar.addEventListener("click",visualizarSueldo)