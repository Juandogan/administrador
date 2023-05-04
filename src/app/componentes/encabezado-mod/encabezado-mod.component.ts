import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-encabezado-mod',
  templateUrl: './encabezado-mod.component.html',
  styleUrls: ['./encabezado-mod.component.css']
})
export class EncabezadoModComponent implements OnInit{
  public uploadedFiles: Array<File> = [];
  nota:any
  art:any
load=false
title = 'my-editor-app';
  data:any
  titulo=""
  subtitulo=""
  categoria=""
  articulo=""
  imagen=""
  vistas=0
  _id:any
  constructor( private ruta: ActivatedRoute, private crudService:CrudService){}

  ngOnInit(): void {

  this.ruta.data.subscribe((data) => {

    this.nota = Object.entries(data).map((i) => i[1]);
    
    this.categoria =  this.nota[0].categoria
    this.titulo = this.nota[0].titulo
    this.subtitulo = this.nota[0].subtitulo
    this._id = this.nota[0]._id
    this.vistas = this.nota[0].vistas
    this.imagen = this.nota[0].imagen 

    
  //aqui agregar contador devistas
  });

  
}

back(){
  this.crudService.back()
}

onFileChange(e: any) {
  // this.SubirEstado = false;
  this.uploadedFiles = e.target.files;
};

onUpload() {
  let formData = new FormData();

  for (let i = 0; i < this.uploadedFiles.length; i++) {

    formData.append("archivos", this.uploadedFiles[i], this.uploadedFiles[i].name)

  }
  this.crudService.uploadFile(formData).subscribe(res => {
    console.log("formdata", formData)
    var link = Object.values(res)
    this.imagen = String(link)
    console.log(link, "linkN")
  })

};


submitForm(){
  
  this.nota[0]._id = this._id
  this.nota[0].categoria = this.categoria
  this.nota[0].titulo = this.titulo
  this.nota[0].subtitulo = this.subtitulo
  this.nota[0].imagen = this.imagen  
  this.nota[0].vistas = this.vistas
  
  this.crudService.modificarArticulo(this.nota[0]).subscribe(res => {alert(res)}
)}


}


