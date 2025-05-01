
type Producto = {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
  };

export function init() {
  
  const productos: Producto[] = [
    { id: 1, nombre: 'Laptop', precio: 1500, stock: 5 },
    { id: 2, nombre: 'Mouse', precio: 20, stock: 0 },
    { id: 3, nombre: 'Teclado', precio: 50, stock: 10 },
    { id: 4, nombre: 'Monitor', precio: 200, stock: 2 }
  ];
  
  // ---------- Ejercicio 5 ----------
  
  const nombresProductos = productos.map(producto => producto.nombre);
  console.log('Nombres de productos:', nombresProductos);
  
  const productosConStock = productos.filter(producto => producto.stock > 0);
  console.log('Productos con stock:', productosConStock);
  
  // ---------- Ejercicio 6 ----------
  
  const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
  console.log('Productos ordenados por precio:', productosOrdenados);
  
  productos.push({ id: 5, nombre: 'Tablet', precio: 300, stock: 7 });
  console.log('Productos después de agregar Tablet:', productos);
  
  const productoEliminado = productos.pop();
  console.log('Producto eliminado:', productoEliminado);
  console.log('Productos después de eliminar el último:', productos);
}



