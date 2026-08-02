document.addEventListener('DOMContentLoaded', function () {
  var headerSlot = document.getElementById('site-header');
  var footerSlot = document.getElementById('site-footer');
  var sidebarSlot = document.getElementById('site-sidebar');

  function load(url) {
    return fetch(url).then(function (r) { return r.text(); });
  }

  var loadHeader = headerSlot ? load('/partials/header.html').then(function (html) { headerSlot.innerHTML = html; }) : Promise.resolve();
  var loadFooter = footerSlot ? load('/partials/footer.html').then(function (html) { footerSlot.innerHTML = html; }) : Promise.resolve();
  var loadSidebar = sidebarSlot ? load('/partials/sidebar.html').then(function (html) { sidebarSlot.innerHTML = html; }) : Promise.resolve();

  Promise.all([loadHeader, loadFooter, loadSidebar]).then(function () {
    // Highlight current page in nav
    var current = window.location.pathname;
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      if (link.pathname === current) {
        link.classList.add('active');
      }
    });

    // Highlight current category
    document.querySelectorAll('.category-nav-inner a').forEach(function (link) {
      if (link.pathname === current) {
        link.classList.add('active');
      }
    });

    // Mobile nav toggle
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
      });
    }

    // Footer year
    var yearEl = document.querySelector('.year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Fill in sidebar widgets now that it's in the DOM
    if (window.SkinOrSkipBlog) {
      window.SkinOrSkipBlog.renderPopularPosts('popular-posts', 5);
      window.SkinOrSkipBlog.renderTags('tag-cloud');
    }

    document.dispatchEvent(new Event('partialsLoaded'));
  }).catch(function (err) {
    console.error('Could not load page partials:', err);
  });
});
