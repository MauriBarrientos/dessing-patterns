//facturacion antigua
class FacturacionVieja {
    crearFactura(id: number, monto: number): string {
        return `Factura creada con ID: ${id}, Monto: ${monto}`;
    }

    obtenerFactura(id: number): string {
        return `Factura obtenida con ID: ${id}`;
    }
}

//interfaz de la nueva facturacion
interface IFacturacion {
    generarFactura(id: number, monto: number): string;
    consultarFactura(id: number): string;
}

// Clase Adaptador que convierte la nueva interfaz a la antigua
class AdaptadorFacturacion implements IFacturacion {
    private facturacionVieja: FacturacionVieja; //sistema antiguo 

    constructor() {
        this.facturacionVieja = new FacturacionVieja();
    }

    generarFactura(id: number, monto: number): string {
        //uso de un metodo del sistem antiguo
        return this.facturacionVieja.crearFactura(id, monto);
    }

    consultarFactura(id: number): string {
        //metodo del sistema nuevo
        return this.facturacionVieja.obtenerFactura(id);
    }
}

// ========== TESTEO ==========

const facturacionAdaptada = new AdaptadorFacturacion();

//funcion generar factura que proviene de la vieja crear factura
console.log(facturacionAdaptada.generarFactura(123, 500)); 

//funcion consultar factura que proviene de la vieja obtener factura
console.log(facturacionAdaptada.consultarFactura(123)); 
