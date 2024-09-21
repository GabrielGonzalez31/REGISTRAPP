import { Usuario } from "./bd.models"; // Importar la interface de usuario

// bd.models.ts
export const usuarios: Usuario[] = [
  {
    rut: '23.434.233-K',
    nombreCompleto: 'Admin User',
    correo: 'admin',
    clave: 'admin',
    facultad: 'Informatica y Telecommunicaciones',
    carrera: 'Ingeniería en Informática'
  },
  {
    rut: '23.434.544-3',
    nombreCompleto: 'Yulied Quintero',
    correo: 'yaquintero25@gmail.com',
    clave: '123456',
    facultad: 'Salud',
    carrera: 'Quimica y Farmacia'
  },
  {
    rut: '12.932.824-9',
    nombreCompleto: 'Daniel Gonzalez',
    correo: 'danielgonzalez@duocuc.cl',
    clave: '123456',
    facultad: 'Salud',
    carrera: 'Preparador Físico'
  },
  {
    rut: '23.934.849-0',
    nombreCompleto: 'Gabriel Gonzalez',
    correo: 'gaj.goznalez@gmail.com',
    clave: '123456',
    facultad: 'Informatica y Telecommunicaciones',
    carrera: 'Analista Programador Computacional'
  }
];
