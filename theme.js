// Dark mode toggle that remembers the user's choice with localStorage
(function() {
  "use strict";

  window.addEventListener("load", init);

  function init() {
    // load the saved theme (if there is one) when the page opens
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
    updateButton();
    document.getElementById("theme-btn").addEventListener("click", toggleTheme);
  }

  function toggleTheme() {
    document.body.classList.toggle("dark");
    let theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    updateButton();
  }

  function updateButton() {
    let dark = document.body.classList.contains("dark");
    document.getElementById("theme-btn").textContent = dark ? "Light mode" : "Dark mode";
  }
})();
