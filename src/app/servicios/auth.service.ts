import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuarios } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }



   //para mostrar el estado del login
   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
   isAuthenticated$ = this.isAuthenticatedSubject.asObservable(); // Para mostrar el estado del login

   private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
   usuario$ = this.usuarioSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

   // Agregar un BehaviorSubject para el estado de loginFailed
   private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
   loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  buscarUsuario(correo: string, clave: string): Promise<boolean> { // Devuelve una promesa
    return new Promise((resolve) => {  // Simular la autenticación con un retraso de 4 segundos
      setTimeout(() => {  // Simular la autenticación con un retraso de 4 segundos
        const usuarioEncontrado = usuarios.find( // Buscar un usuario en la lista de usuarios simulados
          u => u.correo === correo && u.clave === clave // Revisar si el usuario y la clave coinciden con los datos de un usuario
        );

        if (usuarioEncontrado) { // Si el usuario y la clave coinciden con los datos de un usuario, activar
          this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
          this.usuarioSubject.next(usuarioEncontrado.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
          this.loginFailedSubject.next(false); // Restablecer loginFailed a false
          resolve(true); // Resuelve la promesa como `true` si la autenticación es exitosa
        } else {
          this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
          this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
          resolve(false); // Resuelve la promesa como `false` si la autenticación falla
        }
      }, 4000); // Retraso de 4000 ms = 4 segundos
    });
  }
}
