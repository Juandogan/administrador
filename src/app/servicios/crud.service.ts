import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../modelos/data';
import { Location } from '@angular/common'


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  unArticulo = new Data

  readonly URL_API  = "http://66.97.44.139/data";
  readonly URL_API2 = "http://66.97.44.139/upload";
  constructor(private http:HttpClient, private location:Location)  { }

  back(): void {  
    this.location.back()
    }

  uploadFile(formData:any){
    console.log('Bandera', formData)
     return this.http.post("/upload", formData)
    //    en produccion poner '/upload' por this.URL_API2
    // en desarrollo poner - this.URL_API2  - por '/upload '
      }


    getArticulos() {
       return this.http.get(this.URL_API);

    };



     getOneArticulo(_id:any){
      return this.http.get(this.URL_API + `/${_id}`);
    };




    addArticulo(articulo:Data) {

      return this.http.post(this.URL_API, articulo);


    };


    modificarArticulo(articulo:Data) {
      console.log('delcrud', articulo)
      return this.http.put(this.URL_API + `/${articulo._id}` , articulo);

    };




    deleteArticulo(_id:string) {
      return this.http.delete(this.URL_API + `/${_id}`);

    };


    cut(value:any){
      var corte = value.slice(8)

     return corte
   };

}
