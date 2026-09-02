const wrapper = document.querySelector('.card-wrapper');
const slices = document.querySelectorAll('.slice');

const maxRotation = 20; 

wrapper.addEventListener('mousemove', (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); 
  const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); 
  
  slices.forEach((slice, index) => {
    // Left gets -40z, Center gets 40z, Right gets -40z (creates a staggered wave)
    let zDepth = 0;
    if (index === 0) zDepth = -40;
    if (index === 1) zDepth = 60;
    if (index === 2) zDepth = -40;

    gsap.to(slice, {
      rotationY: x * maxRotation,
      rotationX: -y * maxRotation,
      z: zDepth,
      duration: 0.5,
      ease: "power2.out"
    });
  });
});

wrapper.addEventListener('mouseleave', () => {
  slices.forEach(slice => {
    gsap.to(slice, {
      rotationY: 0,
      rotationX: 0,
      z: 0,
      duration: 1,
      ease: "elastic.out(1, 0.4)"
    });
  });
});
