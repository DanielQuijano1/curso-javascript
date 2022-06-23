//año 2022
const marzo2022 = [];
const abril2022 = [];
const mayo2022 = [];
const junio2022 = [];
const julio2022 = [];
const agosto2022 = [];
const septiembre2022 = [];
const octubre2022 = [];
const noviembre2022 = [];
const diciembre2022 = [];

//año 2023
const marzo2023 = [];
const abril2023 = [];
const mayo2023 = [];
const junio2023 = [];
const julio2023 = [];
const agosto2023 = [];
const septiembre2023 = [];
const octubre2023 = [];
const noviembre2023 = [];
const diciembre2023 = [];


const array1 = [""];

let verificars = document.getElementById("verificarEmpleado");
let cargarAsistencia = document.getElementById("cargarAsistencias");

function verificador(e) {
    //evita el evento por default
    e.preventDefault();

    //toma el valor del input verificars y lo asigna a una variable
    let idDni = document.getElementById("buscarEmpleado").value;

    const listaEmpleadoParse = JSON.parse(localStorage.getItem(listaEmpleadosJSON));

    let busquedaPorID = listaEmpleadoParse.some((empleado) => empleado.id === idDni);

    let busquedaPorDNI = listaEmpleadoParse.some((empleado) => empleado.dni === idDni);

    busquedaPorID || busquedaPorDNI ? Swal.fire("El empleado se encuentra registrado, puede continuar") : Swal.fire("El empleado no se encuentra cargago en la nomina, primero debe cargarlo en la nomina")

}

function cargarCompletarDatos(e) {

    let idDni = document.getElementById(buscarEmpleado).value;

    const listaEmpleadoParse = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));

    let busquedaPorID = listaEmpleadoParse.some((empleado) => empleado.id === idDni);
    let busquedaPorDNI = listaEmpleadoParse.some((empleado) => empleado.dni === idDni);
    e.preventDefault();

    if (busquedaPorID || busquedaPorDNI) {
        busquedaIdDni(busquedaPorDNI, busquedaPorID, idDni);

        let cargarMes = document.getElementById("empleadoMes").value;
        let cargarAusentes = document.getElementById("empleadoAusentes").value;
        let cargarTarde = document.getElementById("empleadoTardes").value;
        let cargarHorasExtras = document.getElementById("empleadoHorasExtras").value;
        let cargarAnio = document.getElementById("empleadoAnio").value;
        let idEfimero = listaEfimera[0].id;
        let dniEfimero = listaEfimera[0].dni;
        let sueldoEfimero = listaEfimera[0].sueldo;
        let empleadoPresentismo = 0;

        if (cargarTarde < 3 && cargarAusentes == 0) {
            empleadoPresentismo = 4000;
        }

        if (validarTodo(cargarTarde) && validarTodo(cargarHorasExtras) && validarTodo(cargarAusentes)) {
            Swal.fire("los datos son correctos y cumplen su formato")

            let sueldoFinal = parseInt(sueldoEfimero) + parseInt(empleadoPresentismo) + ((parseInt(sueldoEfimero) / 30 / 8) * parseInt(cargarHorasExtras).toFixed(2));
            let empleadoAsistencia = new Asistencias(idEfimero, dniEfimero, sueldoEfimero, cargarAnio, cargarMes, cargarAusentes, cargarTarde, cargarHorasExtras, empleadoPresentismo, sueldoFinal);

            array1[0] = empleadoAsistencia;

            if (cargarAnio == 2022) {
                listadoMes2022(cargarMes);
            } else if (cargarAnio == 2023) {
                listadoMes2023(cargarMes);
            }
        } else {
            Swal.fire("Revise los Datos Cargados")
        }
    } else {
        Swal.fire("El empleado que quiere actualizar no se encuentra en la nomina")
    }
}

