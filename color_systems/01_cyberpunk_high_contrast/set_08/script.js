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
  const tokens = `--bg: #090d16;
--surface: #131b2e;
--surface-hover: #1b2640;
--border: #243456;
--primary: #e2e8f0;
--primary-hover: #ffffff;
--secondary: #2563eb;
--accent: #f97316;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(226, 232, 240, 0.35);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Cyber Chrome' color palette from 'Cyberpunk High Contrast':
- Background: #090d16
- Surface/Cards: #131b2e
- Primary Brand: #e2e8f0
- Secondary: #2563eb
- Accent: #f97316
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #243456
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
