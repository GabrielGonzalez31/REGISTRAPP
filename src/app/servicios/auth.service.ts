import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../models/bd.models';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  tipo: string;
  //Mostrando el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false); // Para mostrar el estado del login
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>(''); // Para mostrar el nombre del usuario actualmente logueado
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<Usuario>(null); // Para mostrar el nombre del usuario actualmente logueado  // Para mostrar el nombre del usuario
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable(); // Para mostrar el nombre del usuario actualmente logueado

  private tipoSubject = new BehaviorSubject<string>(''); // Para mostrar el tipo de usuario actualmente logueado
  tipo$ = this.tipoSubject.asObservable();

  private carreraSubject = new BehaviorSubject<string>(''); // Para mostrar la carrera del usuario actualmente logueado
  carrera$ = this.carreraSubject.asObservable();

  private facultadSubject = new BehaviorSubject<string>(''); // Para mostrar la facultad del usuario actualmente logueado
  facultad$ = this.facultadSubject.asObservable();

  // Agregar un BehaviorSubject para el estado de loginFailed
  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Para mostrar si falló la autenticación
  loginFailed$ = this.loginFailedSubject.asObservable(); // Para mostrar si falló la autenticación

  apiservice = inject(ApiServiceService);

  async buscarUsuario(correo: string, clave: string) {
    const url = 'https://66f5f54a436827ced9758952.mockapi.io/api/v1/';
    const res = (await this.apiservice.request(
      'GET',
      url,
      'usuarios'
    )) as Array<Usuario>; // utiliza un tipo UsuarioAPI de models/UsuarioAPI.models.ts

    const user = res.find((u) => u.correo === correo && u.clave === clave); // Buscar un usuario en la lista de usuarios de la API
    if (user) {
      console.log('Autenticación exitosa!'); // Autenticación exitosa!
      console.log(user); // Nombre completo: Hel
      this.isAuthenticatedSubject.next(true); // Activar el estado de autenticación si la autenticación es correcta.
      this.usuarioSubject.next(user.nombreCompleto); // Actualizar el nombre completo del usuario autenticado.
      this.usuarioCompletoSubject.next(user); // Actualizar el usuario completo como objeto del usuario autenticado.
      this.carreraSubject.next(user.carrera); //Actualizar la carrera del usuario encontrado
      this.facultadSubject.next(user.facultad); //Actualizar la facultad del usuario encontrado
      this.loginFailedSubject.next(false); // Restablecer loginFailed a false
    } else {
      this.isAuthenticatedSubject.next(false); // Desactivar el estado de autenticación si la autenticación es incorrecta.
      this.loginFailedSubject.next(true); // Establecer loginFailed a true si falla la autenticación
    }
  }

  // Método para registrar un nuevo usuario Exp
  async registrarUsuario(usuario: any): Promise<void> {
    const url = 'https://66f5f54a436827ced9758952.mockapi.io/api/v1/';
    try {
      const response = await this.apiservice.request(
        'POST',
        url,
        'usuarios',
        usuario
      );
      console.log('Usuario registrado exitosamente:', response);
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      throw error;
    }
  }

  async verificarCorreo(correo: string): Promise<boolean> { //EXP
    const url = 'https://66f5f54a436827ced9758952.mockapi.io/api/v1/usuarios';
    const usuarios = (await this.apiservice.request(
      'GET',
      url,
      ''
    )) as Array<Usuario>;

    const usuarioExistente = usuarios.find((u) => u.correo === correo);

    return !!usuarioExistente; // Retorna true si el usuario existe, false si no
  }

  logout(): void {
    this.usuarioSubject.next(''); // Resetear el nombre de usuario al desloguearse.
    this.isAuthenticatedSubject.next(false); // Desloguearse y desactivar el estado de autenticación.
    this.loginFailedSubject.next(false); // Restablecer loginFailed al cerrar sesión
  }
}
