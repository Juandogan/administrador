import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CrudService } from './servicios/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { CkEditorComponent } from './componentes/ck-editor/ck-editor.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { OrderByPipe } from './pipes/order.pipe';
import { EditorComponent } from './componentes/editor/editor.component';
import { SanitizeHtmlPipe } from './pipes/sanetizer.pipe';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { EncabezadoModComponent } from './componentes/encabezado-mod/encabezado-mod.component';
import { SideBarComponent } from './componentes/side-bar/side-bar.component';
import { DateConverterPipe } from './pipes/date-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CkEditorComponent,
    FooterComponent,
    ListadoComponent,
    OrderByPipe,
    EditorComponent,
    SanitizeHtmlPipe,
    EncabezadoComponent,
    EncabezadoModComponent,
    SideBarComponent,
    DateConverterPipe
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      CKEditorModule,
      HttpClientModule,
      FormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
