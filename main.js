// Change navbar styles on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('window-scroll', window.scrollY > 0);
  }
});


document.addEventListener("DOMContentLoaded", () => {

  const arrow = document.querySelector(".arrow");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuIcon = menuBtn.querySelector("i");

  // Dropdown
  arrow.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
    arrow.classList.toggle("rotate");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
    arrow.classList.remove("rotate");
  });

  dropdownMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Mobile menu
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("open");
    menuIcon.className = navLinks.classList.contains("open")
      ? "ri-close-line"
      : "ri-menu-line";
  });

});

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


  const faqs = document.querySelectorAll(".faq");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");

      // Change + / − icon
      const icon = faq.querySelector(".faq__icon i");
      if (faq.classList.contains("open")) {
        icon.classList.remove("uil-plus");
        icon.classList.add("uil-minus");
      } else {
        icon.classList.remove("uil-minus");
        icon.classList.add("uil-plus");
      }
    });
  });


