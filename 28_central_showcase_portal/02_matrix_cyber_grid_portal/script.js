const CYBER_DATA = [
  {
    id: "NODE_01",
    title: "Interactive Bento Spotlight",
    category: "BENTO_GRID",
    desc: "Apple & Linear style bento layouts with multi-layer cursor spotlights and 3D gyroscope hover.",
    url: "../../23_interactive_bento_grids/index.html",
    prompt: "Create an interactive bento grid featuring a radial cursor spotlight glow tracking mouse movement across cards with GSAP."
  },
  {
    id: "NODE_02",
    title: "Bezier MotionPath Rocket",
    category: "MOTION_PATH",
    desc: "Autonomous spacecraft navigating cubic SVG Bezier curves with autoRotate and exhaust trails.",
    url: "../../24_motionpath_bezier_scroll/index.html",
    prompt: "Build an SVG MotionPath rocket flight along cubic Bezier curves with autoRotate and glowing particle exhaust using GSAP."
  },
  {
    id: "NODE_03",
    title: "Physics Inertia Fling",
    category: "PHYSICS_DRAG",
    desc: "Interactive momentum sticker board with throw fling velocity decay and edge hit testing.",
    url: "../../25_physics_draggable_playground/index.html",
    prompt: "Build an interactive sticker board with throw inertia momentum, bounds hit testing, and collision using GSAP Draggable."
  },
  {
    id: "NODE_04",
    title: "Seamless Shared Element FLIP",
    category: "TRANSITIONS",
    desc: "Smooth 60fps grid card morphing into fullscreen hero article layout using GSAP Flip plugin.",
    url: "../../26_seamless_page_transitions/index.html",
    prompt: "Create a seamless 60fps shared element card-to-hero expansion transition using GSAP Flip plugin."
  },
  {
    id: "NODE_05",
    title: "Procedural Audio Synthesizer",
    category: "AUDIO_SYNTH",
    desc: "Web Audio API dual-frequency mechanical clicks, bubble pops, and 24-band frequency spectrum visualizers.",
    url: "../../27_audio_reactive_micro_interactions/index.html",
    prompt: "Build tactile sound micro-interactions synthesized procedurally via native Web Audio API and GSAP 3."
  },
  {
    id: "NODE_06",
    title: "Matrix Text Scramble Morph",
    category: "TYPOGRAPHY",
    desc: "Decrypted hacker cipher character scrambler resolving dynamically into target phrases.",
    url: "../../12_text_scramble_matrix/index.html",
    prompt: "Create a matrix cipher text decryption effect cycling random glyphs with GSAP."
  }
];

const matrixGrid = document.getElementById('matrixGrid');
const cyberSearch = document.getElementById('cyberSearch');
const itemCounter = document.getElementById('itemCounter');
const cyberModal = document.getElementById('cyberModal');
const modalClose = document.getElementById('modalClose');
const modalNodeId = document.getElementById('modalNodeId');
const modalTitle = document.getElementById('modalTitle');
const modalPrompt = document.getElementById('modalPrompt');
const copyBtn = document.getElementById('copyBtn');
const launchBtn = document.getElementById('launchBtn');

let activePromptToCopy = '';

function renderMatrix(items) {
  matrixGrid.innerHTML = '';
  itemCounter.textContent = `INDEXED NODES: ${items.length} UNITS`;

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cyber-card';
    card.innerHTML = `
      <div class="card-top">
        <span class="node-tag">${item.id}</span>
        <span class="sec-class">// ${item.category}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <div class="cyber-card-meta">
        <span>SECURITY: VERIFIED</span>
        <span class="view-prompt">INSPECT_NODE &rarr;</span>
      </div>
    `;

    card.addEventListener('click', () => {
      openModal(item);
    });

    matrixGrid.appendChild(card);
  });

  gsap.fromTo('.cyber-card',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, stagger: 0.05, duration: 0.35, ease: 'power2.out' }
  );
}

function openModal(item) {
  modalNodeId.textContent = `[NODE::${item.id}] // ${item.category}`;
  modalTitle.textContent = item.title;
  modalPrompt.textContent = item.prompt;
  activePromptToCopy = item.prompt;
  launchBtn.href = item.url;
  cyberModal.classList.add('active');
}

modalClose.addEventListener('click', () => {
  cyberModal.classList.remove('active');
});

cyberModal.addEventListener('click', (e) => {
  if (e.target === cyberModal) {
    cyberModal.classList.remove('active');
  }
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(activePromptToCopy).then(() => {
    copyBtn.textContent = 'PROMPT COPIED!';
    setTimeout(() => {
      copyBtn.textContent = 'COPY RAW PROMPT';
    }, 2000);
  });
});

cyberSearch.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase().trim();
  const filtered = CYBER_DATA.filter(item => 
    item.title.toLowerCase().includes(q) ||
    item.desc.toLowerCase().includes(q) ||
    item.category.toLowerCase().includes(q)
  );
  renderMatrix(filtered);
});

// Keyboard shortcut Ctrl+K to focus search
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    cyberSearch.focus();
    cyberSearch.select();
  }
  if (e.key === 'Escape' && cyberModal.classList.contains('active')) {
    cyberModal.classList.remove('active');
  }
});

// Initial Render
renderMatrix(CYBER_DATA);
