export class Data {

    public data = {
        id:'',
        titulo:'',
        subtitulo:'',
        categoria:'',
        articulo:'',
        imagen:'',
    };

    constructor(_id="", titulo="", subtitulo="", categoria ="", articulo ="", imagen ="")

    {
        this._id = _id
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.categoria = categoria;
        this.articulo = articulo;
        this.imagen = imagen;
    };

    _id:string;
    titulo:string;
    subtitulo:string;
    categoria:string;
    articulo:string;
    imagen:string;
};



