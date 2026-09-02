gsap.registerPlugin(Flip);

const thumbs = document.querySelectorAll('.thumb');
const overlay = document.querySelector('.overlay');

let activeThumb = null;

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    
    // 1. Get State
    // We only need to flip the thumbnail that is clicked, but capturing all is fine too.
    const state = Flip.getState(thumb);
    
    // 2. Change DOM State
    const isExpanding = !thumb.classList.contains('active-hero');
    
    if (isExpanding) {
      // If another is active, close it first (for safety)
      if (activeThumb && activeThumb !== thumb) {
        activeThumb.classList.remove('active-hero');
      }
      thumb.classList.add('active-hero');
      activeThumb = thumb;
      gsap.to(overlay, { opacity: 1, duration: 0.5 });
    } else {
      thumb.classList.remove('active-hero');
      activeThumb = null;
      gsap.to(overlay, { opacity: 0, duration: 0.5 });
    }

    // 3. Flip
    Flip.from(state, {
      duration: 0.8,
      ease: "power3.inOut",
      absolute: true // Crucial for moving out of grid flow smoothly
    });
  });
});
