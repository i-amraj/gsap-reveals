gsap.registerPlugin(Flip);

const dashboard = document.getElementById('dashboard');
const toggleBtn = document.getElementById('toggle-sidebar');
const widgets = document.querySelectorAll('.widget');

toggleBtn.addEventListener('click', () => {
  // 1. Get State of the widgets in the grid
  const state = Flip.getState(widgets);
  
  // 2. DOM Change: Toggle the sidebar class.
  // This triggers a CSS transition on the sidebar width, which shrinks the main content area.
  dashboard.classList.toggle('sidebar-open');
  
  // 3. Flip!
  // Because the sidebar is animating via CSS transition over 0.6s,
  // we tell Flip to animate the widgets over the same duration.
  Flip.from(state, {
    duration: 0.6,
    ease: "power2.inOut",
    absolute: true, // Crucial for responsive wrapping layout changes
    scale: true
  });
});
