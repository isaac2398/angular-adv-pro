import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Modulos
import { AppRoutingModule } from './app-routing.module';
import {PagesModule} from './pages/pages.module'; 
//Componentes
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { N404Component } from './n404/n404.component';


@NgModule({
  declarations: [
    AppComponent,
    N404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
