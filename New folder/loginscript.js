document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const popup = document.getElementById('popup');
  const closeBtn = document.getElementById('closeBtn');
  const flipBtns = document.querySelectorAll('.flip-btn');

  if (!card || !popup || !closeBtn) return; // safety

  // Toggle flip when user clicks any flip control (Sign Up / Login)
  flipBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      card.classList.toggle('flipped');
    });

    // accessibility: allow Enter/Space when focused
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });

  // Close button — hides the whole container and resets card state
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    card.classList.remove('flipped'); // reset to login face
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      popup.classList.add('hidden');
      card.classList.remove('flipped');
    }
  });
});
