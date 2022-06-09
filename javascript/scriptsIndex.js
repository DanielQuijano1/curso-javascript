//Usuario con contraseña para ingresar ala pagina ya que aun no cuento con un servidor xD
let usuario = "Daniel123"
let contrasenia = "12345"

//Variable para vincular el elemento id ocn login
let logear = document.getElementById("login")

//funcion para validar datos ingresados
function validacion(e){

    e.preventDefault();

    let ingreso = document.getElementById("user").value;
    let clave = document.getElementById("pass").value;

    if (ingreso == usuario && clave == contrasenia){

        alert("Usuario y Contrasenia Correctos, Bienvenido");
        location.href = "paginas/inicio.html"

    }else{
        alert("Usuario y Contrasenia Incorrectos")
    }
}

logear.addEventListener("click",validacion)
