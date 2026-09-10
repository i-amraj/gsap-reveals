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
  const tokens = `--bg: #120508;
--surface: #210b11;
--surface-hover: #33121b;
--border: #4d1b29;
--primary: #e11d48;
--primary-hover: #f43f5e;
--secondary: #f59e0b;
--accent: #fb7185;
--text: #fff1f2;
--text-muted: #fca5a5;
--glow: rgba(225, 29, 72, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Crimson Horizon' color palette from 'Solar Warmth Sunset':
- Background: #120508
- Surface/Cards: #210b11
- Primary Brand: #e11d48
- Secondary: #f59e0b
- Accent: #fb7185
- Main Text: #fff1f2
- Muted Text: #fca5a5
- Border: #4d1b29
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
