import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent { //EXP
  constructor() {}

  // Variables para almacenar los datos del formulario
  nombreCompleto: string = '';
  correo: string = '';
  clave: string = '';
  ocupacion: string = '';
  carrera: string = '';
  facultad: string = '';

  // Variable para mostrar el estado de carga
  isLoading: boolean = false;

  // Inyectar el servicio de autenticación
  private authService = inject(AuthService);
  //Inyectar els ervicio de navegacion
  private router = inject(Router);

  private alertController = inject(AlertController);

  async registrarUsuario() {
    this.isLoading = true;

    // Verificar si el correo ya existe
    const correoExiste = await this.authService.verificarCorreo(this.correo);
    //Datos de campos del fomulario
    const campos = [this.nombreCompleto, this.correo, this.clave, this.ocupacion, this.carrera, this.facultad];
    // Crear un objeto usuario con los datos del formulario
    const nuevoUsuario = {
      nombreCompleto: this.nombreCompleto,
      correo: this.correo,
      clave: this.clave,
      ocupacion: this.ocupacion,
      carrera: this.carrera,
      facultad: this.facultad,
    };

    //Validacion para que no se cree un usuario vacio
    if (campos.some(campo => !campo)) {
      this.isLoading = false;
      // Mostrar alerta si hay campos vacíos
      const aviso = await this.alertController.create({
        header: 'Error',
        message: 'Todos los campos son obligatorios.',
        buttons: ['OK'],
      });
      await aviso.present();
      return; // Detener el proceso si hay campos vacíos
    }

    //Validacion para que ingrese solo docente o alumno
    const ocupaciones = this.ocupacion.toLowerCase(); //Aca se convierte en minuscula la ocuapcion igresada por el usuario
    if (ocupaciones !== 'docente' && ocupaciones !== 'alumno') {
      this.isLoading = false;
      // Mostrar alerta si hay campos vacíos
      const aviso = await this.alertController.create({
        header: 'Error',
        message: 'La ocupación debe ser Alumno o Docente.',
        buttons: ['OK'],
      });
      await aviso.present();
      return; // Detener el proceso si hay campos vacíos
    }
    //Validacion para saber si ese usuario existe
    if (correoExiste) {
      this.isLoading = false;
      // Mostrar una alerta si el correo ya existe
      const aviso = await this.alertController.create({
        header: 'Error',
        message: 'Este correo ya está registrado.',
        buttons: ['OK'],
      });
      await aviso.present();
      this.limpiarFormulario;
    } else {
      // Proceder con el registro si el correo no existe
      await this.authService.registrarUsuario(nuevoUsuario);
      this.isLoading = false;

      // Mostrar alerta de éxito
      const aviso = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'El usuario ha sido registrado correctamente.',
        buttons: ['OK'],
      });
      await aviso.present();
      this.limpiarFormulario;

      this.router.navigate(['/iniciosesion']); // Redirigir al login
    }
  }

  // Limpiar el formulario después de registrar
  limpiarFormulario() {
    this.nombreCompleto = '';
    this.correo = '';
    this.clave = '';
    this.ocupacion = '';
    this.carrera = '';
    this.facultad = '';
  }
}
