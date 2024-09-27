import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RestablecerContraComponent } from './restablecer-contra/restablecer-contra.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { DocenteComponent } from './docente/docente.component';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'iniciosesion', component: InicioSesionComponent},
  {path: 'restablecer', component: RestablecerContraComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'docente', component: DocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
