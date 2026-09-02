gsap.registerPlugin(Flip);

const container = document.getElementById('flex-box');
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    
    // Check if there is a next sibling to swap with
    const nextSibling = tag.nextElementSibling;
    
    if (nextSibling) {
      // 1. Get State
      const state = Flip.getState(tags);
      
      // 2. DOM Change: Swap them
      // To swap A and B, we insert B before A.
      container.insertBefore(nextSibling, tag);
      
      // 3. Flip
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        absolute: true, // Prevents sudden jumps during wrap calculation
      });
    } else {
      // If it's the last element, move it to the front
      const state = Flip.getState(tags);
      container.prepend(tag);
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        absolute: true
      });
    }
  });
});
