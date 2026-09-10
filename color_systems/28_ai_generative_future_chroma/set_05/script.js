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
  const tokens = `--bg: #080410;
--surface: #140b26;
--surface-hover: #20123d;
--border: #311c5c;
--primary: #c084fc;
--primary-hover: #d8b4fe;
--secondary: #f43f5e;
--accent: #facc15;
--text: #ffffff;
--text-muted: #e2e8f0;
--glow: rgba(192, 132, 252, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Quantum Singularity' color palette from 'AI Generative Future Chroma':
- Background: #080410
- Surface/Cards: #140b26
- Primary Brand: #c084fc
- Secondary: #f43f5e
- Accent: #facc15
- Main Text: #ffffff
- Muted Text: #e2e8f0
- Border: #311c5c
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
