//Interfaz de perifericos de salida
interface perifericosSalida {
    detalles(): string;
}

//Clases concretas de periféricos
class monitor implements perifericosSalida {
    resolucion: string;
    marca: string;

    constructor(resolucion: string, marca: string){
        this.resolucion = resolucion;
        this.marca = marca;
    }
    detalles(): string {
        return `Monitor ${this.marca} con resolución ${this.resolucion}`;
    }
}

class impresora implements perifericosSalida{
    tipoImpresion: string;
    marca: string;

    constructor(tipoImpresion: string, marca: string){
        this.tipoImpresion = tipoImpresion;
        this.marca = marca;
    }

    detalles(): string {
        return `Impresora ${this.marca} con tipo de impresión ${this.tipoImpresion}`;
    }
}

class proyector implements perifericosSalida {
    luminosidad: string;
    marca: string;

    constructor (luminosidad: string, marca: string){
        this.luminosidad = luminosidad;
        this.marca = marca;
    }

    detalles(): string {
        return `Proyector ${this.marca} con luminosidad ${this.luminosidad}`;
    }
}

//Factory para crear los perifericos de salida
class PerifericoSalidaFactory {
    static crearPeriferico(tipo: string, propiedad: string, marca: string): perifericosSalida | undefined {
        switch(tipo){
            case 'monitor':
                return new monitor(propiedad, marca);
            case 'impresora':
                return new impresora(propiedad, marca);
            case 'proyector':
                return new proyector(propiedad, marca);
            default:
                return undefined;
        }
    }
}


//========testeando la factory=========
const monitor1 = PerifericoSalidaFactory.crearPeriferico('monitor', '1920x1080', 'Samsung');
console.log(monitor1?.detalles());

const impresora1 = PerifericoSalidaFactory.crearPeriferico('impresora', 'laser', 'HP');
console.log(impresora1?.detalles());

const proyector1 = PerifericoSalidaFactory.crearPeriferico('proyector', '2000 lumens', 'Epson');
console.log(proyector1?.detalles());
