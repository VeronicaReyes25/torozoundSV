// Efecto de fade-in para las tarjetas cuando se hacen visibles al hacer scroll
const cards = document.querySelectorAll('.artist-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1, // Se activará cuando el 10% de la tarjeta sea visible
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(50px)';
  card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(card);
});

// Efecto de brillo en los enlaces al hacer hover
const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.boxShadow = '0 0 10px var(--highlight-color)';
    link.style.transition = 'box-shadow 0.3s ease-in-out';
  });

  link.addEventListener('mouseout', () => {
    link.style.boxShadow = 'none';
  });
});

// Transición suave en las tarjetas al hacer hover
cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; // Cambia el color de fondo
    card.style.transition = 'background-color 0.5s ease';
  });

  card.addEventListener('mouseout', () => {
    card.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  });
});

// Desplazamiento suave entre las secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


