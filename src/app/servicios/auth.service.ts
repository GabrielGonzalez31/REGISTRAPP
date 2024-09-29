import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuarios } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  tipo: string;
   //Mostrando el estado del login
   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
   isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

   private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado
   usuario$ = this.usuarioSubject.asObservable();

   private tipoSubject = new BehaviorSubject<string>(''); // Para mostrar el tipo de usuario actualmente logueado
   tipo$ = this.tipoSubject.asObservable();

   private carreraSubject = new BehaviorSubject<string>(''); // Para mostrar la carrera del usuario actualmente logueado
   carrera$ = this.carreraSubject.asObservable();

   private facultadSubject = new BehaviorSubject<string>(''); // Para mostrar la facultad del usuario actualmente logueado
   facultad$ = this.facultadSubject.asObservable();

   // Agregar un BehaviorSubject para el estado de loginFailed
   private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
   loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  buscarUsuario(correo: string, clave: string): Promise<boolean> { // Funcion que devuelve una promesa
    return new Promise((resolve) => {  // Simular la autenticación con un retraso de 2 segundos
      setTimeout(() => {
        const usuarioEncontrado = usuarios.find( // Buscar un usuario en la lista de usuarios
          u => u.correo === correo && u.clave === clave // Revisar si el correo y la clave coinciden con los datos de un usuario
        );

        if (usuarioEncontrado) {// Si el correo y la clave coinciden con los datos de un usuario, activar
          this.tipo = usuarioEncontrado.tipo; // Asignamos el tipo de usuario que se encontró a esta variable
          this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
          this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
          this.tipoSubject.next(usuarioEncontrado.tipo); //Actualizar el tipo de usuario
          this.carreraSubject.next(usuarioEncontrado.carrera); //Actualizar la carrera del usuario encontrado
          this.facultadSubject.next(usuarioEncontrado.facultad);//Actualizar la facultad del usuario encontrado
          this.loginFailedSubject.next(false); // Restablecer loginFailed a false
          resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
        } else {
          this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
          this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
          resolve(false); // Resuelve la promesa como `false` si la autenticación falla
        }
      }, 2000);
    });
  }
  logout(): void {
    this.usuarioSubject.next('');  // Resetear el nombre de usuario al desloguearse.
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.
    this.loginFailedSubject.next(false);  // Restablecer loginFailed al cerrar sesión
  }
}
