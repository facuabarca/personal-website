import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const gradientBackground = document.querySelector(".gradient-background");

  document.addEventListener("mousemove", (event) => {
    const { clientX, clientY } = event;

    gradientBackground.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  });

  const sections = document.querySelectorAll("main#content section");
  const navLi = document.querySelectorAll(".nav ul li a");
  const scrollContainer = document.getElementById("scroll-container");

  scrollContainer.addEventListener("scroll", function () {
    var current = "";

    // Verificar si está en la parte superior del contenedor
    if (scrollContainer.scrollTop === 0 || scrollContainer.scrollTop < 100) {
      current = sections[0].getAttribute("id");
    } else {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - scrollContainer.offsetTop;
        if (scrollContainer.scrollTop >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
    }

    navLi.forEach((a) => {
      a.classList.remove("active");
      if (a.getAttribute("href").includes(current)) {
        a.classList.add("active");
      }
    });
  });
});

