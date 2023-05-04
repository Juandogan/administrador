export class Data {

    public data = {
        _id:'',
        titulo:'',
        subtitulo:'',
        categoria:'',
        articulo:'',
        imagen:'',
        vistas:'',
    };

    constructor(_id="", titulo="", subtitulo="", categoria ="", articulo ="", imagen ="" , vistas=0)

    {
        this._id = _id
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.categoria = categoria;
        this.articulo = articulo;
        this.imagen = imagen;
        this.vistas = vistas
    };

    _id:string;
    titulo:string;
    subtitulo:string;
    categoria:string;
    articulo:string;
    imagen:string;
    vistas:number
};



