/* Light is the default. The header button switches themes and the choice is
   remembered in the visitor's browser. This file is loaded in <head> so the
   saved theme applies before the page is drawn. */
(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function saved() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function apply(theme) {
    root.dataset.theme = theme;
    var button = document.querySelector(".theme-toggle");
    if (button) {
      var label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      button.setAttribute("aria-label", label);
      button.title = label;
    }
  }

  apply(saved() === "dark" ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;

    apply(root.dataset.theme);
    button.hidden = false;
    button.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked */ }
    });
  });

  /* Pages restored by the Back button may hold an older theme. */
  window.addEventListener("pageshow", function (event) {
    var theme = saved();
    if (event.persisted && theme) apply(theme === "dark" ? "dark" : "light");
  });
})();
