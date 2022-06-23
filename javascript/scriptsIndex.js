//Usuario con contraseña para ingresar ala pagina ya que aun no cuento con un servidor xD
let usuario1 = new Usuario("Daniel", "12345")

//Array para guardar los usuarios y constrasenias
const listaUsuarios = [];

//Pusheo en primer instancia los prestablecidos
listaUsuarios.push(usuario1);

//Transformo el array en tipo string para guardarlos en el localstorage
const listaUsuariosJSON = JSON.stringify(listaUsuarios);

//Verifica si ya esta creada la clave
let verifica = JSON.parse(localStorage.getItem("listaUsuariosJSON"));

let respuesta = "Eli";

//Verifica si no esta creada la clave
verifica == null && localStorage.setItem("listaUsuariosJSON", listaUsuariosJSON);

//Variable para vincular el elemento id ocn login
let logear = document.getElementById("login")

let cambiar = document.getElementById("restart")

function restablecer() {
    Swal.fire({
        title: "Está seguro desea añadir un nuevo usuario y contraseña?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, seguro",
        cancelButtonText: "No, no quiero",

    }).then((result) => {

        if (result.isConfirmed) {
            //Si la persona confirma que quiere restablecer los datos se ejecuta el ciclo if
            Swal.fire(
                "Para restrablecer usuario y contrasenia , responda la siguiente pregunta de seguridad"
            );

            let pregunta = prompt("¿Que nombre tenia su primer mascota?");

            //Si responde correctamente se le asigna nuevos valores al usuario y contrasenia
            if (pregunta == respuesta) {
                usuario = prompt(
                    "Ingrese su nuevo nombre de usuario \n (Minimo 7 caracteres)"
                );

                contrasenia = prompt(
                    "Ingrese su nueva contrasenia \n (Minimo 7 caracteres)"
                );

                let repetirContrasenia = prompt("Repita su contrasenia"); //Se solicita que confirme su contrasenia

                //Variable que da la longitud de el usuario
                let uLargo = parseInt(usuario.length);

                //Variable que da la longitud de la contrasenia
                let cLargo = parseInt(contrasenia.length);

                if (
                    contrasenia == repetirContrasenia &&
                    usuario != "" &&
                    contrasenia != "" &&
                    cLargo > 6 &&
                    uLargo > 6
                ) {
                    //Se verifica que usuario y contrasenia no sean vacios,que la confirmacion de contrasenia coincida, y que tengan minimo 7 caracteres

                    //Se crea el objeto perteneciente a la clase User
                    let nuevoUsuario = new Usuario(usuario, contrasenia);

                    const listaUsuarioParse = JSON.parse(
                        localStorage.getItem("listaUsuariosJson")
                    );

                    //Pusheo el nuevo objeto creado
                    listaUsuarioParse.push(nuevoUsuario);

                    //Transformo a String
                    const listaUsuarioSt = JSON.stringify(listaUsuarioParse);

                    //Almaceno en el Local Storage con la misma clave
                    localStorage.setItem("listaUsuariosJson", listaUsuarioSt);

                    //Alerta de creacion correcta de usuario y contraseña
                    Swal.fire("Nuevo usuario y contraseña creados");

                } else {

                    Swal.fire(

                        "Su usuario y contraseña no cumple con los requisito requeridos"
                    );
                }
            } else {
                //En caso que la respuesta a la pregunta secreta sea incorrecta sale alerta de ADIOS

                Swal.fire(
                    "Respuesta incorrecta, intente nuevamente mas tarde"
                );
            }
        }
    });
}


//funcion para validar datos ingresados
function validacion(e) {

    e.preventDefault();

    let ingreso = document.getElementById("user").value;
    let clave = document.getElementById("pass").value;

    const usuarioParse = JSON.parse(localStorage.getItem("listaUsuariosJSON"));

    for (i = 0; i < usuarioParse.length; i++) {
        if (ingreso == usuarioParse[i].user && clave == usuarioParse[i].pass) {
            Swal.fire({
                title: "Bienvenido",
                text: "Usuario y contraseña correctos",
                icon: "success",
                showconfirmButtonText: "Ok",
            }).then((result) => {
                if (result.isConfirmed) {
                    location.href = "inicio.html";
                }
            });

            break;

        } else if (
            i == usuarioParse.length - 1 &&
            ingreso != usuarioParse[i].user &&
            clave != usuarioParse[i].pass
        ) {
            Swal.fire({
                title: "Error",
                text: "Usuario y contraseña incorrectos",
                icon: "error",
                showconfirmButtonText: "Ok",
            });
        }
    }
}

function restart() {
    document.querySelector("form").reset();
}

logea.addEventListener("click", validacion);

logear.addEventListener("click", validacion)
