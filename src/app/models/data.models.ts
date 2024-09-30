import { Usuario } from "./bd.models"; // Importar la interface de usuario

// bd.models.ts
export const usuarios: Usuario[] = [
  {
    rut: '23.434.233-K',
    nombreCompleto: 'Admin User',
    correo: 'admin',
    clave: 'admin',
    facultad: 'Informatica y Telecommunicaciones',
    carrera: '',
    tipo: 'Docente'
  },
  {
    rut: '23.434.544-3',
    nombreCompleto: 'Yulied Quintero',
    correo: 'yulied@gmail.com',
    clave: '123456',
    facultad: 'Salud',
    carrera: 'Quimica y Farmacia',
    tipo :'Alumno'

  },
  {
    rut: '12.932.824-9',
    nombreCompleto: 'Andres Saldivar',
    correo: 'andres@duocuc.cl',
    clave: '123456',
    facultad: 'Informatica',
    carrera: 'Ingenieria de Software',
    tipo: 'Docente'
  },
  {
    rut: '23.934.849-0',
    nombreCompleto: 'Gabriel Gonzalez',
    correo: 'gabriel@gmail.com',
    clave: '123456',
    facultad: 'Informatica',
    carrera: 'Analista Programador',
    tipo: 'Alumno'
  }
];
