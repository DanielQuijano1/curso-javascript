//Usuario con contraseña para ingresar ala pagina ya que aun no cuento con un servidor xD
let usuario1 = new Usuario("Daniel","12345")

//Array para guardar los usuarios y constrasenias
const listaUsuarios = []

//Pusheo en primer instancia los prestablecidos
listaUsuarios.push(usuario1);

//Transformo el array en tipo string para guardarlos en el localstorage
const listaUsuariosJSON = JSON.stringify(listaUsuarios);

//Verifica si ya esta creada la clave
let verifica = JSON.parse(localStorage.getItem("listaUsuariosJson"));

//Verifica si no esta creada la clave
if (verifica == null){
    //almaceno el localstorage ya en formato string
    localStorage.setItem("listaUsuariosJSON",listaUsuariosJSON)
}

//Variable para vincular el elemento id ocn login
let logear = document.getElementById("login")


//funcion para validar datos ingresados
function validacion(e){

    e.preventDefault();

    let ingreso = document.getElementById("user").value;
    let clave = document.getElementById("pass").value;

    const usuarioParse = JSON.parse(localStorage.getItem("listaUsuariosJSON"));

for (i=0; i<usuarioParse[i].usuario.length; i++){
    if (ingreso == usuarioParse[i].user && clave == usuarioParse[i].pass){

        alert("Usuario y Contrasenia Correctos, Bienvenido");
        location.href = "paginas/inicio.html"
        break;
    }else if(i == ((usuarioParse.length)-1) && ingreso != usuarioParse[i].usuario && clave != usuarioParse[i].pass){
        alert("Usuario y Contrasenia Incorrectos")
    }
}
}

logear.addEventListener("click",validacion)
