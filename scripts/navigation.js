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

  const deviceStyle = document.createElement('style');
  deviceStyle.textContent = `
    :root { --device-width: 390px; }
    html.device-preview-root {
      width: min(var(--device-width), 100vw) !important;
      min-width: min(var(--device-width), 100vw) !important;
      margin: 0 auto !important;
      overflow-x: hidden !important;
      background: #eef2f0;
      transition: background-color 180ms ease;
    }
    html.device-preview-root.surround-dark {
      background: #18221f;
    }
    body.device-preview {
      position: relative !important;
      width: min(var(--device-width), 100vw) !important;
      min-width: min(var(--device-width), 100vw) !important;
      max-width: var(--device-width) !important;
      min-height: 100vh !important;
      margin: 0 auto !important;
      overflow-x: hidden !important;
      background: #f8faf9;
      border-left: 1px solid rgba(25, 28, 28, 0.14);
      border-right: 1px solid rgba(25, 28, 28, 0.14);
      box-shadow: 0 0 0 10px rgba(25, 28, 28, 0.035), 0 18px 50px rgba(25, 28, 28, 0.18);
    }
    body.device-preview > *:not(.device-switcher),
    body.device-preview .max-w-lg,
    body.device-preview .max-w-md,
    body.device-preview .max-w-sm {
      max-width: 100% !important;
      box-sizing: border-box;
    }
    body.device-preview::before {
      content: '';
      position: fixed;
      z-index: 100;
      top: 10px;
      left: 50%;
      width: 88px;
      height: 5px;
      border-radius: 99px;
      background: rgba(25, 28, 28, 0.28);
      transform: translateX(-50%);
      pointer-events: none;
    }
    body.device-preview .fixed {
      position: fixed !important;
    }
    body.device-preview .fixed.w-full,
    body.device-preview .fixed.inset-x-0 {
      left: max(0px, calc((100vw - min(var(--device-width), 100vw)) / 2)) !important;
      right: auto !important;
      width: min(var(--device-width), 100vw) !important;
    }
    body.device-preview .fixed.inset-0 {
      left: max(0px, calc((100vw - min(var(--device-width), 100vw)) / 2)) !important;
      right: max(0px, calc((100vw - min(var(--device-width), 100vw)) / 2)) !important;
      width: auto !important;
    }
    body.device-preview .fixed.bottom-20,
    body.device-preview .fixed.bottom-24 {
      right: max(1rem, calc((100vw - min(var(--device-width), 100vw)) / 2 + 1rem)) !important;
    }
    .device-switcher {
      position: fixed;
      top: 18px;
      left: 18px;
      z-index: 200;
      display: flex;
      gap: 4px;
      padding: 4px;
      border: 1px solid rgba(25, 28, 28, 0.12);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 24px rgba(25, 28, 28, 0.12);
      backdrop-filter: blur(12px);
    }
    .device-switcher button {
      border: 0;
      border-radius: 8px;
      padding: 7px 10px;
      color: #414845;
      background: transparent;
      font: 600 12px/1.2 Plus Jakarta Sans, sans-serif;
      cursor: pointer;
    }
    .device-switcher button[aria-pressed="true"] {
      color: #fff;
      background: #406255;
    }
    .surround-switcher {
      position: fixed;
      top: 18px;
      right: 18px;
      z-index: 200;
      width: 38px;
      height: 38px;
      border: 1px solid rgba(25, 28, 28, 0.12);
      border-radius: 12px;
      color: #414845;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 8px 24px rgba(25, 28, 28, 0.12);
      backdrop-filter: blur(12px);
      cursor: pointer;
      font-size: 18px;
    }
    html.surround-dark .surround-switcher {
      color: #f6d98b;
      background: #26332f;
      border-color: #4b5b54;
    }
    @media (max-width: 700px) {
      body.device-preview {
        width: 100% !important;
        min-width: 100% !important;
        border: 0;
        box-shadow: none;
      }
      body.device-preview::before,
      .device-switcher,
      .surround-switcher { display: none; }
    }
  `;
  document.head.appendChild(deviceStyle);
  document.documentElement.classList.add('device-preview-root');
  document.body.classList.add('device-preview');

  const switcher = document.createElement('div');
  switcher.className = 'device-switcher';
  switcher.setAttribute('aria-label', 'Tamaño de vista');
  switcher.innerHTML = '<button type="button" data-device="phone">Teléfono</button><button type="button" data-device="tablet">Tablet</button>';
  document.body.appendChild(switcher);
  const savedDevice = localStorage.getItem('menteserena-device') || 'phone';
  const setDevice = (device) => {
    document.documentElement.style.setProperty('--device-width', device === 'tablet' ? '768px' : '390px');
    switcher.querySelectorAll('button').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.device === device));
    });
    localStorage.setItem('menteserena-device', device);
  };
  switcher.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => setDevice(button.dataset.device));
  });
  setDevice(savedDevice);

  const surroundButton = document.createElement('button');
  surroundButton.className = 'surround-switcher';
  surroundButton.type = 'button';
  surroundButton.setAttribute('aria-label', 'Cambiar fondo exterior de la interfaz');
  surroundButton.addEventListener('click', () => {
    const isDark = !document.documentElement.classList.contains('surround-dark');
    document.documentElement.classList.toggle('surround-dark', isDark);
    surroundButton.textContent = isDark ? '☀' : '☾';
    surroundButton.setAttribute('aria-pressed', String(isDark));
    localStorage.setItem('menteserena-surround', isDark ? 'dark' : 'light');
  });
  document.body.appendChild(surroundButton);
  const savedSurround = localStorage.getItem('menteserena-surround') || 'light';
  document.documentElement.classList.toggle('surround-dark', savedSurround === 'dark');
  surroundButton.textContent = savedSurround === 'dark' ? '☀' : '☾';
  surroundButton.setAttribute('aria-pressed', String(savedSurround === 'dark'));

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

  document.querySelectorAll('[aria-label="Ir a Mi Perfil y Configuración"]').forEach((element) => {
    const destination = new URL(routes.perfil, rootUrl).href;
    if (element.matches('a')) element.setAttribute('href', destination);
    element.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.assign(destination);
    });
  });
})();