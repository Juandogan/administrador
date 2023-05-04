import { Component, OnInit, Input,Inject, ViewChild } from '@angular/core';
import * as DecoupledDocumentEditor from 'src/app/ckeditor4/';
import { Data } from '../../modelos/data';
import { CrudService } from '../../servicios/crud.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.component.html',
  styleUrls: ['./ck-editor.component.css']
})
export class CkEditorComponent {




art:any
  
  title = 'my-editor-app';

  titulo=""
  subtitulo=""
  categoria=""
  articulo=""
  load=false


  @Input('data') data : any ;

  @Input('id') id:any;


  public myEditor:any

 texto:any

  public editorConfig = {


    heading: {
      options: [
          { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
          { model: 'heading1', view: 'h1', title: 'Titulo', class: 'ck-heading_heading1' },
          { model: 'heading2', view: 'h2', title: 'Subtitulo', class: 'ck-heading_heading2' },
          { model: 'heading3', view: 'h4', title: 'Pie de foto', class: 'ck-heading_heading3' },

      ]},


    simpleUpload: {
         uploadUrl: "https://fevatv.com.ar/upload2/",
         headers: {
         'X-CSRF-TOKEN': 'CSFR-Token',
         Authorization: 'Bearer <JSON Web Token>'
       }, }



      };

     public Editor = DecoupledDocumentEditor;

     public onReady( editor:any ) {
      editor.ui.getEditableElement().parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
      );
  }

  constructor(public crudService:CrudService){
    // this.crudService.unArticulo = this.data
  }
 

  ngOnInit(){

    this.crudService.unArticulo.vistas = 1
    this.crudService.unArticulo._id = this.data._id
    this.crudService.unArticulo.categoria = this.data.categoria
    this.crudService.unArticulo.titulo = this.data.titulo
    this.crudService.unArticulo.subtitulo = this.data.subtitulo
    
console.log(this.data)

this.art = this.data.articulo
    this.Editor.create( document.querySelector( '.document-editor__editable' ), {
      
      heading: {
          options: [
              { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
              { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h3', title: 'Encabezado', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Titulos', class: 'ck-heading_heading2' },

          ]
      },
    
       link: {
            // Automatically add target="_blank" and rel="noopener noreferrer" to all external links.
            addTargetToExternalLinks: true,
        },


      simpleUpload: {
      uploadUrl: "https://fevatv.com.ar/upload2",

      headers: {
        'X-CSRF-TOKEN': 'CSFR-Token',
        Authorization: 'Bearer <JSON Web Token>'
      }

    },

      }).then( (editor:any) => {
        
      const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
      if(toolbarContainer){
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      this.myEditor = editor
      this.myEditor.setData(this.data.articulo) //IMPORTANTEEEE
      
      
            }
  } )
  .catch( (err:any) => {
      console.error( err );
  } );
  
  
}


agregarPublicacion(){
this.data.articulo = this.myEditor.getData()



if(this.data._id ){
console.log('agregar', this.crudService.unArticulo)
this.crudService.modificarArticulo(this.data).subscribe((res:any) => {console.log(res)} )

//  this.crudService.addArticulo(this.crudService.unArticulo).subscribe((res:any) => {console.log(res)}
// )}

}}

back(){
  this.crudService.back()
}

    };

