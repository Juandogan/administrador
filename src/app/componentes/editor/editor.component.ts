import { Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/servicios/crud.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer  } from '@angular/platform-browser';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit{
  nota:any
  art:any
load=false
   constructor(

    @Inject(PLATFORM_ID) private _platformId: Object,
    private ruta: ActivatedRoute,
    public crudService: CrudService,
  
    public  sanitizer: DomSanitizer,   
    
    ){   
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this._platformId)) {}


    this.ruta.data.subscribe((data) => {

      this.nota = Object.entries(data).map((i) => i[1]);
      

      this.art = "this.nota[0].articulo"
      this.load = true
    //aqui agregar contador devistas
    });
  }
}
