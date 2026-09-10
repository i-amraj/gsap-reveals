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
  const tokens = `--bg: #050914;
--surface: #0f172e;
--surface-hover: #18254a;
--border: #23366b;
--primary: #06b6d4;
--primary-hover: #22d3ee;
--secondary: #ccff00;
--accent: #ec4899;
--text: #ffffff;
--text-muted: #94a3b8;
--glow: rgba(6, 182, 212, 0.4);`;
  navigator.clipboard.writeText(tokens).then(() => {
    showToast('CSS Tokens copied to clipboard!');
  });
});

// Copy Prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
  const prompt = `Use the 'Neon Slalom' color palette from 'Electric Sports Hyper':
- Background: #050914
- Surface/Cards: #0f172e
- Primary Brand: #06b6d4
- Secondary: #ccff00
- Accent: #ec4899
- Main Text: #ffffff
- Muted Text: #94a3b8
- Border: #23366b
Ensure all card surfaces, buttons, text headers, and hover glows strictly follow these hex codes.`;
  navigator.clipboard.writeText(prompt).then(() => {
    showToast('AI Color Prompt copied to clipboard!');
  });
});
