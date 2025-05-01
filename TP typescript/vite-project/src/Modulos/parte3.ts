import { Usuario } from './usuario';

console.log('Parte 3');
class UsuarioClass implements Usuario {
  id: number;
  nombre: string;
  edad: number;
  email: string;
  activo: boolean;

  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean) {
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
    this.activo = activo;
  }

  toggleActivo(): void {
    this.activo = !this.activo;
  }
}


class AdminUsuario extends UsuarioClass {
  permisos: string[];

  constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
    super(id, nombre, edad, email, activo); // Llamamos al constructor de UsuarioClass
    this.permisos = permisos;               // Asignamos la nueva propiedad
  }
}

export function init(){



const admin = new AdminUsuario(
  99,
  'Lucía González',
  32,
  'lucia.gonzalez@example.com',
  true,
  ['crear-usuarios', 'eliminar-usuarios', 'editar-usuarios']
);

console.log('Admin Usuario:', admin);

}


// Mostramos los datos en consola

