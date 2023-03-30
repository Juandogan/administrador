import { Component, OnInit, Input,Inject } from '@angular/core';
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
  title = 'my-editor-app';

  titulo=""
  subtitulo=""
  categoria=""
  articulo=""


  @Input('data') data : any ;

  @Input('id') id:any;


  public myEditor:any

 texto:any

  public editorConfig = {

    toolbar: {
      items: [
        'heading',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'alignment',
        '|',
        'codeBlock',
        'numberedList',
        'bulletedList',
        '|',
        'outdent',
        'indent',
        '|',
        'todoList',
        'link',
        'blockQuote',
        'imageUpload',
        'insertTable',
        'mediaEmbed',
        '|',
        'undo',
        'redo'
      ]
    },
    language: 'es',
    image: {
      toolbar: [
        'imageTextAlternative',
        'toggleImageCaption',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells',
        'tableCellProperties',
        'tableProperties'
      ]
    },
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

  constructor(public crudService:CrudService){}


  ngOnInit(){


    this.Editor.create( document.querySelector( '.document-editor__editable' ), {

      heading: {
          options: [
              { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
              { model: 'paragraph', title: 'Parrafos', class: 'ck-heading_paragraph' },
              { model: 'heading1', view: 'h3', title: 'Encabezado', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Titulos', class: 'ck-heading_heading2' },

          ]
      },
      toolbar: {
        items: [
          'heading',
          '|',
          'fontSize',
          'fontFamily',
          '|',
          'fontColor',
          'fontBackgroundColor',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          '|',
          'alignment',
          '|',
          'codeBlock',
          'numberedList',
          'bulletedList',
          '|',
          'outdent',
          'indent',
          '|',
          'todoList',
          'link',
          'blockQuote',
          'imageUpload',
          'insertTable',
          'mediaEmbed',
          '|',
          'undo',
          'redo'
        ]
      },
      language: 'es',
      image: {
        toolbar: [
          'imageTextAlternative',
          'toggleImageCaption',
          'imageStyle:inline',
          'imageStyle:block',
          'imageStyle:side'
        ]
      },
      table: {
        contentToolbar: [
          'tableColumn',
          'tableRow',
          'mergeTableCells',
          'tableCellProperties',
          'tableProperties'
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

          } )

          .then( (editor:any) => {

      const toolbarContainer = document.querySelector( '.document-editor__toolbar' );
      if(toolbarContainer){
      toolbarContainer.appendChild( editor.ui.view.toolbar.element );
      this.myEditor = editor

            }
  } )
  .catch( (err:any) => {
      console.error( err );
  } );


}


agregarPublicacion(){

console.log(this.myEditor.getData())

// if(this.crudService.unArticulo){
//     this.crudService.unArticulo.articulo = this.myEditor.getData()
//     console.log("bandera: ", this.crudService.unArticulo)
//       this.crudService.modificarArticulo(this.crudService.unArticulo)
//       .subscribe(res => {
//         console.log(res)

//       });
//     }
//         else  {

          // this.crudService.addArticulo(this.crudService.unArticulo).subscribe(res => {
          //   console.log(res)

          // })
      // }


      this.submitForm()
    };


    submitForm(){
      this.crudService.unArticulo.articulo = this.myEditor.getData()
      this.crudService.unArticulo.categoria = this.categoria
      this.crudService.unArticulo.titulo = this.titulo
      this.crudService.unArticulo.subtitulo = this.subtitulo

      this.crudService.addArticulo(this.crudService.unArticulo).subscribe((res:any) => {console.log(res)}
    )}


}