function busquedaIdDni(a, b, c) {

    if (a) {
        const listaEmpleadoParseEfimero = JSON.parse(localStorage.getItem("listaEmpleadosJSON"));
        const listaPrevia = listaEmpleadoParseEfimero.filter((empleado) => empleado.dni.includes(c));
        listaEfimera = listaPrevia.map(elemento => {
            return {
                id: elemento.id,
                dni: elemento.dni,
                sueldo: elemento.sueldo
            }
        })
    } else if (b) {
        const listaPrevia = listaEmpleadoParseEfimero((empleado) => empleado.id.includes(c));
        listaEfimera = listaPrevia.map(elemento => {
            return {
                id: elemento.id,
                dni: elemento.id,
                sueldo: elemento.sueldo
            }
        })
    }
}

function listadoMes2022(mes) {
    switch (mes) {
        case "Enero":
            const enero2022Parse = JSON.parse(localStorage.getItem("enero2022JSON"));
            if (enero2022Parse == null) {
                enero2022.push(array1);
                const enero2022st = JSON.stringify(enero2022);
                localStorage.setItem("enero2022JSON",enero2022st);
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < enero2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == enero2022Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        enero2022Parse.push(array1[0]);
                        const enero2022st = JSON.stringify(enero2022Parse);
                        localStorage.setItem("enero2022JSON", enero2022st);
                    }
                }
            }
            break;

        case "Febrero":
            const febrero2022Parse = JSON.parse(localStorage.getItem("febrero2022JSON"));
            if (febrero2022Parse == null) {
                febrero2022Parse.push(array1[0]);
                const febrero2022st = JSON.stringify(febrero2022);
                localStorage.setItem("febrero2022JSON",febrero2022st);
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < febrero2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == febrero2022Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        febrero2022Parse.push(array1[0]);
                        const febrero2022st = JSON.stringify(febrero2022Parse);
                        localStorage.setItem("febrero2022JSON", febrero2022st);
                    }
                }
            }
            break;

        case "Marzo":
            const marzo2022Parse = JSON.parse(localStorage.getItem("marzo2022JSON"));
            if (marzo2022Parse == null) {
                marzo2022Parse.push(array1[0]);
                const marzo2022st = JSON.stringify(marzo2022);
                localStorage.setItem("marzo2022JSON",marzo2022st);
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < marzo2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == marzo2022Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        marzo2022Parse.push(array1[0]);
                        const marzo2022st = JSON.stringify(marzo2022Parse);
                        localStorage.setItem("marzo2022JSON", marzo2022st);
                    }
                }
            }
            break;

        case "Abril":
            const abril2022Parse = JSON.parse(localStorage.getItem("abril2022JSON"));
            if (abril2022Parse == null) {
                abril2022Parse.push(array1[0]);
                const abril2022st = JSON.stringify(abril2022);
                localStorage.setItem("abril2022JSON",abril2022st);
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < abril2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == abril2022Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        abril2022Parse.push(array1[0]);
                        const abril2022st = JSON.stringify(abril2022Parse);
                        localStorage.setItem("abril2022JSON", abril2022st);
                    }
                }
            }
            break;

        case "Mayo":
            const mayo2022Parse = JSON.parse(localStorage.getItem("mayo2022JSON"));
            if (mayo2022Parse == null) {
                mayo2022Parse.push(array1[0]);
                const mayo2022st = JSON.stringify(mayo2022);
                localStorage.setItem("mayo2022JSON",mayo2022st);
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < mayo2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == mayo2022Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        mayo2022Parse.push(array1[0]);
                        const mayo2022st = JSON.stringify(mayo2022Parse);
                        localStorage.setItem("mayo2022JSON", mayo2022st);
                    }
                }
            }
            break;
        case "Junio":
            const junio2022Parse = JSON.parse(localStorage.getItem("junio2022JSON"));
            if (junio2022Parse == null) {
                junio2022.push(array1[0]);
                const junio2022st = JSON.stringify(junio2022);
                localStorage.setItem("junio2022JSON", junio2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < junio2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == junio2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        junio2022Parse.push(array1[0]);
                        const junio2022st = JSON.stringify(junio2022Parse);
                        localStorage.setItem("junio2022JSON", junio2022st);
                    }
                }
            }
            break;
        case "Julio":
            const julio2022Parse = JSON.parse(localStorage.getItem("julio2022JSON"));
            if (julio2022Parse == null) {
                julio2022.push(array1[0]);
                const julio2022st = JSON.stringify(julio2022);
                localStorage.setItem("julio2022JSON", julio2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < julio2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == julio2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        julio2022Parse.push(array1[0]);
                        const julio2022st = JSON.stringify(julio2022Parse);
                        localStorage.setItem("julio2022JSON", julio2022st);
                    }
                }
            }
            break;
        case "Agosto":
            const agosto2022Parse = JSON.parse(localStorage.getItem("agosto2022JSON"));
            if (agosto2022Parse == null) {
                agosto2022.push(array1[0]);
                const agosto2022st = JSON.stringify(agosto2022);
                localStorage.setItem("agosto2022JSON", agosto2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < agosto2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == agosto2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        agosto2022Parse.push(array1[0]);
                        const agosto2022st = JSON.stringify(agosto2022Parse);
                        localStorage.setItem("agosto2022JSON", agosto2022st);
                    }
                }
            }
            break;
        case "Septiembre":
            const septiembre2022Parse = JSON.parse(localStorage.getItem("septiembre2022JSON"));
            if (septiembre2022Parse == null) {
                septiembre2022.push(array1[0]);
                const septiembre2022st = JSON.stringify(septiembre2022);
                localStorage.setItem("septiembre2022JSON", septiembre2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < septiembre2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == septiembre2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        septiembre2022Parse.push(array1[0]);
                        const septiembre2022st = JSON.stringify(septiembre2022Parse);
                        localStorage.setItem("septiembre2022JSON", septiembre2022st);
                    }
                }
            }
            break;
        case "Octubre":
            const octubre2022Parse = JSON.parse(localStorage.getItem("octubre2022JSON"));
            if (octubre2022Parse == null) {
                octubre2022.push(array1[0]);
                const octubre2022st = JSON.stringify(octubre2022);
                localStorage.setItem("octubre2022JSON", octubre2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < octubre2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == octubre2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        octubre2022Parse.push(array1[0]);
                        const octubre2022st = JSON.stringify(octubre2022Parse);
                        localStorage.setItem("octubre2022JSON", octubre2022st);
                    }
                }
            }
            break;
        case "Noviembre":
            const noviembre2022Parse = JSON.parse(localStorage.getItem("noviembre2022JSON"));
            if (noviembre2022Parse == null) {
                noviembre2022.push(array1[0]);
                const noviembre2022st = JSON.stringify(noviembre2022);
                localStorage.setItem("noviembre2022JSON", noviembre2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < noviembre2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == noviembre2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        noviembre2022Parse.push(array1[0]);
                        const noviembre2022st = JSON.stringify(noviembre2022Parse);
                        localStorage.setItem("noviembre2022JSON", noviembre2022st);
                    }
                }
            }
            break;
        case "Diciembre":
            const diciembre2022Parse = JSON.parse(localStorage.getItem("diciembre2022JSON"));
            if (diciembre2022Parse == null) {
                diciembre2022.push(array1[0]);
                const diciembre2022st = JSON.stringify(diciembre2022);
                localStorage.setItem("diciembre2022JSON", diciembre2022st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < diciembre2022Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == diciembre2022Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        diciembre2022Parse.push(array1[0]);
                        const diciembre2022st = JSON.stringify(diciembre2022Parse);
                        localStorage.setItem("diciembre2022JSON", diciembre2022st);
                    }
                }
            }
            break;
        default: Swal.fire("El mes no esta en curso")
    }
}

