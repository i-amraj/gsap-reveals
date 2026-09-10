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
  const tokens = `--bg: #030a12;
--surface: #081729;
--surface-hover: #0e233d;
--border: #163459;
--primary: #00f0ff;
--primary-hover: #38bdf8;
--secondary: #6366f1;
--accent: #10b981;
--text: #f0f9ff;
--text-muted: #7dd3fc;
--glow: rgba(0, 240, 255, 0.45);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Neural Synapse Cyan' color palette from 'AI Generative Future Chroma':
- Background: #030a12
- Surface/Cards: #081729
- Primary Brand: #00f0ff
- Secondary: #6366f1
- Accent: #10b981
- Main Text: #f0f9ff
- Muted Text: #7dd3fc
- Border: #163459
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
