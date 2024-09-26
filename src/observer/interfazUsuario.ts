//interfaz del observador
interface Observador {
    actualizar(inventario: string[]): void;
}

//Clase del observador
class InterfazUsuario implements Observador {
    private id: string;

    constructor(id: string) {
        this.id = id;
    }

    actualizar(inventario: string[]): void {
        console.log(`InterfazUsuario ${this.id}: Inventario actualizado: [${inventario.join(', ')}]`);
    }
}

//clases suscriptoras
class Inventario {
    private observadores: Observador[] = [];
    private equipos: string[] = [];

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    agregarEquipo(equipo: string): void {
        this.equipos.push(equipo);
        console.log(`Equipo ${equipo} agregado al inventario.`);
        this.notificarObservadores();
    }

    eliminarEquipo(equipo: string): void {
        this.equipos = this.equipos.filter(e => e !== equipo);
        console.log(`Equipo ${equipo} eliminado del inventario.`);
        this.notificarObservadores();
    }

    modificarEquipo(viejoEquipo: string, nuevoEquipo: string): void {
        const indice = this.equipos.indexOf(viejoEquipo);
        if (indice > -1) {
            this.equipos[indice] = nuevoEquipo;
            console.log(`Equipo ${viejoEquipo} modificado a ${nuevoEquipo}.`);
            this.notificarObservadores();
        }
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.equipos));
    }
}

// ========= TESTEO ==========

//instancias de InterfazUsuario
const interfaz1 = new InterfazUsuario('1');
const interfaz2 = new InterfazUsuario('2');

//inventario
const inventario = new Inventario();

// observadores (interfaces de usuario) al inventario
inventario.agregarObservador(interfaz1);
inventario.agregarObservador(interfaz2);

// Modificar el inventario y observar las notificaciones en tiempo real
inventario.agregarEquipo('Monitor');
inventario.agregarEquipo('Impresora');
inventario.modificarEquipo('Impresora', 'Impresora Láser');
inventario.eliminarEquipo('Monitor');
