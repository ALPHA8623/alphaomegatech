
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

// Carrusel de testimonios
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
function showTestimonial() {
  testimonials.forEach((el, i) => {
    el.style.display = (i === index) ? 'block' : 'none';
  });
  index = (index + 1) % testimonials.length;
}
setInterval(showTestimonial, 4000);
document.addEventListener('DOMContentLoaded', showTestimonial);
