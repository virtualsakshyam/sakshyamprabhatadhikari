// Smooth scrolling for anchor links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Project card hover animation
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.setAttribute('data-hover', 'View Project');
  });
});

// Form submission alert
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for reaching out! I will respond soon.');
});
