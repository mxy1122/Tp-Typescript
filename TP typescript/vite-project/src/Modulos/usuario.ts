export interface Usuario {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  }

  export type UsuarioType = {
    id: number;
    nombre: string;
    edad: number;
    email: string;
    activo: boolean;
  };

  // Explicación:
// La principal diferencia entre interfaces y tipos en TypeScript es que las interfaces
// están pensadas para ser extendidas (herencia), mientras que los tipos son más flexibles
// y se pueden utilizar para crear combinaciones de tipos complejos (por ejemplo, uniones, intersección, etc.).
// En este caso, tanto la interfaz como el tipo son equivalentes, pero la interfaz puede extenderse,
// mientras que el tipo no lo haría.