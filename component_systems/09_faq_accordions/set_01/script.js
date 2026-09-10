// Component Interactive Scripts
(function() {
  
        const tiles = document.querySelectorAll('.acc-tile');
        tiles.forEach(tile => {
          tile.addEventListener('click', () => {
            tiles.forEach(t => {
              if (t !== tile) {
                t.classList.remove('active');
                t.querySelector('.acc-content').style.display = 'none';
                t.querySelector('.acc-icon').textContent = '+';
              }
            });
            const content = tile.querySelector('.acc-content');
            const icon = tile.querySelector('.acc-icon');
            const isOpen = tile.classList.contains('active');
            if (isOpen) {
              tile.classList.remove('active');
              content.style.display = 'none';
              icon.textContent = '+';
            } else {
              tile.classList.add('active');
              content.style.display = 'block';
              icon.textContent = '−';
            }
          });
        });
        

  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  }

  const copyHtmlBtn = document.getElementById('copyHtmlBtn');
  const copyCssBtn = document.getElementById('copyCssBtn');
  const copyPromptBtn = document.getElementById('copyPromptBtn');

  if (copyHtmlBtn) {
    copyHtmlBtn.addEventListener('click', () => {
      const stage = document.getElementById('componentStage');
      if (stage) {
        navigator.clipboard.writeText(stage.innerHTML.trim()).then(() => showToast('HTML Markup copied!'));
      }
    });
  }

  if (copyCssBtn) {
    copyCssBtn.addEventListener('click', () => {
      fetch('styles.css').then(r => r.text()).then(css => {
        navigator.clipboard.writeText(css).then(() => showToast('CSS Code copied!'));
      });
    });
  }

  if (copyPromptBtn) {
    copyPromptBtn.addEventListener('click', () => {
      fetch('prompt.md').then(r => r.text()).then(text => {
        navigator.clipboard.writeText(text).then(() => showToast('AI Prompt copied!'));
      });
    });
  }
})();
