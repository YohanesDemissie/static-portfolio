document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".content-container");

    if (container) {
      // Delay fade-in to allow initial paint
      requestAnimationFrame(() => {
        container.classList.add("fade-in");
      });
    }

    const links = document.querySelectorAll("a[href]");

    links.forEach(link => {
      link.addEventListener("click", function (e) {
        const href = link.getAttribute("href");

        // Skip in-page anchors
        if (href.startsWith("#")) return;

        // Only intercept same-origin links
        if (link.hostname === window.location.hostname) {
          e.preventDefault();

          if (container) {
            container.classList.remove("fade-in");
            container.classList.add("fade-out");
          }

          setTimeout(() => {
            window.location.href = href;
          }, 500); // match transition duration
        }
      });
    });
  });