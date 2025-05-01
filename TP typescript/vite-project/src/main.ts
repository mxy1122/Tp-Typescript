const app = document.querySelector<HTMLDivElement>('#app')
if(app){


  Promise.all([

    import('./Modulos/script.ts'),
    import('./Modulos/parte3.ts'),
    import('./Modulos/parte4.ts'),
    import('./Modulos/parte5.ts'),
    import('./Modulos/parte6.ts'),
    import('./Modulos/parte7.ts'),

  ]).then(([script, parte3, parte4, parte5, parte6, parte7]) => {
    
    script.init?.();
    parte3.init?.();
    parte4.init?.();
    parte5.init?.();
    parte6.init?.();
    parte7.init?.();

  }).catch(error => {
    console.error('Error al cargar los modulos:', error);
  });


}

