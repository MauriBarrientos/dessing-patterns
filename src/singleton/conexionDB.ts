class conexionDB{
    private static instancia : conexionDB;
    private host: string;
    private puerto: number;
    private usuario: string;
    private conectada: boolean;


    private constructor() {
        this.host = "localhost";
        this.puerto = 5432;
        this.usuario = "root";
        this.conectada = false; //inicialmente
    }

    public static getInstancia(): conexionDB{
        if (!conexionDB.instancia){
            conexionDB.instancia = new conexionDB();
        }
        return conexionDB.instancia;
    }

    //simular la conexión a la bd
    public conectar(): void{
        if (!this.conectada){
            console.log(`Conectando a la base de datos en ${this.host}:${this.puerto} como ${this.usuario}...`)
            this.conectada = true;
            console.log("Conectado!");
        } else{
            console.log("Ya está conectado a la base de datos.")
        }
    }

    //simular la desconexion de la bd
    public desconectar(): void {
        if (this.conectada){
            console.log("Desconectando de la base de datos...")
            this.conectada = false;
            console.log("Desconectado!");
        } else{
            console.log("No está conectado a la base de datos.")
        }
    }

    //metodos para obtener la info de conexon
    public getHost(): string{
        return this.host;
    }
    public getPuerto(): number{
        return this.puerto;
    }
    public getUsuario(): string{
        return this.usuario;
    }

    //metodo para configurar la conexion
    public setHost(host: string): void{
        this.host = host;
    }
    public setPuerto(puerto: number): void{
        this.puerto = puerto;
    }
    public setUsuario(usuario: string): void{
        this.usuario = usuario;
    }
}


// //==========TESTEO=======

// //instancias
// const conexion1= conexionDB.getInstancia();
// conexion1.conectar();
// conexion1.desconectar();