function animateTitle() {
  const K = document.title;
  const n = [
    's|',
    'si|',
    'sif|',
    'sifc|',
    'sifco|',
    'sifcop',
    'sifco|',
    'sifcop|',
    'sifco|',
    'sifc|',
    'sif|',
    'si|',
    's|',
  ];
  let U = 0;

  function f() {
    document.title = n[U] + '.club';
    U = (U + 1) % n.length;
  }

  // Agregar la etiqueta de icono al título
  const iconLink = document.createElement('link');
  iconLink.rel = 'icon';
  iconLink.href = 'https://cdn.discordapp.com/emojis/1146522063159443527.gif?size=96&quality=lossless';
  document.head.appendChild(iconLink);

  const C = setInterval(f, 500);
}

animateTitle();
