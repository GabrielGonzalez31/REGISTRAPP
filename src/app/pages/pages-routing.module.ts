import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RestablecerContraComponent } from './restablecer-contra/restablecer-contra.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component: InicioSesionComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'iniciosesion', component: InicioSesionComponent},
  {path: 'restablecer', component: RestablecerContraComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
