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
  const tokens = `--bg: #f8faff;
--surface: #ffffff;
--surface-hover: #f0f4ff;
--border: #dbe4fe;
--primary: #2563eb;
--primary-hover: #1d4ed8;
--secondary: #7c3aed;
--accent: #06b6d4;
--text: #0f172a;
--text-muted: #475569;
--glow: rgba(37, 99, 235, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Bioluminescent AI Light' color palette from 'AI Generative Future Chroma':
- Background: #f8faff
- Surface/Cards: #ffffff
- Primary Brand: #2563eb
- Secondary: #7c3aed
- Accent: #06b6d4
- Main Text: #0f172a
- Muted Text: #475569
- Border: #dbe4fe
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
