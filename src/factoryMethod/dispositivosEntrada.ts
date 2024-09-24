//Interfaz de dispositivo
interface dispositivo {
    tipoConexion: string;
    marca: string;
    detalles(): string;
}

//clases en concreto de dispostiivos
class teclado implements dispositivo {
    tipoConexion: string;
    marca: string;

    constructor(tipoConexion: string, marca: string){
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }
    detalles(): string{
        return `Teclado ${this.marca} con conexión ${this.tipoConexion}`;
    }
}

class mouse implements dispositivo {
    tipoConexion: string;
    marca: string;

    constructor(tipoConexion: string, marca:string){
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }
    detalles(): string{
        return `Mouse ${this.marca} con conexión ${this.tipoConexion}`;
    }
}

class Scanner implements dispositivo {
    tipoConexion: string;
    marca: string;

    constructor (tipoConexion: string, marca: string) {
        this.tipoConexion = tipoConexion;
        this.marca = marca;
    }
    detalles(): string {
        return `Scanner ${this.marca} con conexión ${this.tipoConexion}`;
    }
}

//Factory para crear los dispositivos
class dispositivoEntradaFactory {
    static crearDispositivo(tipo: string, tipoConexion: string, marca: string): dispositivo | undefined {
        switch(tipo){
            case 'teclado':
                return new teclado(tipoConexion, marca);
            case 'mouse':
                return new mouse(tipoConexion, marca);
            case 'scanner':
                return new Scanner(tipoConexion, marca);
            default:
                return undefined;
        }
    }
}


// //=======TESTEO=========
// const teclado1 = dispositivoEntradaFactory.crearDispositivo('teclado', 'USB', 'Logitech');
// console.log(teclado1?.detalles());

// const mouse1 = dispositivoEntradaFactory.crearDispositivo('mouse', 'USB', 'Logitech');
// console.log(mouse1?.detalles());

// const scanner1 = dispositivoEntradaFactory.crearDispositivo('scanner', 'USB', 'Epson');
// console.log(scanner1?.detalles());

//uso de ? implica acceder a props de un objeto que podrian ser null o undefined sin lanzar error