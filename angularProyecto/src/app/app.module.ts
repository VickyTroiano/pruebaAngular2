import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponenteComponent } from './components/login-componente/login-componente.component';
import { FormComponenteComponent } from './components/form-componente/form-componente.component';
import { NavbarComponenteComponent } from './components/navbar-componente/navbar-componente.component';


//agregamos el modulo para usar la directiva ngModel
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponenteComponent,
    FormComponenteComponent,
    NavbarComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //lo agregamos en imports el FormModule
  ],
  exports: [
    NavbarComponenteComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
