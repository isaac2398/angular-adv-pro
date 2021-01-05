import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
//Modulos
import { PagesRoutingModule } from './pages/pages.routing';

import { N404Component } from './n404/n404.component';
import { AuthRoutingModule } from './auth/auth.Routing';
/*
***************************************************************
                        DEFINIR RUTAS
***************************************************************
*/
const routes:Routes = [
    //Definimos que cuando sea ruta
    {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    {path:'**', component:N404Component}
]

@NgModule({
declarations:[],
    imports:[
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AuthRoutingModule
    ],
    exports:[RouterModule]
})

export class AppRoutingModule{}