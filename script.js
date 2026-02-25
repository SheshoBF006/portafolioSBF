
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Listeners del Documento

//DOCS DOCUMENTATION EMAILJS
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('vdLqS9Qe-Qy9hJHLP'); 

  //Anti PHP
  function detectPHPandRedirect() {
    if (
      window.location.href.includes('.php') ||
      document.documentElement.innerHTML.includes('<?php')
    ) {
      window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    }
  }

  detectPHPandRedirect()

  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = contactForm.user_name.value.trim();
    const correo = contactForm.user_email.value.trim();
    const asunto = contactForm.subject.value.trim();
    const mensaje = contactForm.message.value.trim();

    if (!nombre || !correo || !asunto || !mensaje) {
      alert('Por favor completa todos los campos.');
      return;
    }

    emailjs.sendForm('service_ngd6yal', 'template_3016ixi', contactForm)
      .then(() => {
        alert(`Gracias por tu mensaje, ${nombre}!`);
        contactForm.reset();
      })
      .catch((error) => {
        console.error('Error al enviar:', error);
        alert('Hubo un problema al enviar el mensaje. Intenta más tarde.');
      });
  });
});


// Animación al hacer scroll
const revealElements = document.querySelectorAll('section');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Por si ya estan visibles al cargar


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

const textSlider = document.querySelector(".typed-text");

let currentIndex = 0;
let currentText = "";
let isDeleting = false;
let charIndex = 0;

const typingSpeed = 120;
const deletingSpeed = 50;
const pause = 2000;

function typeEffect() {
  const fullText = textSliderItems[currentIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  textSlider.textContent = currentText;

  let delay = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === fullText.length) {
    delay = pause;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % textSliderItems.length;
  }

  setTimeout(typeEffect, delay);
}

typeEffect();

const starsLayer = document.getElementById("stars");

// Personalización (equivalente a tu tutorial)
const number_of_star = 150;     // cantidad
const min_radius = 1;           // radio mínimo
const max_radius = 4;           // radio máximo
const min_duration = 6;         // velocidad mínima (segundos)
const max_duration = 16;        // velocidad máxima

function random_number(min, max) {
  // entero entre min y max
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createStars() {
  // Limpia si reinicias en resize
  starsLayer.innerHTML = "";

  const h = window.innerHeight;
  const w = window.innerWidth;

  for (let i = 0; i < number_of_star; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const top = random_number(0, h);
    const left = random_number(0, w);
    const radius = random_number(min_radius, max_radius);
    const duration = random_number(min_duration, max_duration);

    // alterna animación izquierda/derecha
    const animName = (i % 2 === 0) ? "move_right" : "move_left";

    star.style.top = `${top}px`;
    star.style.left = `${left}px`;
    star.style.width = `${radius}px`;
    star.style.height = `${radius}px`;
    star.style.animationName = animName;
    star.style.animationDuration = `${duration}s`;

    starsLayer.appendChild(star);
  }
}

createStars();

// Opcional: si cambias tamaño de ventana, recalcula área
window.addEventListener("resize", () => {
  createStars();
});
