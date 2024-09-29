import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent  implements OnInit {

  tipo: String;
  carrera: String;
  facultad: String;
  nombre: String;
  datosUsuario= inject(AuthService);
  subscripcionDatosUsuario: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscripcionDatosUsuario = this.datosUsuario.tipo$.subscribe(datosUsuario => {
      this.tipo = datosUsuario; //Se realiza una suscripcion para saber el tipo de usuario que se ha logueado y se asigna a la variable tipo
    });
    this.subscripcionDatosUsuario = this.datosUsuario.carrera$.subscribe(datosUsuario => {
      this.carrera = datosUsuario; //Se realiza una suscripcion para saber la carrera del usuario que se ha logueado y se asigna a la variable carrera
    });
    this.subscripcionDatosUsuario = this.datosUsuario.facultad$.subscribe(datosUsuario => {
      this.facultad = datosUsuario; //Se realiza una suscripcion para saber la facultad del usuario que se ha logueado y se asigna a la variable facultad
    });
    this.subscripcionDatosUsuario = this.datosUsuario.usuario$.subscribe(datosUsuario => {
      this.nombre = datosUsuario; //Se realiza una suscripcion para saber el nombre del usuario que se ha logueado y se asigna a la varible nombre
    });
  }

}
