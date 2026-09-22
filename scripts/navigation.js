(function () {
  const scriptUrl = document.currentScript ? document.currentScript.src : window.location.href;
  const rootUrl = new URL('../', scriptUrl);
  const logoUrl = new URL('recursos/logo-marca.svg', rootUrl).href;
  const profileUrl = new URL('recursos/fotoperfil.png', rootUrl).href;
  const peopleRoot = new URL('recursos/personas/', rootUrl);
  const routes = {
    inicio: 'index.html',
    proms: 'pantallas/proms/index.html',
    'red-de-apoyo': 'pantallas/red-apoyo/index.html',
    tratamiento: 'pantallas/tratamiento/index.html',
    'perfil-configuracion': 'pantallas/perfil/index.html',
    perfil: 'pantallas/perfil/index.html',
    'mi-perfil': 'pantallas/perfil/index.html',
    privacidad: 'pantallas/perfil/index.html',
    'soporte-crisis': 'pantallas/crisis-sos/index.html',
    'espacio-calma': 'pantallas/contencion/index.html',
    metas: 'pantallas/metas/index.html',
    'dispositivos-monitoreo': 'pantallas/dispositivos-monitoreo/index.html',
    'citas-recordatorios': 'pantallas/citas-recordatorios/index.html',
    'cambio-profesional': 'pantallas/cambio-profesional/index.html'
  };

  document.querySelectorAll('img[src]').forEach((image) => {
    if (!/^https?:\/\//i.test(image.getAttribute('src'))) return;
    const description = `${image.alt || ''} ${image.dataset.alt || ''}`.toLowerCase();
    const isLogo = /logo/i.test(description) || /logo/i.test(image.className || '');
    let asset = profileUrl;
    if (isLogo) asset = logoUrl;
    else if (/elena|psiquiatra|médic|medic/.test(description)) asset = new URL('psiquiatra.png', peopleRoot).href;
    else if (/marcos|cuidador|familiar|hermano/.test(description)) asset = new URL('cuidador.png', peopleRoot).href;
    else if (/terapeuta/.test(description)) asset = new URL('terapeuta.png', peopleRoot).href;
    else if (/camila|perfil|tú|tu /.test(description)) asset = profileUrl;
    else asset = new URL('familiar.png', peopleRoot).href;
    image.src = asset;
  });

  document.querySelectorAll('[data-path]').forEach((element) => {
    const route = routes[element.dataset.path];
    if (!route) return;
    const destination = new URL(route, rootUrl).href;
    if (element.matches('a')) {
      element.setAttribute('href', destination);
      element.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.assign(destination);
      });
    } else {
      element.addEventListener('click', () => {
        window.location.assign(destination);
      });
    }
  });

  const labelRoutes = {
    Inicio: 'inicio',
    PROMs: 'proms',
    'Red Apoyo': 'red-de-apoyo',
    Tratamiento: 'tratamiento'
  };

  document.querySelectorAll('a[href="#"]').forEach((link) => {
    const label = link.textContent.replace(/\s+/g, ' ').trim();
    const path = Object.keys(labelRoutes).find((name) => label.includes(name));
    if (!path || link.dataset.path) return;
    const destination = new URL(routes[labelRoutes[path]], rootUrl).href;
    link.setAttribute('href', destination);
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.assign(destination);
    });
  });

  document.querySelectorAll('[aria-label="Volver a Inicio"]').forEach((element) => {
    const destination = new URL(routes.inicio, rootUrl).href;
    element.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.assign(destination);
    });
  });
})();