// Highlight active menu link on click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
  });
});

// Animated entrance for hero section
window.onload = function() {
  document.querySelector('.hero-section').style.opacity = "1";
  document.querySelector('.navbar').style.opacity = "1";
};

// Optionally, add animated text typing effect
document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".animated-text");
  const texts = ["Welcome to Bright Future", "Grow and Learn With Us"];
  let i = 0, j = 0, current = "";
  function type() {
    if (j < texts[i].length) {
      current += texts[i][j];
      element.textContent = current;
      j++;
      setTimeout(type, 60);
    } else {
      setTimeout(() => {
        current = ""; j = 0; i = (i+1)%texts.length; type();
      }, 1700);
    }
  }
  type();
});

