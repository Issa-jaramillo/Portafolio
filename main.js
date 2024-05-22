document.addEventListener("DOMContentLoaded", function() {
    const colorToggleButton = document.getElementById("colorToggle");
    colorToggleButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  });
  