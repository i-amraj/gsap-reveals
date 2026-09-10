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
  const tokens = `--bg: #050608;
--surface: #0f1117;
--surface-hover: #171a24;
--border: #232838;
--primary: #facc15;
--primary-hover: #fde047;
--secondary: #10b981;
--accent: #38bdf8;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(250, 204, 21, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Imperial Obsidian' color palette from 'Regal Emerald Jewel':
- Background: #050608
- Surface/Cards: #0f1117
- Primary Brand: #facc15
- Secondary: #10b981
- Accent: #38bdf8
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #232838
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
