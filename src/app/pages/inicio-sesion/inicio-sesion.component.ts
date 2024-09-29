import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { usuarios } from 'src/app/models/data.models';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {

  correo: string = ''; // variable para el correo del usuario
  clave: string = ''; // variable para la clave del usuario

  private usuario = inject(AuthService); //Obtener el servicio auth
  private authService = inject(AuthService);  // Obtener el servicio de autenticación
  private router = inject(Router);  // Obtener el servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean; // Variable para almacenar el estado de loginFailed

  ngOnInit() {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  isLoading: boolean = false; // Variable para mostrar el estado de carga
  async login(correo: string, clave: string): Promise<void> { // Simular la autenticación con un retraso de 2 segundos
    this.isLoading = true; // Activar el estado de carga
    this.loginFailed = false; // Resetear el estado de loginFailed al iniciar sesión

    const isAuthenticated = await this.authService.buscarUsuario(correo, clave); // Esperar a que se complete la autenticación
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    if (isAuthenticated) {
      this.correo = ''; // Limpiar el campo de usuario
      this.clave = ''; // Limpiar el campo de clave
      if(this.usuario.tipo === 'Docente'){
        this.router.navigate(['/docente']); // Redirigir al usuario si el login es exitoso y a su respectiva pantalla
      }
      if(this.usuario.tipo === 'Alumno'){
        this.router.navigate(['/alumno']); // Redirigir al usuario si el login es exitoso y a su respectiva pantalla
      }

    } else {
      this.loginFailed = true; // Mostrar mensaje de error si el login falla
    }
  }

}
