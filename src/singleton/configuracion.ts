class configuracion {
    private static instancia: configuracion;
    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: string;

    private constructor() {
        this.idioma = "español";
        this.rutaBaseDatos = "localhost:5432/inventario";
        this.nivelRegistro = "nivel";
    }

    public static getInstancia(): configuracion {
        if (!configuracion.instancia) {
            configuracion.instancia = new configuracion();
        }
        return configuracion.instancia;
    }

    public getIdioma(): string {
        return this.idioma;
    }
    public getRutaBaseDatos(): string {
        return this.rutaBaseDatos;
    }
    public getNivelRegistro(): string {
        return this.nivelRegistro;
    }

    public setIdioma(idioma: string): void {
        this.idioma = idioma;
    }
    public setRutaBaseDatos(rutaBaseDatos: string): void {
        this.rutaBaseDatos = rutaBaseDatos;
    }
    public setNivelRegistro(nivelRegistro: string): void {
        this.nivelRegistro = nivelRegistro;
    }
}