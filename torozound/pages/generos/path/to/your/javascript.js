window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.style.backgroundPositionY = window.scrollY * 0.5 + 'px';
  });
  
  
  const buttons = document.querySelectorAll('.artist-card a');
  
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.3s ease-in-out';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  const cardTexts = document.querySelectorAll('.artist-card p, .artist-card h3, .artist-card ul li');
  
  cardTexts.forEach(text => {
    text.addEventListener('mouseover', () => {
      text.style.textShadow = '0 0 10px var(--highlight-color), 0 0 20px var(--highlight-color)';
      text.style.transition = 'text-shadow 0.5s ease';
    });
  
    text.addEventListener('mouseout', () => {
      text.style.textShadow = 'none';
    });
  });
  
  const artistCards = document.querySelectorAll('.artist-card');
  
  const zoomObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'scale(1)';
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.2, 
  });
  
  artistCards.forEach(card => {
    card.style.transform = 'scale(0.8)';
    card.style.opacity = 0;
    card.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
    zoomObserver.observe(card);
  });
  