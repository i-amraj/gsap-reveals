// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById('timeWidget').textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();

// macOS Dock Magnification Physics
const dockShelf = document.getElementById('dockShelf');
const dockItems = document.querySelectorAll('.dock-item');
const stageCard = document.getElementById('stageCard');
const stageIcon = document.getElementById('stageIcon');
const stageCat = document.getElementById('stageCat');
const stageTitle = document.getElementById('stageTitle');
const stageDesc = document.getElementById('stageDesc');
const stageLink = document.getElementById('stageLink');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const toast = document.getElementById('toast');

let activePrompt = "Create modern bento grid cards with cursor spotlights and 3D tilt hover physics using GSAP.";

dockShelf.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;

  dockItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const itemCenter = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - itemCenter);
    const maxDist = 140;

    if (distance < maxDist) {
      // Gaussian curve magnification factor
      const norm = 1 - distance / maxDist;
      const scale = 1 + norm * 0.55; // Up to 1.55x magnification
      const translateY = -norm * 22; // Lift upwards
      gsap.to(item, {
        scale: scale,
        y: translateY,
        duration: 0.15,
        ease: 'power1.out',
        overwrite: 'auto'
      });
    } else {
      gsap.to(item, {
        scale: 1,
        y: 0,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  });
});

dockShelf.addEventListener('mouseleave', () => {
  dockItems.forEach(item => {
    gsap.to(item, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: 'elastic.out(1, 0.4)',
      overwrite: 'auto'
    });
  });
});

// Click Dock Item to Update Center Stage
dockItems.forEach(item => {
  item.addEventListener('click', () => {
    // Dock icon bounce
    gsap.timeline()
      .to(item, { y: -30, duration: 0.15, ease: 'power2.out' })
      .to(item, { y: 0, duration: 0.35, ease: 'bounce.out' });

    // Update Stage Data
    const icon = item.getAttribute('data-icon');
    const cat = item.getAttribute('data-cat');
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const url = item.getAttribute('data-url');
    activePrompt = item.getAttribute('data-prompt');

    // Stage card transition
    gsap.timeline()
      .to(stageCard, {
        scale: 0.96,
        opacity: 0.7,
        duration: 0.12,
        onComplete: () => {
          stageIcon.textContent = icon;
          stageCat.textContent = cat;
          stageTitle.textContent = title;
          stageDesc.textContent = desc;
          stageLink.href = url;
        }
      })
      .to(stageCard, {
        scale: 1,
        opacity: 1,
        duration: 0.25,
        ease: 'back.out(1.8)'
      });
  });
});

// Copy Prompt to Clipboard
copyPromptBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(activePrompt).then(() => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  });
});
