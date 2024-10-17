import { Component, inject, OnInit } from '@angular/core';
import { audit } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cierre-sesion',
  templateUrl: './cierre-sesion.component.html',
  styleUrls: ['./cierre-sesion.component.scss'],
})
export class CierreSesionComponent  implements OnInit {

  private cierreSesion = inject(AuthService)
  constructor() { }

  ngOnInit(): void {
    this.cierreSesion.logout();
  }

}
