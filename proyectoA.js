//una lista de compras de un kiosco

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIVA() {
        return this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

alert("Bienvenido a La Virgencita, el kiosco de tu barrio")

const CarritoDeVentas = [];



while (true) {
    let mensaje = ""
    for (let i = 0; i < listaDeProductos.length; i++) {
        mensaje = mensaje + "\n" + listaDeProductos[i].id + " " + listaDeProductos[i].producto + " " + listaDeProductos[i].precio;
    }
    alert(mensaje)

    let productoIngresado = prompt("Ingrese el nombre Del producto que desee agregar al carrito, de lo contrario escriba ESC para salir");
    productoIngresado = productoIngresado.toUpperCase();

    if (productoIngresado === "ESC") {
        break;
    } else {
        let nombreProducto = listaDeProductos[productoIngresado].producto;
        let precioProducto = listaDeProductos[productoIngresado].precio;
        let productoVendido = false;
        CarritoDeVentas.push(new Producto(nombreProducto, precioProducto, productoVendido));

    }
}

let alerta = "";

for (const productos of CarritoDeVentas) {
    alerta = alerta + "\n" + "Producto: " + productos.nombre + ", " + "Precio: $" + productos.precio + ", " + "Precio final con IVA: $" + productos.sumarIVA() ;
}
alert(alerta)