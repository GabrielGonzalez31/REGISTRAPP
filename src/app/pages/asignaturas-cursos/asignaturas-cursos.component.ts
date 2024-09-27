import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-asignaturas-cursos',
  templateUrl: './asignaturas-cursos.component.html',
  styleUrls: ['./asignaturas-cursos.component.scss'],
})
export class AsignaturasCursosComponent  implements OnInit {

  tipo: String;
  datosUsuario= inject(AuthService);
  subscripcionDatosUsuario: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscripcionDatosUsuario = this.datosUsuario.tipo$.subscribe(datosUsuario => {
      this.tipo = datosUsuario;
    });
  }

}
