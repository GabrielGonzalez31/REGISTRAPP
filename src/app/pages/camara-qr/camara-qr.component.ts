import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-camara-qr',
  templateUrl: './camara-qr.component.html',
  styleUrls: ['./camara-qr.component.scss'],
})
export class CamaraQrComponent  implements OnInit {

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
