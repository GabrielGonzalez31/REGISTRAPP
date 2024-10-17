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


  // Variable para guardar el QR generado
  asignaturaQR: string = '';

  // Lista de asignaturas disponibles
  asignaturas = [
    { sigla: '005D', nombre: 'Programacion App Moviles' },
    { sigla: '0123V', nombre: 'Programacion Web' },
    { sigla: '0067D', nombre: 'Programación Algoritmos' }
  ];


  constructor() { }

  ngOnInit() {
    this.subscripcionDatosUsuario = this.datosUsuario.tipo$.subscribe(datosUsuario => {
      this.tipo = datosUsuario;
    });
  }


  // Función para generar el QR
  generarQR(sigla: string) {
    this.asignaturaQR = sigla; // Se genera el QR con la sigla de la asignatura seleccionada
  }

}
