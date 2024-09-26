//api externa del proveedor
class ProveedorExternoAPI {
    fetchProductos(): any[] {
        //ejemplo de datos obtenidos de la api 
        return [
            { id: 'p1', nombre: 'Producto 1', stock: 100 },
            { id: 'p2', nombre: 'Producto 2', stock: 50 }
        ];
    }

    updateStock(id: string, cantidad: number): string {
        //ejemplo de actualizacion de stock
        return `Stock del producto con ID ${id} actualizado a ${cantidad} unidades.`;
    }
}

//interfaz del sistema inventario 
interface IProveedor {
    obtenerProductos(): { codigo: string, nombre: string, cantidad: number }[];
    actualizarInventario(codigo: string, cantidad: number): string;
}

//clase del adaptador que convierte la interfaz del sistema inventario a la api externa
class AdaptadorProveedor implements IProveedor {
    private proveedorExterno: ProveedorExternoAPI;

    constructor() {
        this.proveedorExterno = new ProveedorExternoAPI();
    }

    //adaptar el metodo fetchProductos de la API externa
    obtenerProductos(): { codigo: string, nombre: string, cantidad: number }[] {
        const productosExterno = this.proveedorExterno.fetchProductos();
        //convertir el formato de la API externa al formato del sistema de inventario
        return productosExterno.map(prod => ({
            codigo: prod.id,
            nombre: prod.nombre,
            cantidad: prod.stock
        }));
    }

    //adaptar el método updateStock de la API externa
    actualizarInventario(codigo: string, cantidad: number): string {
        //llamar a la API externa para actualizar el stock
        return this.proveedorExterno.updateStock(codigo, cantidad);
    }
}

// ========== TESTEO ==========

const adaptadorProveedor = new AdaptadorProveedor();
//obtener productos del proveedor externo usando la nueva interfaz
console.log('Productos obtenidos del proveedor externo:');
console.log(adaptadorProveedor.obtenerProductos());

//actualizar el inventario a través del adaptador
console.log(adaptadorProveedor.actualizarInventario('p1', 80));
