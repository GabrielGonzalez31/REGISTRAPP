import { Component, inject, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  usuario: string; // variable para almacenar el nombre del usuario
  private authService = inject(AuthService); // Obtener el servicio de autenticación

  subscriptionDatosPersonales: Subscription; // Subscripción para el observable del nombre del usuario
  subscriptionAuthService: Subscription; // Subscripción para el observable del estado de autenticación

  constructor() {
  }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario // Se realiza una supscripcion para tener los datos del usuario que se ha logueado
    });
  }

}
