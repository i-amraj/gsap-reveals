const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

// Swatches Click to Copy
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const hex = swatch.getAttribute('data-hex');
    navigator.clipboard.writeText(hex).then(() => {
      showToast(`Copied ${hex} to clipboard!`);
    });
  });
});

// Copy Tokens
document.getElementById('copyTokensBtn').addEventListener('click', () => {
  const tokens = `--bg: #000000;
--surface: #0f0f0f;
--surface-hover: #1a1a1a;
--border: #2b2b2b;
--primary: #facc15;
--primary-hover: #fde047;
--secondary: #00f0ff;
--accent: #ff3366;
--text: #ffffff;
--text-muted: #a3a3a3;
--glow: rgba(250, 204, 21, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Telemetry High Contrast' color palette from 'Aerospace Cockpit HUD':
- Background: #000000
- Surface/Cards: #0f0f0f
- Primary Brand: #facc15
- Secondary: #00f0ff
- Accent: #ff3366
- Main Text: #ffffff
- Muted Text: #a3a3a3
- Border: #2b2b2b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
