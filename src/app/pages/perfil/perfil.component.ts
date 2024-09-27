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
      this.tipo = datosUsuario;
    });
    this.subscripcionDatosUsuario = this.datosUsuario.carrera$.subscribe(datosUsuario => {
      this.carrera = datosUsuario;
    });
    this.subscripcionDatosUsuario = this.datosUsuario.facultad$.subscribe(datosUsuario => {
      this.facultad = datosUsuario;
    });
    this.subscripcionDatosUsuario = this.datosUsuario.usuario$.subscribe(datosUsuario => {
      this.nombre = datosUsuario;
    });
  }

}
