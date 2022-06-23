class Asistencias{
    constructor(id,dni,anio,mes,asistencia,tardes,horasExtras,presentismo,sueldoFinal){
        this.id = id;
        this.dni = dni;
        this.anio = anio;
        this.mes = mes;
        this.asistencia = asistencia;
        this.tardes = tardes;
        this.horasExtras = horasExtras;
        this.presentismo = presentismo;
        this.sueldoFinal = sueldoFinal;
    }

    get getSueldo(){
        return sueldo;
    }

    get getId(){
        return this.id;
    }

    get getDNI(){
        return this.dni;
    }

    get getAnio(){
        return this.anio;
    }

    get getMes(){
        return this.mes;
    }

    get getAsistencia(){
        return this.asistencias;
    }

    get getTardes(){
        return this.tardes;
    }

    get getHorasExtras(){
        return this.horasExtras;
    }

    get getPresentismo(){
        return this.presentismo;
    }

    get getSueldoFinal(){
        return this.sueldoFinal;
    }
}