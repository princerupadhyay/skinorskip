/* ============================================================
   SkinOrSkip — Posts & Categories Data
   This is the single source of truth for every post on the site.
   To publish a new post:
     1. Add a new object to POSTS below.
     2. Create the matching HTML file in /.
     3. If it's a new category, add it to CATEGORIES below and
        create /category/<slug>.html (copy an existing one).
   "views" is entered manually for now and drives the Popular
   Posts sidebar — update it yourself until real analytics exist.
   ============================================================ */

window.CATEGORIES = [
  { name: "Serums", slug: "serums", url: "/category/serums.html" },
  { name: "Sunscreen", slug: "sunscreen", url: "/category/sunscreen.html" },
  { name: "Routines", slug: "routines", url: "/category/routines.html" },
  { name: "Men's Skincare", slug: "mens-skincare", url: "/category/mens-skincare.html" }
];

window.POSTS = [
  {
    slug: "monsoon-skincare-routine-oily-skin-students",
    url: "/monsoon-skincare-routine-oily-skin-students.html",
    title: "Monsoon Skincare Routine India: 3 Steps, Under \u20b9650 (2026)",
    excerpt: "The monsoon skincare routine for oily, breakout-prone Indian skin \u2014 3 products, real prices, under \u20b9650 total. Built for students, not dermatologists.",
    image: "/assets/images/monsoon-skincare-routine-oily-skin-students.webp",
    category: "Routines",
    categorySlug: "routines",
    tags: ["routine", "students", "budget-picks", "monsoon", "oily-skin"],
    date: "2027-08-01",
    dateLabel: "Aug 1, 2027",
    readTime: "7 min read",
    views: 0,
    featured: true
  },
  {
    slug: "2-minute-skincare-routine-men-india",
    url: "/2-minute-skincare-routine-men-india.html",
    title: "2-Minute Skincare Routine for Men Under \u20b9520 (India)",
    excerpt: "A 2-product, 2-minute skincare routine for Indian men \u2014 built for monsoon oily skin, under \u20b9520 total. Real products, real prices, no overwhelm.",
    image: "/assets/images/2-minute-skincare-routine-men-india.webp",
    category: "Men's Skincare",
    categorySlug: "mens-skincare",
    tags: ["mens-skincare", "routine", "budget-picks", "monsoon", "oily-skin"],
    date: "2027-08-02",
    dateLabel: "Aug 2, 2027",
    readTime: "6 min read",
    views: 0,
    featured: false
  },
  {
    slug: "best-vitamin-c-serum-under-700-india",
    url: "/best-vitamin-c-serum-under-700-india.html",
    title: "Best Vitamin C Serum Under ₹700 India — Buy Before Aug 7 Sale",
    excerpt: "Amazon's Great Freedom Festival opens to everyone on Aug 7 — here's the ₹699 vitamin C serum worth grabbing before it, for monsoon dullness and pollution.",
    image: "/assets/images/best-vitamin-c-serum-under-700-india.webp",
    category: "Serums",
    categorySlug: "serums",
    tags: ["vitamin-c", "serums", "monsoon", "budget-picks", "students"],
    date: "2027-08-03",
    dateLabel: "Aug 3, 2027",
    readTime: "7 min read",
    views: 0,
    featured: false
  }
];
