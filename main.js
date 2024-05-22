
document.addEventListener("DOMContentLoaded", function() {
  const colorToggleBtn = document.getElementById("colorToggle");
  const toggleIcon = document.getElementById("toggleIcon");
  const body = document.body;

  colorToggleBtn.addEventListener("click", function() {
      const isDarkMode = body.classList.contains("dark-mode");
      body.classList.toggle("dark-mode");
      toggleIcon.classList.toggle("fa-toggle-on", !isDarkMode);
      toggleIcon.classList.toggle("fa-toggle-off", isDarkMode);

  });
});



