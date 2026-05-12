// ============================================================
// BLUEPRINT THEME — blueprint.js
// Reading progress, copy buttons, TOC scrollspy, mobile nav
// ============================================================

(function () {
  'use strict';

  // --- Reading Progress ---
  var progress = document.querySelector('.bp-progress');
  if (progress) {
    function updateProgress() {
      var doc  = document.documentElement;
      var top  = doc.scrollTop || document.body.scrollTop;
      var max  = doc.scrollHeight - doc.clientHeight;
      progress.style.width = max > 0 ? (top / max * 100).toFixed(1) + '%' : '0%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // --- Copy Buttons ---
  document.querySelectorAll('pre').forEach(function (pre) {
    var btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'COPY';
    btn.setAttribute('aria-label', 'Copy code');
    pre.style.position = 'relative';
    pre.appendChild(btn);

    btn.addEventListener('click', function () {
      var code = pre.querySelector('code') || pre;
      navigator.clipboard.writeText(code.innerText).then(function () {
        btn.textContent = 'COPIED';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'COPY';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // --- TOC Scrollspy ---
  var tocLinks = document.querySelectorAll('.post-toc a[href^="#"]');
  if (tocLinks.length) {
    var headings = Array.from(tocLinks).map(function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);

    window.addEventListener('scroll', function () {
      var pos = window.scrollY + 80;
      var active = headings.reduce(function (acc, h) {
        return h.offsetTop <= pos ? h : acc;
      }, headings[0]);

      if (active) {
        tocLinks.forEach(function (a) { a.classList.remove('active'); });
        var link = document.querySelector('.post-toc a[href="#' + active.id + '"]');
        if (link) link.classList.add('active');
      }
    }, { passive: true });
  }

  // --- Mobile Nav ---
  var toggle = document.querySelector('.bp-nav__toggle');
  var menu   = document.querySelector('.bp-nav__links');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
      toggle.setAttribute('aria-expanded', open);
    });
  }

  // --- Heading Anchors ---
  document.querySelectorAll('.post-body h2, .post-body h3').forEach(function (h) {
    if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/[^\w]+/g, '-');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'heading-anchor';
    a.setAttribute('aria-label', 'Link to section');
    a.textContent = ' §';
    a.style.cssText = 'opacity:0;font-size:0.75em;color:#ff9800;text-decoration:none;transition:opacity .2s;border:none';
    h.appendChild(a);
    h.addEventListener('mouseenter', function () { a.style.opacity = '1'; });
    h.addEventListener('mouseleave', function () { a.style.opacity = '0'; });
  });

}());
