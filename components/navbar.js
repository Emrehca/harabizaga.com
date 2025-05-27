fetch("components/navbar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("navbar-placeholder").innerHTML = html;

    const toggle = document.getElementById("menu-toggle");
    const links = document.getElementById("nav-links");

    // Menü toggle
    if (toggle && links) {
      const toggleMenu = () => {
        links.classList.toggle("active");
      };
      toggle.addEventListener("click", toggleMenu);
      toggle.addEventListener("keydown", (e) => {
        if (e.key === "Enter") toggleMenu();
      });

      // Dışarı tıklanınca menüyü kapat
      document.addEventListener("click", (e) => {
        if (!toggle.contains(e.target) && !links.contains(e.target)) {
          links.classList.remove("active");
        }
      });
    }
  });