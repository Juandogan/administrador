import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CrudService } from './servicios/crud.service';
import { HttpClientModule } from '@angular/common/http';
import { CkEditorComponent } from './componentes/ck-editor/ck-editor.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CkEditorComponent
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
