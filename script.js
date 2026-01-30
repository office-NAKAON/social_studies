(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // モバイルメニューの開閉
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('is-open');
      navMenu.classList.toggle('is-open');
      document.body.style.overflow = navMenu.classList.contains('is-open') ? 'hidden' : '';
    });

    // メニュー内のリンクをクリックしたらメニューを閉じる
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('is-open');
        navMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // スクロール時にヘッダーにクラスを付与（必要に応じてスタイル追加可能）
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    });
  }
})();
