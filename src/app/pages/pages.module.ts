import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RestablecerContraComponent } from './restablecer-contra/restablecer-contra.component';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';
import { AsignaturasCursosComponent } from './asignaturas-cursos/asignaturas-cursos.component';
import { CamaraQrComponent } from './camara-qr/camara-qr.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [
    InicioSesionComponent,
    RestablecerContraComponent,
    AlumnoComponent,
    DocenteComponent,
    AsignaturasCursosComponent,
    CamaraQrComponent,
    PerfilComponent,
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    SharedModule,
    FormsModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
