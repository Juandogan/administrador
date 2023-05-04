import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { CkEditorComponent } from './componentes/ck-editor/ck-editor.component';
import { EditorComponent } from './componentes/editor/editor.component';
import { ResolveArticuloService } from './servicios/resolve-articulo.service';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EncabezadoModComponent } from './componentes/encabezado-mod/encabezado-mod.component';

const routes: Routes = [
  { path:'', component:ListadoComponent },
  { path:'editor/:_id', component: EditorComponent, resolve:{data: ResolveArticuloService}},
  { path:'encabezadoMod/:_id', component: EncabezadoModComponent, resolve:{data: ResolveArticuloService}},
  { path:'encabezado', component:EncabezadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
