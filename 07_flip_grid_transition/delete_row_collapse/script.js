gsap.registerPlugin(Flip);

const delBtns = document.querySelectorAll('.del-btn');

delBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('.row');
    
    // 1. Get state of all rows
    const state = Flip.getState('.row');
    
    // 2. Make DOM Change: Completely remove the row
    row.remove();
    
    // 3. Flip!
    Flip.from(state, {
      duration: 0.5,
      ease: "power2.inOut",
      absolute: true, // Necessary so the removed item is taken out of flow and overlayed perfectly
      onLeave: elements => {
        // Elements that were in the state but are no longer in the DOM are passed to onLeave
        // We animate them fading and shrinking to 0 height.
        // Because Flip uses absolute positioning, the elements below will smoothly glide up to fill the gap!
        gsap.to(elements, {
          height: 0,
          opacity: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
          duration: 0.5,
          ease: "power2.inOut"
        });
      }
    });
  });
});
