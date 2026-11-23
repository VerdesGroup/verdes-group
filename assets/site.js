(() => {
  const button = document.querySelector(".menu-button");
  const navigation = document.querySelector(".nav-links");

  if (button && navigation) {
    const setMenuOpen = (open) => {
      navigation.classList.toggle("open", open);
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };

    button.addEventListener("click", () => {
      setMenuOpen(!navigation.classList.contains("open"));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && navigation.classList.contains("open")) {
        setMenuOpen(false);
        button.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !button.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
