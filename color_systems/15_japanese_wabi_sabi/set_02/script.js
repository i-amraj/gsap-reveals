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
  const tokens = `--bg: #fbfcf8;
--surface: #ffffff;
--surface-hover: #f2f5eb;
--border: #dce4ce;
--primary: #4d7c0f;
--primary-hover: #3f6212;
--secondary: #1c1917;
--accent: #a16207;
--text: #1a2e05;
--text-muted: #4b5563;
--glow: rgba(77, 124, 15, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Matcha Tea Pavilion' color palette from 'Japanese Wabi-Sabi':
- Background: #fbfcf8
- Surface/Cards: #ffffff
- Primary Brand: #4d7c0f
- Secondary: #1c1917
- Accent: #a16207
- Main Text: #1a2e05
- Muted Text: #4b5563
- Border: #dce4ce
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
