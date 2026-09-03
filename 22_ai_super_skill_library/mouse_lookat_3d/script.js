// Basic Three.js setup
const canvas = document.getElementById("eye-canvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(400, 400);

// Create a basic eye geometry (a white sphere)
const eyeGeometry = new THREE.SphereGeometry(2, 32, 32);
const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
scene.add(eye);

// Add an iris (a smaller black sphere sticking out slightly)
const irisGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const irisMaterial = new THREE.MeshPhongMaterial({ color: 0x111111 });
const iris = new THREE.Mesh(irisGeometry, irisMaterial);
iris.position.z = 1.7; // Push it to the front surface of the eye
eye.add(iris); // Add it as a child so it rotates with the eye

// Lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040));

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// GSAP to map mouse coordinates to eye rotation
const rxTo = gsap.quickTo(eye.rotation, "x", { duration: 0.5, ease: "power3" });
const ryTo = gsap.quickTo(eye.rotation, "y", { duration: 0.5, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  // Normalize mouse coordinates from -1 to 1
  const nx = (e.clientX / window.innerWidth) * 2 - 1;
  const ny = -(e.clientY / window.innerHeight) * 2 + 1; // Negative because WebGL Y goes up
  
  // Rotate eye based on normalized coordinates (max rotation ~ 1 radian)
  ryTo(nx * 1);
  rxTo(-ny * 1); // Negative to make it look AT the mouse
});
