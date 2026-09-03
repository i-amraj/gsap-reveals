gsap.registerPlugin(ScrollTrigger);

// 1. Setup Three.js Scene
const canvas = document.getElementById("webgl-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Create a 3D Cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshNormalMaterial({ wireframe: false });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
cube.position.x = 2; // Start on right

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // Idle continuous rotation
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render(scene, camera);
}
animate();

// Handle Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 2. Setup GSAP ScrollTrigger to manipulate the Three.js Cube
const steps = document.querySelectorAll(".step");

// Step 1 to 2
gsap.to(cube.position, {
  x: -2, // Move left
  y: -1,
  scrollTrigger: {
    trigger: steps[1],
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
});
gsap.to(cube.rotation, {
  y: Math.PI,
  scrollTrigger: {
    trigger: steps[1],
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
});

// Step 2 to 3
gsap.to(cube.position, {
  x: 2, // Move right
  z: 2, // Move closer
  scrollTrigger: {
    trigger: steps[2],
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
});

// Step 3 to 4
gsap.to(cube.scale, {
  x: 0, y: 0, z: 0, // Shrink to nothing
  scrollTrigger: {
    trigger: steps[3],
    start: "top bottom",
    end: "center center",
    scrub: 1
  }
});
