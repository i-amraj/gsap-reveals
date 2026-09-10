const treeItems = document.querySelectorAll('.tree-item');
const sandboxIframe = document.getElementById('sandboxIframe');
const compName = document.getElementById('compName');
const snippetCode = document.getElementById('snippetCode');
const openExternalBtn = document.getElementById('openExternalBtn');
const copySnippetBtn = document.getElementById('copySnippetBtn');
const toast = document.getElementById('toast');
const deviceBtns = document.querySelectorAll('.device-btn');

// Initial setup
const initialItem = treeItems[0];
snippetCode.textContent = initialItem.getAttribute('data-code');

treeItems.forEach(item => {
  item.addEventListener('click', () => {
    treeItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    const url = item.getAttribute('data-url');
    const title = item.getAttribute('data-title');
    const code = item.getAttribute('data-code');

    sandboxIframe.src = url;
    compName.textContent = title;
    snippetCode.textContent = code;
    openExternalBtn.href = url;

    gsap.fromTo(sandboxIframe,
      { opacity: 0.6, scale: 0.99 },
      { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' }
    );
  });
});

// Device Frame Switching
deviceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    deviceBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const device = btn.getAttribute('data-device');
    if (device === 'desktop') {
      sandboxIframe.style.width = '100%';
    } else if (device === 'tablet') {
      sandboxIframe.style.width = '768px';
    } else if (device === 'mobile') {
      sandboxIframe.style.width = '390px';
    }
  });
});

// Copy Code Snippet
copySnippetBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(snippetCode.textContent).then(() => {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
});
