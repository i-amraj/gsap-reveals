// Component Interactive Scripts
(function() {
  
        const island = document.getElementById('dynamicIsland');
        const expandBtn = document.getElementById('islandExpandBtn');
        const closeBtn = document.getElementById('islandCloseBtn');
        const expandedContent = document.getElementById('islandExpandedContent');
        const collapsedContent = document.querySelector('.island-collapsed');

        if (expandBtn) {
          expandBtn.addEventListener('click', () => {
            island.classList.add('expanded');
            collapsedContent.style.display = 'none';
            expandedContent.style.display = 'block';
          });
        }
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            island.classList.remove('expanded');
            expandedContent.style.display = 'none';
            collapsedContent.style.display = 'flex';
          });
        }
        

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
