import { Component, OnInit, Input } from '@angular/core';
import { Data } from './modelos/data';
import { CrudService } from './servicios/crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  @Input('data') data: any;


  data2: any
  load = false
  texto: any


  constructor(public crudService: CrudService) { }


  ngOnInit() {

    // this.crudService.getOneArticulo("6425a70d6a5adcbd50085819").subscribe(res => {
    //   this.data2 = res as Data
      
    //   this.texto = this.data2.articulo
    //   this.load = true
    //   this.crudService.unArticulo = res as Data
      
    // })




  }



}
