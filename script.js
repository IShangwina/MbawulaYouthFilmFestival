    
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

// Add this to your existing JS
document.addEventListener('DOMContentLoaded', () => {
  const reel = document.querySelector('.film-reel');
  const reelImgs = reel.querySelectorAll('img');
  
  // Make sure images are the same height
  reelImgs.forEach(img => {
    img.style.height = '60px'; // Match CSS height
  });
  
  // Pause animation on hover
  reel.addEventListener('mouseenter', () => {
    reel.style.animationPlayState = 'paused';
  });
  
  reel.addEventListener('mouseleave', () => {
    reel.style.animationPlayState = 'running';
  });
});
 