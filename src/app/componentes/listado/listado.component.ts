import { Component,OnInit } from '@angular/core';
import { Data } from 'src/app/modelos/data';

import { CrudService } from 'src/app/servicios/crud.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data2: any
  data:any
  load = true
  texto: any
  ascending = true
  


  constructor(public crudService: CrudService) { }
  ngOnInit() {

    this.crudService.getArticulos().subscribe(res => {
      this.data2 = res as Data
      this.texto = this.data2.articulo
      this.load = true
      this.crudService.unArticulo = res as Data
      this.load = false
      
    })  

  }

  borrar(x:any, indice:any){
      this.data2.splice(indice, 1);  
      this.data2 = this.data2    

    this.crudService.deleteArticulo(x).subscribe(res=>{
      alert(res)
      
    })
  }

  toggleOrder() {
    this.ascending = !this.ascending;
  }
}
