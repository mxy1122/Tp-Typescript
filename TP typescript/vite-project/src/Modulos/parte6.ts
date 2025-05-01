// ---------- Parte 6: Promesas y Asincronía ----------

export async function obtenerUsuariosAPI(): Promise<{ id: number; name: string; email: string }[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

// 📌 Ejercicio 9:
async function mostrarDatos() {
  console.log('Cargando datos...');
  const datos = await obtenerDatos();
  console.log('Datos obtenidos:', datos);
}

function obtenerDatos(): Promise<{ id: number; nombre: string }[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: 'Carlos' },
        { id: 2, nombre: 'María' },
        { id: 3, nombre: 'Sofía' }
      ]);
    }, 3000);
  });
}

// ✅ Encapsular todo en una función init()
export async function init() {
  await mostrarDatos();
}
