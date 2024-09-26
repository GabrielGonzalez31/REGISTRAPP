import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss'],
})
export class InicioSesionComponent  implements OnInit {

  ocupacion: string;

  correo: string = ''; // Campo de entrada para el usuario
  clave: string = ''; // Campos de entrada para el usuario y clave

  private authService = inject(AuthService);  // Obtener el servicio de autenticación
  private router = inject(Router);  // Obtener el servicio de navegación

  private loginFailedSubject = new BehaviorSubject<boolean>(false);
  loginFailed$ = this.loginFailedSubject.asObservable();
  loginFailed: boolean; // Variable para almacenar el estado de loginFailed

  ngOnInit() {
    this.authService.loginFailed$.subscribe(loginFailed => this.loginFailed = loginFailed); // Obtener el estado de loginFailed
  }

  guardarOcupacion(valor: string) {
    this.ocupacion = valor;
  }
  isLoading: boolean = false; // Variable para mostrar el estado de carga
  async login(correo: string, clave: string): Promise<void> { // Simular la autenticación con un retraso de 4 segundos
    this.isLoading = true; // Activar el estado de carga
    this.loginFailed = false; // Resetear el estado de loginFailed al iniciar sesión

    setTimeout(() => {
      // Aquí debes manejar la respuesta de tu API
      this.isLoading = false; // Desactivar el spinner
      this.loginFailed = true; // Simular fallo en el login
  }, 2000)

  
    const isAuthenticated = await this.authService.buscarUsuario(correo, clave); // Esperar a que se complete la autenticación
    this.isLoading = false; // Desactivar el estado de carga una vez que la autenticación termine

    if (isAuthenticated) {
      this.correo = ''; // Limpiar el campo de usuario
      this.clave = ''; // Limpiar el campo de clave
      if (this.ocupacion === 'docente'){
        this.router.navigate(['/docente']);
      }else if(this.ocupacion === 'alumno'){
        this.router.navigate(['/alumno']);
      }
      else{
        this.router.navigate(['/']); // Redirigir al usuario si el login es exitoso
      }
    } else {
      this.loginFailed = true; // Mostrar mensaje de error si el login falla
    }
  }

}
