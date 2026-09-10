// Master Registry of Modules and Featured Sub-Demos
const MODULES_DATA = [
  {
    id: "28",
    num: "MODULE 28",
    title: "Central Showcase & Component Portals",
    category: "portal",
    categoryName: "Showcase Portals",
    description: "8 creative showcase portal architectures: macOS dock, cyberpunk matrix, Figma spatial canvas, split-view sandbox IDE, 3D cylinder carousel, Bento dashboard, horizontal reel, and retro arcade machine.",
    hubUrl: "index.html",
    demos: [
      { name: "Component Dock", path: "01_interactive_component_dock/index.html", prompt: "Create a macOS-inspired interactive component dock launcher with Gaussian proximity magnification using GSAP 3." },
      { name: "Cyber Matrix Portal", path: "02_matrix_cyber_grid_portal/index.html", prompt: "Build a cyberpunk hacker-terminal showcase portal with command palette search and CRT scanlines using GSAP 3." },
      { name: "Infinite Spatial Canvas", path: "03_infinite_canvas_zoom_hub/index.html", prompt: "Build an infinite 2D spatial canvas showcase portal with pan and zoom capabilities using GSAP Draggable." },
      { name: "Split View Sandbox IDE", path: "04_split_view_ide_sandbox/index.html", prompt: "Build a CodePen/Webflow style split-screen sandbox IDE portal with responsive viewport framing and live iframe preview." },
      { name: "3D Cylinder Carousel", path: "05_3d_carousel_gallery_portal/index.html", prompt: "Build a 3D rotating cylinder showcase gallery using CSS 3D perspective and GSAP." },
      { name: "Bento Dashboard Hub", path: "06_bento_dashboard_analytics_hub/index.html", prompt: "Build an executive component analytics dashboard using a responsive Bento Grid architecture with GSAP 3." },
      { name: "Horizontal Drag Reel", path: "07_fullscreen_horizontal_reel_portal/index.html", prompt: "Build an Awwwards-style fullscreen horizontal card reel showcase driven by drag physics and vertical mousewheel using GSAP." },
      { name: "Retro Arcade Cabinet", path: "08_retro_arcade_cabinet_portal/index.html", prompt: "Build a nostalgic 80s/90s retro arcade machine cabinet UI with CRT scanlines and procedural 8-bit sound synthesis using GSAP 3." }
    ]
  },
  {
    id: "27",
    num: "MODULE 27",
    title: "Audio Reactive Micro-Interactions",
    category: "audio",
    categoryName: "Audio Reactive",
    description: "Zero external audio files. Procedural Web Audio API sound synthesis coupled with high-fidelity GSAP 3 spring physics and spectrum analysis.",
    hubUrl: "../27_audio_reactive_micro_interactions/index.html",
    demos: [
      { name: "Tactile Switch Click", path: "../27_audio_reactive_micro_interactions/01_tactile_switch_click/index.html", prompt: "Create an ultra-tactile realistic mechanical toggle switch using GSAP 3 and native Web Audio API dual-frequency transient synthesis." },
      { name: "Spring Pop Haptic Button", path: "../27_audio_reactive_micro_interactions/02_spring_pop_haptic_button/index.html", prompt: "Create an addictive tactile button with synthetic bubble pop haptic blips, squash & stretch, and 360-degree particle bursts." },
      { name: "Frequency Equalizer", path: "../27_audio_reactive_micro_interactions/03_sound_frequency_equalizer/index.html", prompt: "Build an interactive 24-band frequency spectrum equalizer powered by procedural Web Audio API synthesis and gsap.ticker." },
      { name: "Magnetic Hover Hum", path: "../27_audio_reactive_micro_interactions/04_magnetic_hover_hum/index.html", prompt: "Build a sci-fi magnetic core where cursor proximity dynamically modulates dual-oscillator pitch and physical pull in real-time." },
      { name: "Typewriter Keystrokes", path: "../27_audio_reactive_micro_interactions/05_typewriter_keystroke_audio/index.html", prompt: "Create a mechanical keyboard typewriter with procedural Web Audio synthesis for keystrokes and carriage return chime bells." },
      { name: "Slider Pitch Bend", path: "../27_audio_reactive_micro_interactions/06_slider_pitch_bend/index.html", prompt: "Create an analog synthesizer pitch fader using GSAP Draggable and Web Audio API with a live canvas waveform oscilloscope." },
      { name: "Card Flip Whoosh", path: "../27_audio_reactive_micro_interactions/07_card_flip_whoosh/index.html", prompt: "Create a 3D credit card flip accompanied by an acoustic air whoosh sound synthesized via Web Audio bandpass-filtered noise." },
      { name: "Achievement Fanfare", path: "../27_audio_reactive_micro_interactions/08_game_achievement_unlocked/index.html", prompt: "Create a gaming Achievement Unlocked toast banner with procedural multi-note arpeggio chime fanfare and golden confetti." }
    ]
  },
  {
    id: "26",
    num: "MODULE 26",
    title: "Seamless Page Transitions & Shared Elements",
    category: "transitions",
    categoryName: "Page Transitions",
    description: "FLIP animations, morphing hero transitions, SVG curved curtain wipes, and split-screen reveal architectures for app-like flows.",
    hubUrl: "../26_seamless_page_transitions/index.html",
    demos: [
      { name: "Grid Card to Fullscreen Hero", path: "../26_seamless_page_transitions/01_grid_card_to_fullscreen_hero/index.html", prompt: "Create a seamless 60fps shared element card-to-hero expansion transition using GSAP Flip plugin." },
      { name: "Curved SVG Curtain Wipe", path: "../26_seamless_page_transitions/02_curved_svg_curtain_wipe/index.html", prompt: "Create an organic page wipe transition using dynamic SVG Bezier path morphing with GSAP." },
      { name: "Circular Ripple Mask Portal", path: "../26_seamless_page_transitions/03_circular_ripple_mask_portal/index.html", prompt: "Create a circular ripple mask page transition originating from the exact cursor click coordinates using CSS clip-path." },
      { name: "Split Screen Blinds Reveal", path: "../26_seamless_page_transitions/04_split_screen_blinds_reveal/index.html", prompt: "Create a cinematic split-screen blinds transition using multi-panel alternating stagger reveals." },
      { name: "Thumbnail to Modal FLIP", path: "../26_seamless_page_transitions/05_thumbnail_to_modal_flip/index.html", prompt: "Create an ultra-smooth thumbnail-to-modal lightbox transition using GSAP Flip plugin." },
      { name: "Perspective Cube 3D Transition", path: "../26_seamless_page_transitions/06_perspective_cube_3d_transition/index.html", prompt: "Create a 3D tumbling cube page transition using CSS 3D perspective and GSAP." },
      { name: "Horizontal Sliding Drawer", path: "../26_seamless_page_transitions/07_horizontal_sliding_drawer/index.html", prompt: "Create an off-canvas drawer transition that pushes the main canvas with a spring bounce." },
      { name: "Staggered Content Unfold", path: "../26_seamless_page_transitions/08_staggered_content_unfold/index.html", prompt: "Create an origami-inspired staggered accordion unfold transition for multi-section content." }
    ]
  },
  {
    id: "25",
    num: "MODULE 25",
    title: "Physics & Draggable Playground",
    category: "physics",
    categoryName: "Physics & Draggable",
    description: "Inertia momentum, velocity fling gestures, multi-item collision snapping, swipeable tinder cards, and interactive canvas particle rope physics.",
    hubUrl: "../25_physics_draggable_playground/index.html",
    demos: [
      { name: "Inertia Throw Stickers", path: "../25_physics_draggable_playground/01_inertia_throw_stickers/index.html", prompt: "Build an interactive sticker board where users can drag, toss, and flick holographic stickers with realistic momentum." },
      { name: "Kanban Board Drag & Drop", path: "../25_physics_draggable_playground/02_kanban_board_drag_drop/index.html", prompt: "Create a drag-and-drop Kanban task board using GSAP Draggable with column hit-testing and dynamic ghost drop-indicators." },
      { name: "Tinder Swipe Stack Cards", path: "../25_physics_draggable_playground/03_tinder_swipe_stack_cards/index.html", prompt: "Create a swipeable card stack inspired by Tinder with threshold velocity fling and heart/cross badges." },
      { name: "Interactive Cloth Rope Physics", path: "../25_physics_draggable_playground/04_interactive_cloth_rope_physics/index.html", prompt: "Create an interactive Verlet integration canvas particle rope with spring constraints and mouse dragging." },
      { name: "Rotary Volume Knob", path: "../25_physics_draggable_playground/05_rotary_volume_knob/index.html", prompt: "Create a realistic 300-degree rotary audio knob using GSAP Draggable rotation with tactile LED tick marks." },
      { name: "Magnetic Snapping Grid", path: "../25_physics_draggable_playground/06_magnetic_snapping_grid/index.html", prompt: "Build a snap-to-grid interface where draggable app tiles automatically attract and snap to slot coordinates." },
      { name: "Fluid Liquid Slider", path: "../25_physics_draggable_playground/07_fluid_liquid_slider/index.html", prompt: "Create a liquid fluid progress slider with an elastic SVG jelly droplet handle that stretches when dragged." },
      { name: "Ball Bounce Counter", path: "../25_physics_draggable_playground/08_physics_ball_bounce_counter/index.html", prompt: "Build a physics bouncing ball game with restitution decay and live bounce score counter." }
    ]
  },
  {
    id: "24",
    num: "MODULE 24",
    title: "MotionPath & Bezier Scroll Experiences",
    category: "motionpath",
    categoryName: "MotionPath & Scroll",
    description: "Non-linear SVG curve trajectories, spaceship auto-rotation, scroll-tied timeline flight paths, drawSVG laser trails, and rollercoaster track orbits.",
    hubUrl: "../24_motionpath_bezier_scroll/index.html",
    demos: [
      { name: "Rocket Bezier Flight", path: "../24_motionpath_bezier_scroll/01_rocket_bezier_flight/index.html", prompt: "Create a rocket flight simulation along an SVG cubic Bezier curve with autoRotate and glowing particle exhaust." },
      { name: "Scroll Draw Laser Path", path: "../24_motionpath_bezier_scroll/02_scroll_draw_laser_path/index.html", prompt: "Build a multi-section timeline journey where scrolling scrub-draws a glowing laser path and milestone nodes." },
      { name: "Floating Drone Tracking", path: "../24_motionpath_bezier_scroll/03_floating_drone_cursor_tracking/index.html", prompt: "Create an autonomous companion drone following cursor position via smoothed Bezier motion path curves." },
      { name: "Rollercoaster Track Orbit", path: "../24_motionpath_bezier_scroll/04_rollercoaster_track_orbit/index.html", prompt: "Build a looping rollercoaster cart animation orbiting along an intricate SVG track with acceleration." },
      { name: "Morphing SVG Constellation", path: "../24_motionpath_bezier_scroll/05_morphing_svg_motion_constellation/index.html", prompt: "Create a morphing celestial constellation where glowing star orbs transition between geometry paths." },
      { name: "3D Spiral Helix Particle", path: "../24_motionpath_bezier_scroll/06_3d_spiral_helix_particle/index.html", prompt: "Build a 3D DNA double-helix spiral particle stream using GSAP MotionPath with depth scale and z-index sorting." },
      { name: "Paper Plane Timeline", path: "../24_motionpath_bezier_scroll/07_paper_plane_timeline_journey/index.html", prompt: "Create a playful paper airplane soaring through milestone stopovers linked to scroll scrub." },
      { name: "Curved Text Motion Path", path: "../24_motionpath_bezier_scroll/08_curved_text_motion_path/index.html", prompt: "Animate kinetic typography letters streaming seamlessly along an SVG wave curve path." }
    ]
  },
  {
    id: "23",
    num: "MODULE 23",
    title: "Interactive Bento Grids & Card Spotlight",
    category: "bento",
    categoryName: "Bento Grids",
    description: "Modern Apple/Linear-style bento layouts featuring dynamic radial cursor spotlights, 3D tilt gyroscopes, border gradient beams, and animated noise cards.",
    hubUrl: "../23_interactive_bento_grids/index.html",
    demos: [
      { name: "Mouse Spotlight Glow", path: "../23_interactive_bento_grids/01_mouse_spotlight_glow/index.html", prompt: "Build an interactive bento grid featuring a radial cursor spotlight glow tracking mouse movement across cards." },
      { name: "3D Tilt Parallax Cards", path: "../23_interactive_bento_grids/02_3d_tilt_parallax_cards/index.html", prompt: "Create bento cards with responsive 3D perspective tilt and multi-layered parallax depth." },
      { name: "Gradient Border Beam", path: "../23_interactive_bento_grids/03_gradient_border_beam/index.html", prompt: "Create an animated neon laser beam traveling endlessly around the borders of bento grid cards." },
      { name: "Noise Glow Texture Card", path: "../23_interactive_bento_grids/04_noise_glow_texture_card/index.html", prompt: "Create a cyberpunk bento card with animated SVG fractal noise grain and pulsating neon ambient backlight." },
      { name: "Expandable Modal Bento", path: "../23_interactive_bento_grids/05_expandable_modal_bento/index.html", prompt: "Build a responsive bento grid where clicking any cell expands it into a fullscreen detail view using GSAP Flip." },
      { name: "Live Data Feed Bento", path: "../23_interactive_bento_grids/06_live_data_feed_bento/index.html", prompt: "Create a live metrics dashboard bento cell with animated counter numbers and real-time SVG sparkline charts." },
      { name: "Holographic Foil Sheen", path: "../23_interactive_bento_grids/07_holographic_foil_sheen/index.html", prompt: "Create a credit-card bento cell with an iridescent rainbow holographic sheen reflecting cursor angles." },
      { name: "Glass Gradient Orbit Card", path: "../23_interactive_bento_grids/08_glass_gradient_orbit_card/index.html", prompt: "Create a glassmorphism bento card with multi-colored glowing mesh blobs orbiting continuously." }
    ]
  },
  {
    id: "01",
    num: "MODULE 01",
    title: "Text & Kinetic Typography Effects",
    category: "text",
    categoryName: "Text & Typography",
    description: "SplitText character staggers, wave reveals, scramble decoders, magnetic text, and kinetic typography ticker ribbons.",
    hubUrl: "../01_text_effects/index.html",
    demos: [
      { name: "Text Wave Stagger", path: "../01_text_effects/01_wave_stagger/index.html", prompt: "Create a fluid kinetic text wave reveal staggered letter by letter with GSAP back.out easing." },
      { name: "Cyber Scramble Decoder", path: "../01_text_effects/02_scramble_decoder/index.html", prompt: "Create a futuristic hacker scramble text decoder effect cycling random glyphs before resolving." }
    ]
  },
  {
    id: "02",
    num: "MODULE 02",
    title: "ScrollTrigger Cinematic Journeys",
    category: "motionpath",
    categoryName: "MotionPath & Scroll",
    description: "Pinning, parallax multi-planes, horizontal reel tracks, scrubbed timelines, and dynamic progress gauges.",
    hubUrl: "../02_scroll_animations/index.html",
    demos: [
      { name: "Pinned Section Parallax", path: "../02_scroll_animations/01_pinned_parallax/index.html", prompt: "Build a pinned full-screen section with multi-layer parallax depth tied to scroll scrub." },
      { name: "Horizontal Gallery Reel", path: "../02_scroll_animations/02_horizontal_reel/index.html", prompt: "Create a smooth horizontal scroll gallery driven by vertical page scroll with ScrollTrigger." }
    ]
  },
  {
    id: "03",
    num: "MODULE 03",
    title: "SVG & Vector Art Choreography",
    category: "svg",
    categoryName: "SVG & Vectors",
    description: "DrawSVG stroke line animation, morphing shapes, self-drawing blueprint diagrams, and glowing neon circuits.",
    hubUrl: "../03_svg_animations/index.html",
    demos: [
      { name: "Circuit Line Draw", path: "../03_svg_animations/01_circuit_draw/index.html", prompt: "Create an intricate cyber circuit board that dynamically draws itself using SVG stroke-dashoffset." },
      { name: "Morphing Geometric Logo", path: "../03_svg_animations/02_shape_morph/index.html", prompt: "Morph smoothly between a circle, square, hexagon, and complex organic shapes using GSAP." }
    ]
  },
  {
    id: "04",
    num: "MODULE 04",
    title: "3D Cards & Micro-Hover Physics",
    category: "cards",
    categoryName: "Cards & 3D",
    description: "Perspective rotations, glossy lighting reflections, floating stack depth, and multi-axis hover tilt.",
    hubUrl: "../04_card_animations/index.html",
    demos: [
      { name: "3D Tilt Depth Card", path: "../04_card_animations/01_tilt_depth/index.html", prompt: "Create a premium credit-card mockup with real-time 3D tilt tracking and glossy specular reflection." },
      { name: "Floating Stack Fanout", path: "../04_card_animations/02_card_fanout/index.html", prompt: "Fan out a stacked deck of cards into an arched hand on hover with elastic settling." }
    ]
  }
];

