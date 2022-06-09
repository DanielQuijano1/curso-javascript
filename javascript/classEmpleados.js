class Empleado {

    constructor(nombre, apellido, dni, nacimiento, localidad, calle, altura, telefono, puesto, sueldo, id, fechaDeAlta, fechaDeBaja) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nacimiento = nacimiento;
        this.localidad = localidad;
        this.calle = calle;
        this.altura = altura;
        this.telefono = telefono;
        this.puesto = puesto;
        this.sueldo = sueldo;
        this.id = id;
        this.fechaDeAlta = fechaDeAlta;
        this.fechaDeBaja = fechaDeBaja;
    }

    devolucion() {
        return "Nombre del Empleado: " + this.nombre + "\n" + "Apellido del Empleado: " + this.apellido + "\n" + "DNI: " + this.dni + "\n" + "Fecha de Nacimiento: " + this.nacimiento + "\n" + "Localidad: " + this.localidad + "\n" + "Domicilio: " + this.calle + "\n" + "N°: " + this.altura + "\n" + "Telefono: " + this.telefono + "\n" + "Puesto: " + this.puesto + "\n" + "Sueldo: " + this.sueldo + "\n";
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre) {
        this.nombre = nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    set setApellido(apellido) {
        this.apellido = apellido
    }

    get getDNI() {
        return this.dni;
    }

    set setDNI(dni) {
        this.dni = dni;
    }

    get getNacimiento() {
        return this.nacimiento;
    }

    set setNacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    get getLocalidad() {
        return this.localidad;
    }

    set setLocalidad(localidad) {
        this.localidad = localidad;
    }

    get getCalle() {
        return this.calle;
    }

    set setCalle(calle) {
        this.calle = calle;
    }

    get getAltura() {
        return this.altura;
    }

    set setAltura(altura) {
        this.altura = altura;
    }

    get getTelefono() {
        return this.telefono;
    }

    set setTelefono(telefono) {
        this.telefono = telefono;
    }

    get getPuesto() {
        return this.puesto;
    }

    set setPuesto(puesto) {
        this.puesto = puesto;
    }

    get getSueldo() {
        return this.sueldo;
    }

    set setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    get getId() {
        return this.id;
    }

    set setId(id) {
        this.id = id;
    }

    get getFechaDeAlta() {
        return this.fechaDeAlta;
    }

    set setFechaDeAlta(fechaDeAlta) {
        this.fechaDeAlta = fechaDeAlta;
    }

    get getFechaDeBaja() {
        return this.fechaDeBaja;
    }

    set setFechaDeBaja(fechaDeBaja) {
        this.fechaDeBaja = fechaDeBaja;
    }

}