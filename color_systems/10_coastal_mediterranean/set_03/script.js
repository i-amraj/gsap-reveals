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
  const tokens = `--bg: #fbfbf8;
--surface: #ffffff;
--surface-hover: #f3f5ee;
--border: #dfe5d3;
--primary: #3f6212;
--primary-hover: #365314;
--secondary: #0284c7;
--accent: #ca8a04;
--text: #1a2e05;
--text-muted: #4b5563;
--glow: rgba(63, 98, 18, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Olive Coast' color palette from 'Coastal Mediterranean':
- Background: #fbfbf8
- Surface/Cards: #ffffff
- Primary Brand: #3f6212
- Secondary: #0284c7
- Accent: #ca8a04
- Main Text: #1a2e05
- Muted Text: #4b5563
- Border: #dfe5d3
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
