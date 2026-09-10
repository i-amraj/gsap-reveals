// Component Interactive Scripts
(function() {
  
        function updateClocks() {
          const now = new Date();
          const sf = document.getElementById('timeSF');
          const london = document.getElementById('timeLondon');
          const tokyo = document.getElementById('timeTokyo');
          if (sf) sf.textContent = now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' });
          if (london) london.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Europe/London' });
          if (tokyo) tokyo.textContent = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' });
        }
        setInterval(updateClocks, 1000);
        updateClocks();
        

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
