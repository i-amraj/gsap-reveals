gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("bg-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create 5000 particles
const geometry = new THREE.BufferGeometry();
const count = 5000;
const positions = new Float32Array(count * 3);

for(let i=0; i<count*3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const material = new THREE.PointsMaterial({ size: 0.02, color: 0x88ce02 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 3;

// Global object to hold rotation speed
const params = { rotationSpeed: 0.001, zSpeed: 0 };

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += params.rotationSpeed;
  particles.rotation.x += params.rotationSpeed * 0.5;
  camera.position.z += params.zSpeed;
  renderer.render(scene, camera);
}
animate();

// GSAP ScrollTrigger to manipulate params
gsap.to(params, {
  rotationSpeed: 0.05, // Spin fast
  zSpeed: -0.05, // Fly forward through them
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  }
});

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
