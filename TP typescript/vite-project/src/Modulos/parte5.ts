// ---------- Parte 5: Tipos Genéricos en TypeScript ----------

// 📌 Ejercicio 7: Función genérica getRandomItem<T>()


function getRandomItem<T>(array: T[]): T {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
export function init() {

  const numeros = [10, 20, 30, 40, 50];
  console.log('Número aleatorio:', getRandomItem(numeros));
  
 
  const nombres = ['Juan', 'Ana', 'Pedro', 'Lucía'];
  console.log('Nombre aleatorio:', getRandomItem(nombres));
  
  
  type Usuario = { id: number; nombre: string };
  const usuarios: Usuario[] = [
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'María' },
    { id: 3, nombre: 'Sofía' }
  ];
  console.log('Usuario aleatorio:', getRandomItem(usuarios));
  
  // 📌 Ejercicio 8: Interfaz y Clase genérica Caja<T>
  
  interface Caja<T> {
    contenido: T;
  }

 
  class CajaClass<T> implements Caja<T> {
    contenido: T;
  
    constructor(contenido: T) {
      this.contenido = contenido;
    }
  
    mostrarContenido(): void {
      console.log('Contenido de la caja:', this.contenido);
    }
  }
  


  const cajaNumero = new CajaClass<number>(123);
  cajaNumero.mostrarContenido();
  
  const cajaString = new CajaClass<string>('Hola mundo');
  cajaString.mostrarContenido();

  const cajaUsuario = new CajaClass<Usuario>({ id: 1, nombre: 'Carlos' });
  cajaUsuario.mostrarContenido();

}

