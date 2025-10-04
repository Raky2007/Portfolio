// Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active nav link highlighting
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.navbar ul li a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Floating Particles Animation
  function createParticles() {
    const container = document.querySelector('.particles-container');
    
    function addParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 3px and 10px
      const size = Math.random() * 7 + 3;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random horizontal position
      particle.style.left = `${Math.random() * 100}%`;
      
      // Random horizontal drift
      const drift = (Math.random() - 0.5) * 100;
      particle.style.setProperty('--drift', `${drift}px`);
      
      // Random animation duration between 8-15 seconds
      const duration = Math.random() * 7 + 8;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 2}s`;
      
      container.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, (duration + 2) * 1000);
    }
    
    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => addParticle(), i * 200);
    }
    
    // Continuously add new particles
    setInterval(addParticle, 600);
  }

  // Start particles animation when page loads
  window.addEventListener('load', createParticles);

  