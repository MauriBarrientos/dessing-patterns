//interfaz del observador
interface observador{
    actualizar(nombreEquipo: string) : void;
}

//clase concreta del observador
class deptoMantenimiento implements observador {
    private nombre: string;

    constructor (nombre:string){
        this.nombre = nombre;
    }

    actualizar(nombreEquipo: string): void{
        console.log(`${this.nombre} ha sido notificado de que el equipo ${nombreEquipo} necesita mantenimiento`);
    }
}

//clase que actua como objeto (observable)
class equipo {
    private observadores: observador[]= [];
    private tiempoUso: number = 0; 

    constructor (public nombre: string, public tipo: string, public estado: string){}

    agregarObservador(observador: observador): void{
        this.observadores.push(observador);
    }
    eliminarObservador(observador: observador) : void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    usar(tiempo: number): void {
        this.tiempoUso += tiempo;
        console.log(`El equipo ${this.nombre} ha sido usado por ${this.tiempoUso} horas`);
        this.verificarNecesidadMantenimiento();
    }

    private verificarNecesidadMantenimiento(): void {
        if (this.tiempoUso > 100) {
            this.notificarObservadores();
        }
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.nombre));
    }
}

// Uso del patrón Observer
const departamentoMantenimiento = new deptoMantenimiento('Mantenimiento General');
const equipo1 = new equipo('Laptop HP', 'Laptop', 'Operativo');

equipo1.agregarObservador(departamentoMantenimiento);

// Simular el uso del equipo
equipo1.usar(50);  // No debería notificar
equipo1.usar(60);  // Debería notificar, ya que alcanza 110 horas