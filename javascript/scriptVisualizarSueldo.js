let copia = document.getElementById("copia");
let buscar = document.getElementById("empleadoBuscar");
let dolarizar = document.getElementById("dolarizarSueldo");

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((resp) => resp.json())
    .then((data) => {

        const infoDolares = data;

        let dolarOficialCompra = parseInt(infoDolares[0].casa.compra);
        let dolarOficialVenta = parseInt(infoDolares[0].casa.venta);

        let promedioOficial = (dolarOficialCompra + dolarOficialVenta) / 2;

        let dolarBlueCompra = parseInt(infoDolares[1].casa.compra);
        let dolarBlueVenta = parseInt(infoDolares[1].casa.venta);

        let promedioBlue = (dolarBlueCompra + dolarBlueVenta) / 2;

        let divDolar = document.getElementById("dolares");

        const blueSt = JSON.stringify(promedioBlue);
        const oficialSt = JSON.stringify(promedioOficial);

        localStorage.setItem("dolarBlue", blueSt);
        localStorage.setItem("dolarOficial", oficialSt);

        divDolar.innerHTML = `
        <div>Dolar Blue:</div>
        <div id="dolarBlue">${promedioBlue}</div>
        <div>Dolar Oficial</div>
        <div id="dolarOficial">${promedioOficiali}</div>
    `

    })

