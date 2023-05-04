
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from './crud.service';


@Injectable({
  providedIn: 'root'
})


export class ResolveArticuloService implements Resolve<any>{

aux:any
  constructor(private crudService:CrudService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> | Promise<any> {

    if(route.paramMap.has('_id') ){

      console.log()
       return  this.crudService.getOneArticulo(route.paramMap.get('_id'))


    } else {
    return  this.crudService.getArticulos()
  }

  }
}
