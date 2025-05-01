import { obtenerUsuariosAPI } from './parte6';

async function renderizarUsuarios() {
  const lista = document.getElementById('listaUsuarios');

  if (!lista) {
    console.error('No se encontró el elemento listaUsuarios');
    return;
  }

  lista.innerHTML = '<li>Cargando usuarios...</li>';

  try {
    const usuarios = await obtenerUsuariosAPI();

    lista.innerHTML = usuarios.map(usuario =>
      `<li><strong>${usuario.name}</strong> - ${usuario.email}</li>`
    ).join('');
  } catch (error) {
    console.error('Error al cargar usuarios:', error);
    lista.innerHTML = '<li>Error al cargar usuarios.</li>';
  }
}

// ✅ Esto es lo que te faltaba:
export function init() {
  const boton = document.getElementById('btnMostrarUsuarios');
  boton?.addEventListener('click', () => {
    renderizarUsuarios();
  });
}
