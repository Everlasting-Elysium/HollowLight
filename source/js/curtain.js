;(function () {
  'use strict';

  var STORAGE_KEY = 'hl-curtain-hidden';
  var curtain = document.getElementById('hl-curtain');
  if (!curtain) return;

  // --- 若用户之前关闭过幕布，直接隐藏 ---
  if (localStorage.getItem(STORAGE_KEY) === '1') {
    curtain.classList.add('curtain--hidden');
    attachRestoreBtn();
    return;
  }

  // --- 打字机动画 ---
  var texts = (window.__HL_CURTAIN_TEXTS__ || []).filter(Boolean);
  if (!texts.length) texts = [''];

  var textEl = document.getElementById('curtain-tw-text');
  var idx = 0, charIdx = 0, deleting = false;

  function tick() {
    if (!textEl) return;
    var cur = texts[idx] || '';
    if (!deleting) {
      charIdx++;
      textEl.textContent = cur.slice(0, charIdx);
      if (charIdx >= cur.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 75 + Math.random() * 55);
    } else {
      charIdx--;
      textEl.textContent = cur.slice(0, charIdx);
      if (charIdx <= 0) {
        deleting = false;
        idx = (idx + 1) % texts.length;
        setTimeout(tick, 380);
        return;
      }
      setTimeout(tick, 32 + Math.random() * 22);
    }
  }
  if (texts[0]) setTimeout(tick, 800);

  // --- 向下探索按钮：滚动到幕布下方 ---
  var scrollBtn = document.getElementById('curtain-scroll-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      var h = curtain.offsetHeight || window.innerHeight;
      window.scrollTo({ top: h, behavior: 'smooth' });
    });
  }

  // --- 关闭幕布按钮 ---
  var toggleBtn = document.getElementById('curtain-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, '1');
      curtain.style.transition = 'opacity 0.5s ease, transform 0.6s cubic-bezier(0.7, 0, 0.3, 1), height 0.6s cubic-bezier(0.7, 0, 0.3, 1), margin-top 0.6s';
      curtain.style.opacity = '0';
      curtain.style.transform = 'translateY(-40px)';
      setTimeout(function () {
        curtain.style.height = '0';
        curtain.style.marginTop = '0';
        curtain.style.overflow = 'hidden';
        setTimeout(function () {
          curtain.classList.add('curtain--hidden');
          curtain.style.transition = '';
          curtain.style.height = '';
          curtain.style.marginTop = '';
          curtain.style.opacity = '';
          curtain.style.transform = '';
          attachRestoreBtn();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 600);
      }, 350);
    });
  }

  // --- 恢复按钮（幕布隐藏后显示在右下角）---
  function attachRestoreBtn() {
    var btn = document.createElement('button');
    btn.className = 'curtain-restore-btn';
    btn.title = '显示幕布';
    btn.setAttribute('aria-label', '显示幕布');
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
    btn.addEventListener('click', function () {
      localStorage.removeItem(STORAGE_KEY);
      curtain.classList.remove('curtain--hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      document.body.removeChild(btn);
    });
    document.body.appendChild(btn);
  }
})();
