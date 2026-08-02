/* ============================================================
   SkinOrSkip — Blog rendering engine
   Reads window.POSTS / window.CATEGORIES (posts-data.js) and
   renders into whatever containers exist on the current page.
   Safe to call on any page — every render function checks for
   its container before doing anything.
   ============================================================ */
(function () {
  var POSTS = window.POSTS || [];
  var CATEGORIES = window.CATEGORIES || [];

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function sortedByDate(list) {
    return list.slice().sort(function (a, b) { return new Date(b.date) - new Date(a.date); });
  }

  function sortedByViews(list) {
    return list.slice().sort(function (a, b) { return b.views - a.views; });
  }

  function postCardHorizontal(post) {
    return (
      '<article class="post-card-horizontal">' +
      '<a href="' + post.url + '" class="post-card-thumb-link">' +
      '<img class="post-card-thumb" src="' + post.image + '" alt="' + esc(post.title) + '" loading="lazy">' +
      '</a>' +
      '<div class="post-card-body">' +
      '<a href="' + categoryUrl(post.categorySlug) + '" class="verdict skin post-card-cat">' + esc(post.category) + '</a>' +
      '<a class="card-link" href="' + post.url + '"><h3>' + esc(post.title) + '</h3></a>' +
      '<p class="meta">' + post.dateLabel + ' &middot; ' + post.readTime + '</p>' +
      '<p>' + esc(post.excerpt) + '</p>' +
      '<a class="card-link" href="' + post.url + '">Read more \u2192</a>' +
      '</div>' +
      '</article>'
    );
  }

  function categoryUrl(slug) {
    var cat = CATEGORIES.filter(function (c) { return c.slug === slug; })[0];
    return cat ? cat.url : '#';
  }

  function categoryLabel(slug) {
    var cat = CATEGORIES.filter(function (c) { return c.slug === slug; })[0];
    return cat ? cat.name : slug;
  }

  // ---------- Featured post ----------
  function renderFeatured(containerId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var post = POSTS.filter(function (p) { return p.featured; })[0] || sortedByDate(POSTS)[0];
    if (!post) { el.remove(); return; }
    el.innerHTML =
      '<article class="featured-post">' +
      '<a href="' + post.url + '" class="featured-post-thumb-link">' +
      '<img class="featured-post-thumb" src="' + post.image + '" alt="' + esc(post.title) + '" loading="lazy">' +
      '</a>' +
      '<div class="featured-post-body">' +
      '<span class="tag">Featured</span>' +
      '<a class="card-link" href="' + post.url + '"><h2>' + esc(post.title) + '</h2></a>' +
      '<p class="meta">' + post.dateLabel + ' &middot; ' + post.readTime + '</p>' +
      '<p>' + esc(post.excerpt) + '</p>' +
      '<a class="btn" href="' + post.url + '">Read the post</a>' +
      '</div>' +
      '</article>';
  }

  // ---------- Latest posts grid ----------
  function renderLatest(containerId, opts) {
    var el = document.getElementById(containerId);
    if (!el) return;
    opts = opts || {};
    var list = sortedByDate(POSTS);
    if (opts.excludeSlug) list = list.filter(function (p) { return p.slug !== opts.excludeSlug; });
    if (opts.limit) list = list.slice(0, opts.limit);
    if (!list.length) { el.innerHTML = '<p>No posts yet \u2014 check back soon.</p>'; return; }
    el.innerHTML = '<div class="post-list-horizontal">' + list.map(postCardHorizontal).join('') + '</div>';
  }

  // ---------- Category sections on homepage ----------
  function renderCategorySections(containerId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var html = CATEGORIES.map(function (cat) {
      var posts = sortedByDate(POSTS.filter(function (p) { return p.categorySlug === cat.slug; })).slice(0, 3);
      if (!posts.length) return '';
      return (
        '<div class="category-section">' +
        '<div class="section-head">' +
        '<h2 class="mt-0">' + esc(cat.name) + '</h2>' +
        '<a href="' + cat.url + '" class="small">View all \u2192</a>' +
        '</div>' +
        '<div class="post-list-horizontal">' + posts.map(postCardHorizontal).join('') + '</div>' +
        '</div>'
      );
    }).join('');
    el.innerHTML = html;
  }

  // ---------- Category page ----------
  function renderCategoryPage(containerId, headingId, categorySlug) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var posts = sortedByDate(POSTS.filter(function (p) { return p.categorySlug === categorySlug; }));
    var headingEl = headingId ? document.getElementById(headingId) : null;
    if (headingEl) headingEl.textContent = categoryLabel(categorySlug);
    if (!posts.length) {
      el.innerHTML = '<p>No posts in this category yet \u2014 check back soon.</p>';
      return;
    }
    el.innerHTML = '<div class="post-list-horizontal">' + posts.map(postCardHorizontal).join('') + '</div>';
  }

  // ---------- Popular posts sidebar widget ----------
  function renderPopularPosts(containerId, limit) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var list = sortedByViews(POSTS).slice(0, limit || 5);
    el.innerHTML = list.map(function (post, i) {
      return (
        '<a class="popular-post-item" href="' + post.url + '">' +
        '<span class="popular-post-rank">' + (i + 1) + '</span>' +
        '<img class="popular-post-thumb" src="' + post.image + '" alt="" loading="lazy">' +
        '<span class="popular-post-info">' +
        '<span class="popular-post-title">' + esc(post.title) + '</span>' +
        '<span class="popular-post-views">' + post.views.toLocaleString('en-IN') + ' views</span>' +
        '</span>' +
        '</a>'
      );
    }).join('');
  }

  // ---------- Tags sidebar widget ----------
  function renderTags(containerId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var counts = {};
    POSTS.forEach(function (p) {
      (p.tags || []).forEach(function (t) { counts[t] = (counts[t] || 0) + 1; });
    });
    var tags = Object.keys(counts).sort();
    if (!tags.length) { el.innerHTML = '<p class="small">No tags yet.</p>'; return; }
    el.innerHTML = tags.map(function (t) {
      return '<a class="tag-pill" href="/?tag=' + encodeURIComponent(t) + '">#' + esc(t) + ' <span>' + counts[t] + '</span></a>';
    }).join('');
  }

  // ---------- Related posts (article pages) ----------
  function renderRelated(containerId, currentSlug, tags, limit) {
    var el = document.getElementById(containerId);
    if (!el) return;
    tags = tags || [];
    var scored = POSTS
      .filter(function (p) { return p.slug !== currentSlug; })
      .map(function (p) {
        var overlap = (p.tags || []).filter(function (t) { return tags.indexOf(t) !== -1; }).length;
        return { post: p, overlap: overlap };
      })
      .filter(function (s) { return s.overlap > 0; })
      .sort(function (a, b) { return b.overlap - a.overlap || b.post.views - a.post.views; })
      .slice(0, limit || 3)
      .map(function (s) { return s.post; });

    if (!scored.length) {
      // fall back to latest posts (excluding current) so the section is never empty
      scored = sortedByDate(POSTS).filter(function (p) { return p.slug !== currentSlug; }).slice(0, limit || 3);
    }
    if (!scored.length) { el.closest('.section') && el.closest('.section').remove(); return; }
    el.innerHTML = '<div class="post-list-horizontal">' + scored.map(postCardHorizontal).join('') + '</div>';
  }

  // ---------- Search / tag results page ----------
  function renderSearchResults(containerId, headingId) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var params = new URLSearchParams(window.location.search);
    var tag = params.get('tag');
    var q = (params.get('q') || '').trim().toLowerCase();
    var headingEl = headingId ? document.getElementById(headingId) : null;
    var results = [];

    if (tag) {
      results = POSTS.filter(function (p) { return (p.tags || []).indexOf(tag) !== -1; });
      if (headingEl) headingEl.textContent = 'Posts tagged \u201c' + tag + '\u201d';
    } else if (q) {
      results = POSTS.filter(function (p) {
        return p.title.toLowerCase().indexOf(q) !== -1 ||
          p.excerpt.toLowerCase().indexOf(q) !== -1 ||
          (p.tags || []).some(function (t) { return t.indexOf(q) !== -1; }) ||
          p.category.toLowerCase().indexOf(q) !== -1;
      });
      if (headingEl) headingEl.textContent = 'Search results for \u201c' + q + '\u201d';
    } else {
      if (headingEl) headingEl.textContent = 'All posts';
      results = POSTS;
    }

    results = sortedByDate(results);

    if (!results.length) {
      el.innerHTML = '<p>No posts found. Try a different search term, or <a href="/">browse all posts</a>.</p>';
      return;
    }
    el.innerHTML = '<div class="post-list-horizontal">' + results.map(postCardHorizontal).join('') + '</div>';
  }

  window.SkinOrSkipBlog = {
    renderFeatured: renderFeatured,
    renderLatest: renderLatest,
    renderCategorySections: renderCategorySections,
    renderCategoryPage: renderCategoryPage,
    renderPopularPosts: renderPopularPosts,
    renderTags: renderTags,
    renderRelated: renderRelated,
    renderSearchResults: renderSearchResults
  };
})();
