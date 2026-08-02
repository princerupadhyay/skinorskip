# SkinOrSkip

A blog-first static website for budget skincare picks for Indian skin and climate — built with plain HTML, CSS, and JavaScript (no build tools, no frameworks). Hosts free on GitHub Pages.

## Structure

```
skinorskip/
├── index.html                  Homepage = the blog feed (featured post, latest posts, categories)
├── about.html                  About page (no sidebar)
├── contact.html                 Contact page (no sidebar)
├── privacy-policy.html          Privacy policy (required for AdSense)
├── disclaimer.html              Affiliate disclosure
├── sitemap.xml / robots.txt
├── partials/
│   ├── header.html              Shared navbar
│   ├── footer.html              Shared footer
│   └── sidebar.html             Shared sidebar: search box, popular posts, tags
├── category/
│   ├── sunscreen.html
│   ├── routines.html
│   └── mens-skincare.html       One page per category, auto-filled from posts-data.js
├── best-budget-sunscreens-indian-summer.html    Articles live at the site root — no /posts/ prefix
├── hostel-skincare-routine-students.html
├── mens-skincare-basics-india.html
└── assets/
    ├── css/style.css            All styling (design tokens at the top)
    ├── images/                  Post thumbnails — currently placeholder SVGs, see below
    └── js/
        ├── posts-data.js        ⭐ Single source of truth for every post + category
        ├── blog.js               Rendering engine (featured/latest/related/popular/tags/search)
        ├── partials.js           Loads header/footer/sidebar, wires up nav + sidebar widgets
        └── script.js              Page-specific behavior (newsletter form, etc.)
```

## How the site is wired together

**`posts-data.js` is the only place you edit content metadata.** Every list on the site — latest posts, category pages, popular posts, tags, related posts, search — is generated from this one array at page-load time by `blog.js`. Nothing is duplicated by hand.

### Publishing a new post

1. Add an object to `POSTS` in `assets/js/posts-data.js`: slug, title, excerpt, image, category, tags, date, readTime, views, featured.
2. Create `/<slug>.html` at the site root — copy an existing post file and swap the body content, title, meta tags, and the `slug`/tags values used in the inline script at the bottom (for the Related Posts section).
3. Add the post's URL to `sitemap.xml`.
4. If it's a new category, add it to `CATEGORIES` in `posts-data.js` and create `/category/<slug>.html` by copying an existing category page and changing the name/slug/description.

### Post thumbnails — currently placeholders

The images in `assets/images/` (`sunscreen-thumb.svg`, `hostel-routine-thumb.svg`, `mens-skincare-thumb.svg`) are simple branded placeholder graphics generated for this build, not real product photos. Replace them with real photos before launch:

- Keep the same filenames (or update the `image` path in `posts-data.js` if you rename them)
- Recommended size: roughly 800×500 or larger, landscape orientation — the CSS crops to fill via `object-fit: cover`, so exact dimensions aren't critical.

### Popular Posts ranking

The sidebar's Popular Posts list is ranked by the `views` number on each post in `posts-data.js`. This is manual for now — update the numbers yourself as you get a feel for what's performing, or wire in real analytics later and have a small script update these numbers automatically.

### Tags and search (built into the homepage)

- Every tag on a post automatically appears in the sidebar's tag cloud (deduplicated, with a count).
- Clicking a tag goes to `/?tag=<tag>` — the homepage itself detects the query string and swaps its normal feed for a filtered results list (horizontal cards), matching every post that carries that tag.
- The sidebar search box submits to `/?q=<query>` the same way, matching against title, excerpt, tags, and category — all client-side, no backend or separate page needed.
- The homepage's canonical tag always points at the clean `/` URL, so these filtered views don't create duplicate-content issues for search engines — link equity consolidates on the homepage.

### Card layout

Every post listing on the site — the homepage's Latest Posts feed, the category-grouped sections on the homepage, each category page, tag/search results, and Related Posts — uses the same horizontal card (thumbnail left, details right, stacked as a vertical list). It's one shared component (`postCardHorizontal` in `blog.js`), so the look stays consistent everywhere and only needs to be styled once.

### Related posts

Each article page has a Related Posts section at the bottom, using that same horizontal card layout. It's driven by tag overlap: posts sharing the most tags with the current post are shown first. If nothing overlaps, it falls back to the most recent other posts, so the section is never empty.