function buscarSueldoMensual(e) {

    e.preventDefault();

    let seleccionarMes = document.getElementById("empeladoMes").value;
    let anio = document.getElementById("empleadoAnio");
    let dniEmpleado = document.getElementById("empleadoBuscar");

    console.log(seleccionarMes);
    console.log(anio);

    switch (seleccionarMes) {

        case "Enero":
            if (anio = 2022) {
                const enero2022Parse = JSON.parse(localStorage.getItem("enero2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                } else {
                    for (i = 0; i < enero2022Parse.length; i++) {
                        if (enero2022Parse[i].dni == dniEmpleado) {
                            const sueldoSt = JSON.stringify(enero2022Parse[i].sueldoFinal);
                            localStorage.setItem("sueldoFinal", sueldoSt);

                            copia.innerHTML = `
                      <h3>ID: ${enero2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${enero2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${enero2022Parse[i].sueldoFinal}</li>
                      </ul>`;
                            break;

                        } else if (i == enero2022Parse.length - 1 && enero2022Parse[i].dni != dniEmpleado) {
                            copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                        }
                    }
                }

            } else if (anio = 2023) {
                const enero2023Parse = JSON.parse(localStorage.getItem("enero2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else { 
                for (i = 0; i < enero2023Parse.length; i++) {
                    if (enero2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(enero2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${enero2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${enero2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${enero2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == enero2023Parse.length - 1 && enero2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            }
            break;

        case "Febrero":
            if (anio = 2022) {
                const febrero2022Parse = JSON.parse(localStorage.getItem("febrero2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < febrero2022Parse.length; i++) {
                    if (febrero2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(febrero2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${febrero2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${febrero2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${febrero2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == febrero2022Parse.length - 1 && febrero2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                }
            } else if (anio = 2023) {
                const febrero2023Parse = JSON.parse(localStorage.getItem("febrero2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < febrero2023Parse.length; i++) {
                    if (febrero2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(febrero2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${febrero2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${febrero2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${febrero2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == febrero2023Parse.length - 1 && febrero2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Marzo":
            if (anio = 2022) {
                const marzo2022Parse = JSON.parse(localStorage.getItem("marzo2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < marzo2022Parse.length; i++) {
                    if (marzo2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(marzo2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${marzo2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${marzo2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${marzo2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == marzo2022Parse.length - 1 && marzo2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const marzo2023Parse = JSON.parse(localStorage.getItem("marzo2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < marzo2023Parse.length; i++) {
                    if (marzo2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(marzo2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${marzo2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${marzo2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${marzo2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == marzo2023Parse.length - 1 && marzo2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Abril":
            if (anio = 2022) {
                const abril2022Parse = JSON.parse(localStorage.getItem("abril2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < abril2022Parse.length; i++) {
                    if (abril2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(abril2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${abril2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${abril2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${abril2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == abril2022Parse.length - 1 && abril2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }

            } else if (anio = 2023) {
                const abril2023Parse = JSON.parse(localStorage.getItem("abril2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < abril2023Parse.length; i++) {
                    if (abril2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(abril2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${abril2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${abril2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${abril2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == abril2023Parse.length - 1 && abril2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            }
            break;

        case "Mayo":
            if (anio = 2022) {
                const mayo2022Parse = JSON.parse(localStorage.getItem("mayo2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < mayo2022Parse.length; i++) {
                    if (mayo2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(mayo2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${mayo2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${mayo2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${mayo2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == mayo2022Parse.length - 1 && mayo2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const mayo2023Parse = JSON.parse(localStorage.getItem("mayo2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < mayo2023Parse.length; i++) {
                    if (mayo2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(mayo2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${mayo2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${mayo2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${mayo2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == mayo2023Parse.length - 1 && mayo2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Junio":
            if (anio = 2022) {
                const junio2022Parse = JSON.parse(localStorage.getItem("junio2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < junio2022Parse.length; i++) {
                    if (junio2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(junio2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${junio2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${junio2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${junio2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == junio2022Parse.length - 1 && junio2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const junio2023Parse = JSON.parse(localStorage.getItem("junio2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < junio2023Parse.length; i++) {
                    if (junio2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(junio2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${junio2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${junio2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${junio2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == junio2023Parse.length - 1 && junio2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Julio":
            if (anio = 2022) {
                const julio2022Parse = JSON.parse(localStorage.getItem("julio2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < julio2022Parse.length; i++) {
                    if (julio2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(julio2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${julio2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${julio2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${julio2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == julio2022Parse.length - 1 && julio2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
 }
            } else if (anio = 2023) {
                const julio2023Parse = JSON.parse(localStorage.getItem("julio2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < julio2023Parse.length; i++) {
                    if (julio2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(julio2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${julio2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${julio2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${julio2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == julio2023Parse.length - 1 && julio2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Agosto":
            if (anio = 2022) {
                const agosto2022Parse = JSON.parse(localStorage.getItem("agosto2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < agosto2022Parse.length; i++) {
                    if (agosto2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(agosto2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${agosto2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${agosto2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${agosto2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == agosto2022Parse.length - 1 && agosto2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const agosto2023Parse = JSON.parse(localStorage.getItem("agosto2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < agosto2023Parse.length; i++) {
                    if (agosto2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(agosto2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${agosto2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${agosto2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${agosto2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == agosto2023Parse.length - 1 && agosto2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "septiembre":
            if (anio = 2022) {
                const septiembre2022Parse = JSON.parse(localStorage.getItem("septiembre2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < septiembre2022Parse.length; i++) {
                    if (septiembre2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(septiembre2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${septiembre2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${septiembre2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${septiembre2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == septiembre2022Parse.length - 1 && septiembre2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const septiembre2023Parse = JSON.parse(localStorage.getItem("septiembre2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < septiembre2023Parse.length; i++) {
                    if (septiembre2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(septiembre2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${septiembre2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${septiembre2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${septiembre2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == septiembre2023Parse.length - 1 && septiembre2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Octubre":
            if (anio = 2022) {
                const octubre2022Parse = JSON.parse(localStorage.getItem("octubre2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < octubre2022Parse.length; i++) {
                    if (octubre2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(octubre2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${octubre2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${octubre2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${octubre2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == octubre2022Parse.length - 1 && octubre2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const octubre2023Parse = JSON.parse(localStorage.getItem("octubre2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < octubre2023Parse.length; i++) {
                    if (octubre2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(octubre2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${octubre2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${octubre2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${octubre2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == octubre2023Parse.length - 1 && octubre2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
              }
            break;

        case "Noviembre":
            if (anio = 2022) {
                const noviembre2022Parse = JSON.parse(localStorage.getItem("noviembre2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < noviembre2022Parse.length; i++) {
                    if (noviembre2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(noviembre2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${noviembre2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${noviembre2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${noviembre2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == noviembre2022Parse.length - 1 && noviembre2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
 }
            } else if (anio = 2023) {
                const noviembre2023Parse = JSON.parse(localStorage.getItem("noviembre2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < noviembre2023Parse.length; i++) {
                    if (noviembre2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(noviembre2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${noviembre2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${noviembre2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${noviembre2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == noviembre2023Parse.length - 1 && noviembre2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

        case "Diciembre":
            if (anio = 2022) {
                const diciembre2022Parse = JSON.parse(localStorage.getItem("diciembre2022JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < diciembre2022Parse.length; i++) {
                    if (diciembre2022Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(diciembre2022Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${diciembre2022Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${diciembre2022Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${diciembre2022Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == diciembre2022Parse.length - 1 && diciembre2022Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
                 }
            } else if (anio = 2023) {
                const diciembre2023Parse = JSON.parse(localStorage.getItem("diciembre2023JSON"));
                if (enero2022Parse == null) {
                    wal.fire("No se encuentra cargado el sueldo en el mes seleccionado");
                }else{ 
                for (i = 0; i < diciembre2023Parse.length; i++) {
                    if (diciembre2023Parse[i].dni == dniEmpleado) {
                        const sueldoSt = JSON.stringify(diciembre2032Parse[i].sueldoFinal);
                        localStorage.setItem("sueldoFinal", sueldoSt);

                        copia.innerHTML = `
                      <h3>ID: ${diciembre2023Parse[i].id}<h3>
                      <ul>
                          <li>DNI: ${diciembre2023Parse[i].dni}</li>
                          <li id="sueldoFinal">Sueldo final: ${diciembre2023Parse[i].sueldoFinal}</li>
                      </ul>`;

                        break;
                    } else if (i == diciembre2023Parse.length - 1 && diciembre2023Parse[i].dni != dniEmpleado) {
                        copia.innerHTML = `
                <h3>El empleado con DNI: ${dniEmpleado} no se encuentra cargado en ese mes o en la nomina de empleados<h3>`;
                    }
                }
            }
             }
            break;

    }


}

function dolarizarTodo(e) {

    e.preventDefault();

    let blue = JSON.parse(localStorage.getItem("dolarBlue"));
    let oficial = JSON.parse(localStorage.getItem("dolarOficial"));
    let sueldoFinal = JSON.parse(localStorage.getItem("sueldoFinal"));
    let conversionDolar = document.getElementById("conversion");
    let sueldoBlue = (sueldoFinal / blue).toFixed(2);
    let sueldoOficial = (sueldoFinal / oficial).toFixed(2);

    conversionDolar.innerHTML = `
    <ul>
        <li>Sueldo en dolar oficial: ${sueldoOficial}</li>
        <li>Sueldo en dolar blue: ${sueldoBlue}</li>
    <ul>
    `
}

buscar.addEventListener("click", buscarSueldoMensual);
dolarizar.addEventListener("click", dolarizarTodo);