(() => {
  const root = document.documentElement;
  const storageKey = "terranet-theme";

  // Set the saved theme before the page renders.
  try {
    if (window.localStorage.getItem(storageKey) === "light") {
      root.dataset.theme = "light";
    }
  } catch {
    // The default stylesheet still works if storage is unavailable.
  }

  document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".markdown-body");
    if (!content) return;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-toggle";
    button.setAttribute("aria-label", "Tmavá téma");

    function updateButton() {
      const isDark = root.dataset.theme !== "light";
      button.textContent = isDark ? "☾" : "☀";
      button.title = isDark ? "Prepnúť na svetlú tému" : "Prepnúť na tmavú tému";
      button.setAttribute("aria-pressed", String(isDark));
    }

    button.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "light" ? "dark" : "light";
      updateButton();
      try {
        window.localStorage.setItem(storageKey, root.dataset.theme);
      } catch {
        // The current page can still switch themes.
      }
    });

    updateButton();
    content.prepend(button);
  });
})();
