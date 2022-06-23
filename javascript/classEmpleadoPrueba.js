class EmpleadoPrueba{
    
    constructor(e){
        this.nombre = e.nombre;
        this.apellido = e.apellido;
        this.dni = e.dni;
        this.nacimiento = e.nacimiento;
        this.localidad = e.localidad;
        this.calle = e.calle;
        this.altura = e.altura;
        this.telefono = e.telefono;
        this.puesto = e.puesto;
        this.sueldo = e.sueldo;
        this.id = e.id;
        this.fechaDeAlta = e.fechaDeAlta;
        this.fechaDeBaja = e.fechaDeBaja;
    }

    devolucion(){
        return "Nombre del empleado: "+this.nombre +"\n"+"Apellido del empleado: "+this.apellido+"\n"+"DNI: "+ this.dni+"\n"+"Fecha de nacimiento: "+this.nacimiento+"\n"+"Localidad: "+this.localidad+"\n"+"Domicilio: "+this.calle+ " N°: "+ this.altura+"\n"+"Telefono: "+this.telefono+"\n"+"Puesto: "+this.puesto+"\n"+"Sueldo: "+this.sueldo+"\n";
    }

    //Metodo get y set
    get getNombre() {
        return this.nombre;
    }

    setNombre(nombre1) {
        this.nombre = nombre1;
    }

    get getApellido() {
        return this.apellido;
    }

    setApellido(apellido1) {
        this.apellido = apellido1
    }

    get getDNI() {
        return this.dni;
    }

    setDNI(dni1) {
        this.dni = dni1;
    }

    get getNacimiento() {
        return this.nacimiento;
    }

    setNacimiento(nacimiento1) {
        this.nacimiento = nacimiento1;
    }

    get getLocalidad() {
        return this.localidad;
    }

    setLocalidad(localidad1) {
        this.localidad = localidad1;
    }

    get getCalle() {
        return this.calle;
    }

    setCalle(calle1) {
        this.calle = calle1;
    }

    get getAltura() {
        return this.altura;
    }

    setAltura(altura1) {
        this.altura = altura1;
    }

    get getTelefono() {
        return this.telefono;
    }

    setTelefono(telefono1) {
        this.telefono = telefono1;
    }

    get getPuesto() {
        return this.puesto;
    }

    setPuesto(puesto1) {
        this.puesto = puesto1;
    }

    get getSueldo() {
        return this.sueldo;
    }

    setSueldo(sueldo1) {
        this.sueldo = sueldo1;
    }

    get getId() {
        return this.id;
    }

    setId(id1) {
        this.id = id1;
    }

    get getFechaDeAlta() {
        return this.fechaDeAlta;
    }

    setFechaDeAlta(fechaDeAlta1) {
        this.fechaDeAlta = fechaDeAlta1;
    }

    get getFechaDeBaja() {
        return this.fechaDeBaja;
    }

    setFechaDeBaja(fechaDeBaja1) {
        this.fechaDeBaja = fechaDeBaja1;
    }


}