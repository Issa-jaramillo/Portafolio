document.addEventListener("DOMContentLoaded", function() {
  const colorToggleBtn = document.getElementById("colorToggle");
  const toggleIcon = document.getElementById("toggleIcon");
  const body = document.body;
  const root = document.querySelector(':root');

  colorToggleBtn.addEventListener("click", function() {
      const isDarkMode = body.classList.contains("dark-mode");
      body.classList.toggle("dark-mode");
      toggleIcon.classList.toggle("fa-toggle-on", !isDarkMode);
      toggleIcon.classList.toggle("fa-toggle-off", isDarkMode);

      // Actualiza los colores del degradado según el modo de la página
      if (isDarkMode) {
          // root.style.setProperty('--modo-claro-bg-start', '#333333'); // Color de inicio del degradado en modo oscuro
          // root.style.setProperty('--modo-claro-bg-end', '#2c2c2c'); // Color de fin del degradado en modo oscuro
              // root.style.setProperty('--modo-oscuro-bg-start', '#71ceec'); // Color de inicio del degradado en modo claro
          root.style.setProperty('--modo-oscuro-bg-end', '#2c2c2c'); // Color de fin del degradado en modo claro
      } else {
          // root.style.setProperty('--modo-claro-bg-start', '#ffffff'); // Color de inicio del degradado en modo claro
          // root.style.setProperty('--modo-claro-bg-end', '#f0f0f0'); // Color de fin del degradado en modo claro
          //  root.style.setProperty('--modo-claro-bg-start', '#fa8ed2'); // Color de inicio del degradado en modo oscuro
          root.style.setProperty('--modo-claro-bg-end', '#f0f0f0'); // Color de fin del degradado en modo oscuro
      }
  });

  // Al cargar la página, verifica el modo de la página y actualiza los colores del degradado
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
      // root.style.setProperty('--modo-claro-bg-start', '#fa8ed2'); // Color de inicio del degradado en modo oscuro
      // root.style.setProperty('--modo-claro-bg-end', '#fa8ed2'); // Color de fin del degradado en modo oscuro
      // root.style.setProperty('--modo-oscuro-bg-start', '#71ceec'); // Color de inicio del degradado en modo claro
      // root.style.setProperty('--modo-oscuro-bg-end', '#2c2c2c'); // Color de fin del degradado en modo claro
  } else {
      // root.style.setProperty('--modo-claro-bg-start', '#71ceec'); // Color de inicio del degradado en modo claro
      // root.style.setProperty('--modo-claro-bg-end', '#71ceec'); // Color de fin del degradado en modo claro
        root.style.setProperty('--modo-claro-bg-start', '#fa8ed2'); // Color de inicio del degradado en modo oscuro
      root.style.setProperty('--modo-claro-bg-end', '#f0f0f0'); // Color de fin del degradado en modo oscuro
  }
});
