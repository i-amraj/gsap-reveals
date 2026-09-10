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
  const tokens = `--bg: #ffffff;
--surface: #fefce8;
--surface-hover: #fef9c3;
--border: #000000;
--primary: #ca8a04;
--primary-hover: #a16207;
--secondary: #000000;
--accent: #2563eb;
--text: #000000;
--text-muted: #52525b;
--glow: rgba(202, 138, 4, 0.25);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Modernist Yellow' color palette from 'Swiss Brutalist Bauhaus':
- Background: #ffffff
- Surface/Cards: #fefce8
- Primary Brand: #ca8a04
- Secondary: #000000
- Accent: #2563eb
- Main Text: #000000
- Muted Text: #52525b
- Border: #000000
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