function listadoMes2023(mes) {
    switch (mes) {
        case "Enero":
            const enero2023Parse = JSON.parse(localStorage.getItem("enero2023JSON"));
            if (enero2023Parse == null) {
                enero2023.push(array1[0]);
                const enero2023st = JSON.stringify(enero2023);
                localStorage.setItem("enero2023JSON", enero2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < enero2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == enero2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        enero2023Parse.push(array1[0]);
                        const enero2023st = JSON.stringify(enero2023Parse);
                        localStorage.setItem("enero2023JSON", enero2023st);
                    }
                }
            }
            break;
        case "Febrero":
            const febrero2023Parse = JSON.parse(localStorage.getItem("febrero2023JSON"));
            if (febrero2023Parse == null) {
                febrero2023.push(array1[0]);
                const febrero2023st = JSON.stringify(febrero2023);
                localStorage.setItem("febrero2023JSON", febrero2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < febrero2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == febrero2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        febrero2023Parse.push(array1[0]);
                        const febrero2023st = JSON.stringify(febrero2023Parse);
                        localStorage.setItem("febrero2023JSON", febrero2023st);
                    }
                }
            }
            break;
        case "Marzo":
            const marzo2023Parse = JSON.parse(localStorage.getItem("marzo2023JSON"));
            if (marzo2023Parse == null) {
                marzo2023.push(array1[0]);
                const marzo2023st = JSON.stringify(marzo2023);
                localStorage.setItem("marzo2023JSON", marzo2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < marzo2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == marzo2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        marzo2023Parse.push(array1[0]);
                        const marzo2023st = JSON.stringify(marzo2023Parse);
                        localStorage.setItem("marzo2023JSON", marzo2023st);
                    }
                }
            }
            break;
        case "Abril":
            const Abril2023Parse = JSON.parse(localStorage.getItem("Abril2023JSON"));
            if (Abril2023Parse == null) {
                Abril2023.push(array1[0]);
                const Abril2023st = JSON.stringify(Abril2023);
                localStorage.setItem("Abril2023JSON", Abril2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < Abril2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == Abril2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        Abril2023Parse.push(array1[0]);
                        const Abril2023st = JSON.stringify(Abril2023Parse);
                        localStorage.setItem("Abril2023JSON", Abril2023st);
                    }
                }
            }
            break;
        case "Mayo":
            const mayo2023Parse = JSON.parse(localStorage.getItem("mayo2023JSON"));
            if (mayo2023Parse == null) {
                mayo2023Parse(array1[0]);
                const mayo2023st = JSON.stringify(mayo2023);
                localStorage.setItem("mayo2023JSON,mayo2023st");
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < mayo2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmepleado").value;
                    if (dniABuscar == mayo2023Parse[i].dni) {
                        Swal.fire("el empleado ya se encuentra cargado en el mes")
                    } else {
                        mayo2023Parse.push(array1[0]);
                        const mayo2023st = JSON.stringify(mayo2023Parse);
                        localStorage.setItem("mayo2023JSON", mayo2023st);
                    }
                }
            }
            break;
        case "Junio":
            const junio2023Parse = JSON.parse(localStorage.getItem("junio2023JSON"));
            if (junio2023Parse == null) {
                junio2023.push(array1[0]);
                const junio2023st = JSON.stringify(junio2023);
                localStorage.setItem("junio2023JSON", junio2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < junio2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == junio2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        junio2023Parse.push(array1[0]);
                        const junio2023st = JSON.stringify(junio2023Parse);
                        localStorage.setItem("junio2023JSON", junio2023st);
                    }
                }
            }
            break;
        case "Julio":
            const julio2023Parse = JSON.parse(localStorage.getItem("julio2023JSON"));
            if (julio2023Parse == null) {
                julio2023.push(array1[0]);
                const julio2023st = JSON.stringify(julio2023);
                localStorage.setItem("julio2023JSON", julio2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < julio2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == julio2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        julio2023Parse.push(array1[0]);
                        const julio2023st = JSON.stringify(julio2023Parse);
                        localStorage.setItem("julio2023JSON", julio2023st);
                    }
                }
            }
            break;
        case "Agosto":
            const agosto2023Parse = JSON.parse(localStorage.getItem("agosto2023JSON"));
            if (agosto2023Parse == null) {
                agosto2023.push(array1[0]);
                const agosto2023st = JSON.stringify(agosto2023);
                localStorage.setItem("agosto2023JSON", agosto2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < agosto2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == agosto2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        agosto2023Parse.push(array1[0]);
                        const agosto2023st = JSON.stringify(agosto2023Parse);
                        localStorage.setItem("agosto2023JSON", agosto2023st);
                    }
                }
            }
            break;
        case "Septiembre":
            const septiembre2023Parse = JSON.parse(localStorage.getItem("septiembre2023JSON"));
            if (septiembre2023Parse == null) {
                septiembre2023.push(array1[0]);
                const septiembre2023st = JSON.stringify(septiembre2023);
                localStorage.setItem("septiembre2023JSON", septiembre2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < septiembre2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == septiembre2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        septiembre2023Parse.push(array1[0]);
                        const septiembre2023st = JSON.stringify(septiembre2023Parse);
                        localStorage.setItem("septiembre2023JSON", septiembre2023st);
                    }
                }
            }
            break;
        case "Octubre":
            const octubre2023Parse = JSON.parse(localStorage.getItem("octubre2023JSON"));
            if (octubre2023Parse == null) {
                octubre2023.push(array1[0]);
                const octubre2023st = JSON.stringify(octubre2023);
                localStorage.setItem("octubre2023JSON", octubre2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < octubre2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == octubre2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        octubre2023Parse.push(array1[0]);
                        const octubre2023st = JSON.stringify(octubre2023Parse);
                        localStorage.setItem("octubre2023JSON", octubre2023st);
                    }
                }
            }
            break;
        case "Noviembre":
            const noviembre2023Parse = JSON.parse(localStorage.getItem("noviembre2023JSON"));
            if (noviembre2023Parse == null) {
                noviembre2032.push(array1[0]);
                const noviembre2023st = JSON.stringify(noviembre2023);
                localStorage.setItem("noviembre2023JSON", noviembre2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < noviembre2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == noviembre2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        noviembre2023Parse.push(array1[0]);
                        const noviembre2023st = JSON.stringify(noviembre2023Parse);
                        localStorage.setItem("noviembre2023JSON", noviembre2023st);
                    }
                }
            }
            break;
        case "Diciembre":
            const diciembre2023Parse = JSON.parse(localStorage.getItem("diciembre2023JSON"));
            if (diciembre2023Parse == null) {
                diciembre2023.push(array1[0]);
                const diciembre2023st = JSON.stringify(diciembre2023);
                localStorage.setItem("diciembre2023JSON", diciembre2023st)
                Swal.fire("Carga Exitosa")
            } else {
                for (i = 0; i < diciembre2023Parse.length; i++) {
                    let dniABuscar = document.getElementById("buscarEmpleado").value;
                    if (dniABuscar == diciembre2023Parse[i].dni) {
                        Swal.fire("El Empleado ya se encuentra cargado en el mes")
                    } else {
                        diciembre2023Parse.push(array1[0]);
                        const diciembre2022st = JSON.stringify(diciembre2023Parse);
                        localStorage.setItem("diciembre2023JSON", diciembre2023st);
                    }
                }
            }
            break;
    }
}

function validarTodo(dato) {
    if (dato == "" || isNaN(dato)) {
        return false;
    } else if (dato != "" && !isNaN(dato)) {
        return true;
    }
}

verificars.addEventListener("click", verificador);
cargarAsistencia.addEventListener("click", cargarCompletarDatos);