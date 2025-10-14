// Change navbar styles on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('window-scroll', window.scrollY > 0);
  }
});

// Show/Hide FAQ
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // Change icon
    const icon = faq.querySelector('.faq__icon i');
    if (icon) {
      if (icon.classList.contains('uil-plus')) {
        icon.className = 'uil uil-minus';
      } else {
        icon.className = 'uil uil-plus';
      }
    }
  });
});

// Show/Hide nav menu
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

if (menu && menuBtn && closeBtn) {
  menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
  });

  const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
  };

  closeBtn.addEventListener('click', closeNav);
}



document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-wrapper > *");
  const speed = 40; // lower = faster (px per second)

  // Clone slides for seamless loop
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    wrapper.appendChild(clone);
  });

  let position = 0;

  function animate() {
    position -= 1; // adjust speed (smaller = slower)
    wrapper.style.transform = `translateX(${position}px)`;

    const firstSlide = wrapper.children[0];
    const firstSlideWidth = firstSlide.offsetWidth;

    // When first slide fully leaves viewport, move it to end
    if (Math.abs(position) >= firstSlideWidth) {
      wrapper.appendChild(firstSlide);
      position += firstSlideWidth;
    }

    requestAnimationFrame(animate);
  }

  // Apply styles dynamically
  wrapper.style.display = "flex";
  wrapper.style.transition = "none";
  wrapper.style.willChange = "transform";

  animate();
});

document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  dropdownToggle.addEventListener('click', function(e) {
    e.preventDefault(); // prevent jumping to top
    dropdown.classList.toggle('active'); // toggle dropdown visibility
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});