import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  nombre: String;
  datosUsuario= inject(AuthService);
  subscripcionDatosUsuario: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscripcionDatosUsuario = this.datosUsuario.usuario$.subscribe(datosUsuario => {
      this.nombre = datosUsuario;
    });
  }

}
