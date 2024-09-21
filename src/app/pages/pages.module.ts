import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RestablecerContraComponent } from './restablecer-contra/restablecer-contra.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';


@NgModule({
  declarations: [
    HomeComponent,
    InicioSesionComponent,
    RestablecerContraComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    SharedModule,
    FormsModule,
    RouterLink,
  ]
})
export class PagesModule { }
