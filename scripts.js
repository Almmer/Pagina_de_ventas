function enableDarkMode() {
    document.body.classList.add('dark-mode');
  }
  
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }


const gallery = document.querySelector(".gallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let slideIndex = 0;


  // Función para cambiar la imagen activa en el carrusel
  function changeSlide() {
    const gallery = document.querySelector("gallery");
    const activeSlide = gallery.querySelector(".active");
    const nextSlide = activeSlide.nextElementSibling || gallery.firstElementChild;

    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }

  // Configuración del intervalo de cambio de imágenes (5 segundos en este ejemplo)
  setInterval(changeSlide, 5000);


function showSlide(index) {
  const slides = gallery.querySelectorAll("img");
  slideIndex = index;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Mostrar la primera imagen al cargar la página
showSlide(slideIndex);

// JavaScript para el formulario de contacto
const contactForm = document.getElementById("contactForm");
const confirmationMsg = document.getElementById("confirmationMsg");

function showConfirmation() {
  contactForm.style.display = "none";
  confirmationMsg.style.display = "block";
}

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Aquí puedes agregar el código para enviar el formulario utilizando AJAX o fetch en lugar de la redirección del formulario tradicional.

  // Simulando el envío del formulario con una función setTimeout (reemplazar esto con el código de envío real)
  setTimeout(function () {
    showConfirmation();
  }, 1000); // Mostrar confirmación después de 1 segundo (1000 ms) de simular el envío
});
  
  