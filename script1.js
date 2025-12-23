 const items = document.querySelectorAll(".edu-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => observer.observe(item));