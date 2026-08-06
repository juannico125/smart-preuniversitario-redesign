/* Smart Preuniversitario — demo estática.
 * Nada de esto envía datos. Solo maneja tres cosas de interfaz:
 *   1. el menú de navegación en móvil
 *   2. la aparición de la barra inferior después del fold
 *   3. el cierre de esa barra
 */

(function () {
  'use strict';

  /* ---- 1 · Menú móvil ------------------------------------------------ */

  var toggle = document.querySelector('.nav__toggle');
  var sheet = document.getElementById('nav-sheet');

  if (toggle && sheet) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      sheet.hidden = open;
      toggle.querySelector('.u-sr').textContent = open ? 'Abrir menú' : 'Cerrar menú';
    });

    sheet.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        sheet.hidden = true;
        toggle.querySelector('.u-sr').textContent = 'Abrir menú';
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !sheet.hidden) {
        toggle.setAttribute('aria-expanded', 'false');
        sheet.hidden = true;
        toggle.focus();
      }
    });
  }

  /* ---- 2 + 3 · Barra inferior ---------------------------------------- */

  var bar = document.getElementById('bar');
  var hero = document.getElementById('top');

  if (bar && hero && 'IntersectionObserver' in window) {
    var dismissed = false;

    var show = function () {
      if (dismissed) return;
      bar.hidden = false;
      // next frame, so the transition has a starting value to animate from
      requestAnimationFrame(function () { bar.classList.add('is-in'); });
    };

    var hide = function () {
      bar.classList.remove('is-in');
    };

    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { hide(); } else { show(); }
      });
    }, { rootMargin: '-120px 0px 0px 0px' }).observe(hero);

    bar.querySelector('.bar__x').addEventListener('click', function () {
      dismissed = true;
      hide();
      window.setTimeout(function () { bar.hidden = true; }, 320);
    });
  }
})();
