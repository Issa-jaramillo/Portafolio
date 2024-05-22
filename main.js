// document.addEventListener("DOMContentLoaded", function() {
//     const colorToggleButton = document.getElementById("colorToggle");
//     colorToggleButton.addEventListener("click", function() {
//       document.body.classList.toggle("dark-mode");
//     });
//   });
  

document.addEventListener("DOMContentLoaded", function() {
  const colorToggleBtn = document.getElementById("colorToggle");
  const body = document.body;

  colorToggleBtn.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
  });
});
