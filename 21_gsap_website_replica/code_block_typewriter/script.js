gsap.registerPlugin(ScrollTrigger);

const codeString = `gsap.to(".target-box", {
  x: 100,
  rotation: 360,
  borderRadius: "50%",
  duration: 2,
  ease: "bounce.out"
});`;

// Custom Typewriter logic in GSAP without TextPlugin
let textObj = { length: 0 };
const codeElement = document.getElementById("code-content");

// Basic Syntax Highlighting logic
function highlightSyntax(str) {
  return str
    .replace(/(gsap|to|duration|ease|x|rotation|borderRadius)/g, '<span class="keyword">$1</span>')
    .replace(/(".target-box"|"50%"|"bounce.out")/g, '<span class="string">$1</span>')
    .replace(/(100|360|2)/g, '<span class="number">$1</span>');
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".code-section",
    start: "top 60%",
    toggleActions: "play none none none"
  }
});

tl.to(textObj, {
  length: codeString.length,
  duration: 2.5,
  ease: "none",
  onUpdate: function() {
    const currentText = codeString.substring(0, Math.floor(textObj.length));
    codeElement.innerHTML = highlightSyntax(currentText);
  }
})
// Once typing finishes, execute the actual animation on the box
.to(".target-box", {
  x: 100,
  rotation: 360,
  borderRadius: "50%",
  duration: 2,
  ease: "bounce.out"
}, "+=0.5");
