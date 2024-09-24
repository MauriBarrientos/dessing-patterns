class Configuracion {
    private static instancia: Configuracion;
    private idioma: string;
    private rutaBaseDatos: string;
    private nivelRegistro: string;


    //constructor privado que evita la creación de  nuevas instancias (singleton)
    private constructor() {
        this.idioma= "español" ;
        this.rutaBaseDatos= "localhost:5432/inventario";
        this.nivelRegistro= "nivel";
    }

    //Método estático que devuelve la unica instancia de la clase
    public static getInstancia(): Configuracion{
        if (!Configuracion.instancia){
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    }
    
    //metodos para obtener y actualizar las propiedades
    public getIdioma(): string{
        return this.idioma;
    }

    public setIdioma(idioma: string): void{
        this.idioma = idioma;
    }

    public getRutaBaseDatos(): string{
        return this.rutaBaseDatos;
    }

    public setRutaBaseDatos(rutaBaseDatos: string): void{
        this.rutaBaseDatos = rutaBaseDatos;
    }   

    public getNivelRegistro(): string{
        return this.nivelRegistro;
    }

    public setNivelRegistro(nivelRegistro: string): void{
        this.nivelRegistro = nivelRegistro;
    }

}