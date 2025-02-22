document.addEventListener("DOMContentLoaded", function () {

  //jejejejejeje
  function detectPHPandRedirect() {
    if (window.location.href.includes(".php") || document.documentElement.innerHTML.includes("<?php")) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}


  // Los textos que se borran y escriben xd
  const textSliderItems = [
    "practicando con código ",
        "reforzando mis estudios ",
        "centrando un heading ",
        "forzando un git push ",
        "enviando un DELETE * FROM ",
        "luchando con el hosting ",
        "evitando sudo rm -rf * ",
        "escaneando con NMAP ",
        "meditando C# > Java "
  ];


  const textSlider = document.querySelector(".text-slider");

  let currentIndex = 0; // Index de onde ta
  let currentText = ""; // El texto a mostrar
  let isDeleting = false; // Y si toca borrar xd
  let charIndex = 0; // Y el index de la letra
  const typingSpeed = 120; // En ms
  const deletingSpeed = 50; // En ms tambien
  const pause = 2000; // Y la pausa para poder leer

  function typeEffect() {
    const fullText = textSliderItems[currentIndex];

    if (isDeleting) {
      // Aca borra
      currentText = fullText.substring(0, charIndex--);
    } else {
      // Aca agrega
      currentText = fullText.substring(0, charIndex++);
    }

    textSlider.textContent = currentText;

    // La velocidad si debe borrar o escribir rapido xd
    let delay = isDeleting ? deletingSpeed : typingSpeed;

    // Y ve si la palabra esta lista
    if (!isDeleting && charIndex === fullText.length) {
      delay = pause; 
      isDeleting = true;
    }
    // O si ya esta borrada xd
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % textSliderItems.length; // Y pasa a la otra
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect(); // Empieza a disque escribir xd
});

// Aca es para mover las imagenes
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".lengs-img");
  let currentIndex = 0;

  function changeImage() {
      images[currentIndex].classList.remove("active"); // Oculta la actual
      currentIndex = (currentIndex + 1) % images.length; // Pasa a otra
      images[currentIndex].classList.add("active"); // Muestra la nueva 
  }

  setInterval(changeImage, 3000); // Cambia cada 3 segundos
});

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]"); // Solo agarra lo del id
  const navLinks = document.querySelectorAll("nav a"); // Aca los enseña en la barra

  let lastActive = navLinks[0]; // Revisa el ultimo lugar donde estaba xd

  function changeActiveLink() {
      let currentSection = null;

      sections.forEach((section) => {
          const sectionTop = section.offsetTop - 100; // La deja fija fija
          const sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              currentSection = section.getAttribute("id"); // Obtiene el ID 
          }
      });

      if (currentSection) {
          navLinks.forEach((link) => {
              link.classList.remove("active");
              if (link.getAttribute("href").substring(1) === currentSection) {
                  link.classList.add("active");
                  lastActive = link; // Guarda cual fue el ultimo
              }
          });
      } else {
          lastActive.classList.add("active"); // Mantiene la ultima parte activa
      }
  }

  window.addEventListener("scroll", changeActiveLink); // Detecta el scroll 
});
