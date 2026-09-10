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
  const tokens = `--bg: #f5f5f4;
--surface: #ffffff;
--surface-hover: #e7e5e4;
--border: #d6d3d1;
--primary: #44403c;
--primary-hover: #292524;
--secondary: #65a30d;
--accent: #b91c1c;
--text: #1c1917;
--text-muted: #57534e;
--glow: rgba(68, 64, 60, 0.2);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Raked Zen Gravel' color palette from 'Japanese Wabi-Sabi':
- Background: #f5f5f4
- Surface/Cards: #ffffff
- Primary Brand: #44403c
- Secondary: #65a30d
- Accent: #b91c1c
- Main Text: #1c1917
- Muted Text: #57534e
- Border: #d6d3d1
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
