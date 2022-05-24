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
        this.vendido = true
    }
}

const CarritoDeVentas = [];

while (true) {
    let productoIngresado = prompt("Ingrese el nombre Del producto que desee agregar al carrito, de lo contrario escriba ESC para salir").toUpperCase;
    if (productoIngresado === "ESC") {
        break;
    } else {
        let nombreProducto = productoIngresado;
        let precioProducto = prompt("ingrese el precio del producto");
        let productoVendido = false;
        CarritoDeVentas.push(new Producto (nombreProducto, precioProducto, productoVendido));

    }
}

for (const productos of carrito) {
    console.log("Producto: " + productos.nombre);
    console.log("Precio: $" + productos.precio);
    console.log("Precio final con IVA: $" + productos.sumarIVA());
}