### Article images

Each post's thumbnail also appears inline inside the article itself, placed after the first paragraph (not as a big banner above the title) — this keeps the headline the first thing a reader sees, with the image reinforcing the opening paragraph rather than delaying it.

## The sidebar

The sidebar (search box, Popular Posts, tags) appears on every page **except About and Contact** — homepage (both its default and filtered/tag views), all posts, all category pages, privacy policy, and the affiliate disclosure page. It's a single shared partial (`partials/sidebar.html`) injected via JavaScript, so editing its layout in one place updates it everywhere.

## Local preview

Because the header/footer/sidebar load via `fetch()`, opening the HTML files directly (`file://...`) won't render them — browsers block local file fetches. To preview locally, run a simple server from the project root:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. This isn't an issue once hosted on GitHub Pages or any real web server.

## Clean URLs

Internal links use `/` for the homepage, `/category/<slug>.html` for categories, and `/<slug>.html` directly at the root for articles (no `/posts/` prefix, no `index.html` in the URL bar). Tag and search results also live at the root (`/?tag=...`, `/?q=...`) instead of a separate page. These links are root-relative (start with `/`), which assumes the site is served from the root of its domain (a custom domain, or a GitHub user/org root Pages site). If you deploy to `https://<username>.github.io/skinorskip/` (a project site), the `/` links will break because the site actually lives one folder down — set up a custom domain, or ask to have the links adjusted with a `/skinorskip/` prefix.

## 1. Before you publish — replace the placeholder domain

Every page has SEO tags pointing at `https://skinorskip.com/`. Once you know your real domain, find-and-replace `skinorskip.com` across all files, including `sitemap.xml`.

## 2. Host it free on GitHub Pages

1. Create a GitHub repository (e.g. `skinorskip`).
2. Push everything inside this `skinorskip/` folder to the repo root.
3. Repo → **Settings → Pages** → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
4. Save — the site goes live within a few minutes.
5. Set up a custom domain under Settings → Pages → Custom domain (needed for the `/` links to resolve — see Clean URLs above).

## 3. Getting AdSense-ready

- **Real content:** 3 full posts now; add more before applying (aim for 15–20+ before submitting).
- **Privacy Policy, About, Contact:** all included.
- **Working navigation, no broken links:** re-check after you replace the placeholder domain.
- **Fast, mobile-friendly:** no frameworks, minimal JS — responsive by default.
- Submit `sitemap.xml` in Google Search Console after publishing and wait for indexing before applying.

Once approved, add your AdSense snippet to the `<head>` of each page and place ad units inside `.section` blocks, between post cards, or in the sidebar.

## 4. Making the contact form actually send email

It currently just shows an in-browser confirmation — nothing is sent anywhere yet. Cheapest fixes:

- **Formspree** (formspree.io) — point the form's `action` at their endpoint.
- **Google Forms** — embed one instead.
- **mailto: link** — simplest, no backend: `<a href="mailto:you@email.com">Email us</a>`.

## SEO features included

- Unique title tags, meta descriptions, and long-tail keyword phrases on every page (homepage, category pages, and each post) targeting realistic search terms like "best budget sunscreen India", "hostel skincare routine", "men's skincare India budget".
- `Article`, `FAQPage`, `BreadcrumbList`, `Organization`, and `WebSite` (with `SearchAction`) structured data (JSON-LD) for rich-result eligibility.
- An FAQ section with 4 real questions on every post, feeding both readers and the FAQPage schema — a strong long-tail and "People Also Ask" target.
- Canonical tags on every page, including the homepage's filtered tag/search views, to avoid duplicate-content dilution.
- `sitemap.xml` and `robots.txt` included and ready to submit to Search Console.
- Descriptive alt text on every image; semantic heading structure (one `<h1>` per page).

This covers on-page SEO. It doesn't replace backlinks, page-speed tuning after you add real images, or ongoing content volume — all of which matter more than any one on-page tweak for actually ranking.

## Design notes

Colors, fonts, and spacing live as CSS custom properties at the top of `assets/css/style.css`. The recurring "stamp" motif (`.stamp.skin` / `.stamp.skip`) is the site's signature visual — reuse it in future graphics for consistency.
