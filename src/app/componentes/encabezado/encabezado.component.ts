import { Component, Inject } from '@angular/core';
import { Data } from 'src/app/modelos/data';
import { CrudService } from 'src/app/servicios/crud.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {


  title = 'my-editor-app';
  data: any
  titulo = ""
  subtitulo = ""
  categoria = ""
  articulo = ""
  vistas = 0
  imagen:any
  public uploadedFiles: Array<File> = [];

  constructor(private crudService: CrudService, @Inject(PLATFORM_ID) private _platformId: Object) {
    this.data = new Data
  }

  back(){
    this.crudService.back()
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this._platformId)) { }
  }

  ngOnInit() {
    if (isPlatformBrowser(this._platformId)) { }
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
      this.imagen = String(Object.values(res))
      
    })

  };




  submitForm() {

    this.data = {
      "categoria": this.categoria,
      "titulo": this.titulo,
      "subtitulo": this.subtitulo,
      "articulo": this.articulo,
      "vistas": this.vistas,
      "imagen": this.imagen
    }



    this.crudService.addArticulo(this.data).subscribe(res => {
      alert(res)

    }
    )
  }

}

