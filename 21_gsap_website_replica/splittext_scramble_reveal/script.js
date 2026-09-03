// Because ScrambleTextPlugin is a Club GreenSock plugin,
// we will simulate the decoding effect using core GSAP and vanilla JS.

const textElement = document.getElementById("scramble-text");
const originalText = textElement.innerText;
const chars = "!<>-_\\\\/[]{}—=+*^?#________";

function scrambleAnimation() {
  const tl = gsap.timeline();
  
  // Create a proxy object to hold progress
  const proxy = { progress: 0 };
  
  tl.to(proxy, {
    progress: 1,
    duration: 2,
    ease: "power2.inOut",
    onUpdate: function() {
      // Calculate how many characters should be resolved
      const resolvedCount = Math.floor(proxy.progress * originalText.length);
      
      let newText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (i < resolvedCount) {
          // Resolved character
          newText += originalText[i];
        } else if (originalText[i] === " ") {
          // Keep spaces as spaces
          newText += " ";
        } else {
          // Unresolved character gets a random symbol
          newText += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      textElement.innerText = newText;
    }
  });
}

// Initial play
scrambleAnimation();

// Replay button
document.getElementById("replay").addEventListener("click", scrambleAnimation);
