
import { Usuario, UsuarioType } from './usuario';

const usuarios: Usuario[] = [
    
{
    id: 1,
    nombre: 'John Doe',
    edad: 30,
    email: 'kHhJY@example.com',
    activo: true
},

{
    id: 2,
    nombre: 'Ana Gómez',
    edad: 25,
    email: 'ana.gomez@example.com',
    activo: false
},

{
    id: 3,
    nombre: 'Luis Martínez',
    edad: 40,
    email: 'martinez@gmail.com',
    activo: true
}


];


  export function init() {
   
    
  const usuariosActivos = usuarios.filter(usuario => usuario.activo);

  
  console.log('Usuarios activos:', usuariosActivos);

  }


  // Mostrar en la consola    