// State
let activeCategory = 'all';
let searchQuery = '';
let activePromptToCopy = '';

// DOM Elements
const modulesGrid = document.getElementById('modulesGrid');
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');
const resultsCount = document.getElementById('resultsCount');
const filterPills = document.querySelectorAll('.filter-pill');

// Modal Elements
const previewModal = document.getElementById('previewModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const previewIframe = document.getElementById('previewIframe');
const modalDemoTitle = document.getElementById('modalDemoTitle');
const modalOpenExternal = document.getElementById('modalOpenExternal');
const copyPromptBtn = document.getElementById('copyPromptBtn');
const copyToast = document.getElementById('copyToast');

// Render Function
function renderModules() {
  modulesGrid.innerHTML = '';

  const filtered = MODULES_DATA.filter(mod => {
    // Category check
    const matchesCategory = activeCategory === 'all' || mod.category === activeCategory;
    
    // Search check
    if (!matchesCategory) return false;
    if (!searchQuery) return true;

    const q = searchQuery.toLowerCase();
    const inTitle = mod.title.toLowerCase().includes(q);
    const inDesc = mod.description.toLowerCase().includes(q);
    const inDemos = mod.demos.some(d => d.name.toLowerCase().includes(q));
    return inTitle || inDesc || inDemos;
  });

  resultsCount.textContent = `Showing ${filtered.length} of ${MODULES_DATA.length} modules`;

  if (filtered.length === 0) {
    modulesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; color: #94a3b8;">
        <p style="font-size: 1.2rem; margin-bottom: 0.5rem;">No modules found matching "<strong>${searchQuery}</strong>"</p>
        <p style="font-size: 0.9rem;">Try searching for "bento", "bezier", "audio", "physics", or clear filters.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(mod => {
    const card = document.createElement('div');
    card.className = 'module-card';

    // Build subdemos list
    const demosHtml = mod.demos.slice(0, 4).map(demo => `
      <div class="subdemo-item">
        <span class="subdemo-title">⚡ ${demo.name}</span>
        <button class="preview-btn" data-url="${demo.path}" data-title="${demo.name}" data-prompt="${encodeURIComponent(demo.prompt)}">Preview &rarr;</button>
      </div>
    `).join('');

    card.innerHTML = `
      <div class="card-top-info">
        <span class="module-num">${mod.num}</span>
        <span class="category-tag">${mod.categoryName}</span>
      </div>
      <h3>${mod.title}</h3>
      <p>${mod.description}</p>
      
      <div class="subdemos-list">
        ${demosHtml}
      </div>

      <div class="card-bottom-actions">
        <a href="${mod.hubUrl}" class="btn-open-hub">Explore Module Hub &rarr;</a>
      </div>
    `;

    modulesGrid.appendChild(card);
  });

  // Attach preview click handlers
  document.querySelectorAll('.preview-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title');
      const prompt = decodeURIComponent(btn.getAttribute('data-prompt'));
      openPreviewModal(url, title, prompt);
    });
  });

  // Stagger entrance of new cards
  gsap.fromTo('.module-card',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, stagger: 0.06, duration: 0.4, ease: 'power2.out' }
  );
}

// Modal Handlers
function openPreviewModal(url, title, prompt) {
  previewIframe.src = url;
  modalDemoTitle.textContent = title;
  modalOpenExternal.href = url;
  activePromptToCopy = prompt;
  previewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
  previewModal.classList.remove('active');
  previewIframe.src = 'about:blank';
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closePreviewModal);
modalBackdrop.addEventListener('click', closePreviewModal);

// Close on Esc key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && previewModal.classList.contains('active')) {
    closePreviewModal();
  }
});

// Copy AI Prompt Handler
copyPromptBtn.addEventListener('click', () => {
  if (!activePromptToCopy) return;

  navigator.clipboard.writeText(activePromptToCopy).then(() => {
    // Show Toast
    gsap.timeline()
      .to(copyToast, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' })
      .to(copyToast, { opacity: 0, y: 100, duration: 0.4, ease: 'power2.in', delay: 2.5 });
  });
});

// Search & Filter Events
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.trim();
  clearSearch.style.display = searchQuery ? 'block' : 'none';
  renderModules();
});

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearch.style.display = 'none';
  renderModules();
});

filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeCategory = pill.getAttribute('data-category');
    renderModules();
  });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
  renderModules();
});
