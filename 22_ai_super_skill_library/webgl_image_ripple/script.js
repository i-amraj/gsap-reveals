// Create a basic Three.js scene with a custom shader to simulate a ripple
const container = document.getElementById("canvas-container");
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Load Texture
const imgElement = document.getElementById("source-image");
const texture = new THREE.TextureLoader().load(imgElement.src);

// Custom GLSL Shader
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform float uTime;
  uniform float uHoverState;
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
    // Create a wave effect based on time and hover state
    uv.y += sin(uv.x * 10.0 + uTime) * 0.05 * uHoverState;
    uv.x += cos(uv.y * 10.0 + uTime) * 0.05 * uHoverState;
    
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;
  }
`;

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTexture: { value: texture },
    uTime: { value: 0 },
    uHoverState: { value: 0 }
  }
});

const geometry = new THREE.PlaneGeometry(2, 2);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

let time = 0;
function animate() {
  time += 0.05;
  material.uniforms.uTime.value = time;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// GSAP to animate the shader uniform
container.addEventListener("mouseenter", () => {
  gsap.to(material.uniforms.uHoverState, { value: 1, duration: 1, ease: "power2.out" });
});
container.addEventListener("mouseleave", () => {
  gsap.to(material.uniforms.uHoverState, { value: 0, duration: 1, ease: "power2.out" });
});
