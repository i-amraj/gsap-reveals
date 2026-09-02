gsap.registerPlugin(Flip);

const btns = document.querySelectorAll('.add-btn');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
let count = 0;

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    
    const product = btn.closest('.product');
    const imgNode = product.querySelector('.prod-img');
    
    // 1. Create a clone
    const clone = imgNode.cloneNode(true);
    clone.classList.add('flying-clone');
    
    // Append to body and position perfectly over the original
    document.body.appendChild(clone);
    Flip.fit(clone, imgNode); 
    
    // 2. Get State of the clone at its starting position
    const state = Flip.getState(clone);
    
    // 3. Make DOM Change: Move clone inside the cart icon
    cartIcon.appendChild(clone);
    
    // 4. Flip! It will animate from the body (grid position) to the cart icon (its new parent)
    Flip.from(state, {
      duration: 0.8,
      ease: "power2.in", // Speeds up as it falls into the cart
      absolute: true,
      scale: true,
      onComplete: () => {
        // Remove clone after animation finishes
        clone.remove();
        
        // Update cart counter with a little bounce
        count++;
        cartCount.innerText = count;
        gsap.fromTo(cartCount, 
          { scale: 1.5 }, 
          { scale: 1, duration: 0.3, ease: "back.out(2)" }
        );
        gsap.fromTo(cartIcon,
          { y: 5 },
          { y: 0, duration: 0.3, ease: "bounce.out" }
        )
      }
    });
  });
});
