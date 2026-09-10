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
  const tokens = `--bg: #f0f9ff;
--surface: #ffffff;
--surface-hover: #e0f2fe;
--border: #bae6fd;
--primary: #0ea5e9;
--primary-hover: #0284c7;
--secondary: #f43f5e;
--accent: #10b981;
--text: #0369a1;
--text-muted: #475569;
--glow: rgba(14, 165, 233, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Coral Reef Atoll' color palette from 'Deep Ocean Abyss':
- Background: #f0f9ff
- Surface/Cards: #ffffff
- Primary Brand: #0ea5e9
- Secondary: #f43f5e
- Accent: #10b981
- Main Text: #0369a1
- Muted Text: #475569
- Border: #bae6fd
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
