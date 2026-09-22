(function () {
  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const rootUrl = new URL('../', scriptUrl);
  const routes = {
    inicio: 'index.html',
    proms: 'pantallas/proms-01/index.html',
    'red-de-apoyo': 'pantallas/red-apoyo-01/index.html',
    tratamiento: 'pantallas/tratamiento-01/index.html',
    'perfil-configuracion': 'pantallas/perfil-01/index.html',
    perfil: 'pantallas/perfil-01/index.html',
    'soporte-crisis': 'pantallas/crisis-sos-01/index.html',
    'espacio-calma': 'pantallas/contencion-01/index.html',
    metas: 'pantallas/metas/index.html',
    'dispositivos-monitoreo': 'pantallas/dispositivos-monitoreo/index.html',
    'citas-recordatorios': 'pantallas/citas-recordatorios/index.html',
    'cambio-profesional': 'pantallas/cambio-profesional/index.html'
  };

  document.querySelectorAll('[data-path]').forEach((element) => {
    const route = routes[element.dataset.path];
    if (!route) return;
    const destination = new URL(route, rootUrl).href;
    if (element.matches('a')) {
      element.setAttribute('href', destination);
    } else {
      element.addEventListener('click', () => {
        window.location.assign(destination);
      });
    }
  });
})();