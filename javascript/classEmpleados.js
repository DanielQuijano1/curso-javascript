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

    setNombre(nombre) {
        this.nombre = nombre;
    }

    get getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido
    }

    get getDNI() {
        return this.dni;
    }

    setDNI(dni) {
        this.dni = dni;
    }

    get getNacimiento() {
        return this.nacimiento;
    }

    setNacimiento(nacimiento) {
        this.nacimiento = nacimiento;
    }

    get getLocalidad() {
        return this.localidad;
    }

   setLocalidad(localidad) {
        this.localidad = localidad;
    }

    get getCalle() {
        return this.calle;
    }

    setCalle(calle) {
        this.calle = calle;
    }

    get getAltura() {
        return this.altura;
    }

   setAltura(altura) {
        this.altura = altura;
    }

    get getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono) {
        this.telefono = telefono;
    }

    get getPuesto() {
        return this.puesto;
    }

    setPuesto(puesto) {
        this.puesto = puesto;
    }

    get getSueldo() {
        return this.sueldo;
    }

    setSueldo(sueldo) {
        this.sueldo = sueldo;
    }

    get getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    get getFechaDeAlta() {
        return this.fechaDeAlta;
    }

    setFechaDeAlta(fechaDeAlta) {
        this.fechaDeAlta = fechaDeAlta;
    }

    get getFechaDeBaja() {
        return this.fechaDeBaja;
    }

    setFechaDeBaja(fechaDeBaja) {
        this.fechaDeBaja = fechaDeBaja;
    }

}