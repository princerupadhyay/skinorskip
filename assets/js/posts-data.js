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
  { name: "Men's Skincare", slug: "mens-skincare", url: "/category/mens-skincare.html" },
  { name: "Moisturizers", slug: "moisturizers", url: "/category/moisturizers.html" },
  { name: "Eye Care", slug: "eye-care", url: "/category/eye-care.html" }
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
    date: "2026-08-01",
    dateLabel: "Aug 1, 2026",
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
    date: "2026-08-02",
    dateLabel: "Aug 2, 2026",
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
    date: "2026-08-03",
    dateLabel: "Aug 3, 2026",
    readTime: "7 min read",
    views: 0,
    featured: false
  },
  {
    slug: "best-face-wash-hostel-guys-india",
    url: "/best-face-wash-hostel-guys-india.html",
    title: "Best Face Wash for Hostel Guys in India: ₹259 Fix",
    excerpt: "Hard hostel water + monsoon oil ruining your skin? Here's the one ₹259 charcoal face wash hostel guys in India actually repurchase.",
    image: "/assets/images/best-face-wash-hostel-guys-india.webp",
    category: "Men's Skincare",
    categorySlug: "mens-skincare",
    tags: ["mens-skincare", "budget-picks", "monsoon", "oily-skin", "hostel"],
    date: "2026-08-04",
    dateLabel: "Aug 4, 2026",
    readTime: "7 min read",
    views: 0,
    featured: false
  },
  {
    slug: "ponds-super-light-gel-neutrogena-dupe-india",
    url: "/ponds-super-light-gel-neutrogena-dupe-india.html",
    title: "Pond's Super Light Gel vs Neutrogena Hydro Boost: Which One's Worth Your Money?",
    excerpt: "Neutrogena Hydro Boost dupe in India: Pond's Super Light Gel matches the hyaluronic acid formula for under ₹300.",
    image: "/assets/images/ponds-super-light-gel-neutrogena-dupe-india.webp",
    category: "Moisturizers",
    categorySlug: "moisturizers",
    tags: ["dupes", "moisturizer", "budget-picks", "hyaluronic-acid", "worth-it-wednesday"],
    date: "2026-08-05",
    dateLabel: "Aug 5, 2026",
    readTime: "8 min read",
    views: 0,
    featured: false
  },
  {
    slug: "mens-grooming-essentials-under-1000-amazon-sale",
    url: "/mens-grooming-essentials-under-1000-amazon-sale.html",
    title: "5 Men's Grooming Essentials to Buy in Amazon's Aug 7 Freedom Sale (Under ₹1000)",
    excerpt: "5 real grooming products for guys — face wash, sunscreen, moisturizer, lip balm, and a mask — all under ₹1000 total, priced individually before Amazon's Aug 7 Freedom Sale.",
    image: "/assets/images/mens-grooming-essentials-under-1000-amazon-sale.webp",
    category: "Men's Skincare",
    categorySlug: "mens-skincare",
    tags: ["mens-skincare", "grooming", "budget-picks", "oily-skin"],
    date: "2026-08-06",
    dateLabel: "Aug 6, 2026",
    readTime: "8 min read",
    views: 0,
    featured: false
  },
  {
    slug: "4-under-eye-cream-checklist-india",
    url: "/4-under-eye-cream-checklist-india.html",
    title: "4 Things to Check Before Buying An Under-Eye Cream in India",
    excerpt: "A 4-point checklist for under-eye cream shopping in India — active %, price-per-gram, and humidity fit, tested against a ₹449 pick.",
    image: "/assets/images/4-under-eye-cream-checklist-india.webp",
    category: "Eye Care",
    categorySlug: "eye-care",
    tags: ["eye-cream", "exam-season", "dark-circles", "before-you-buy", "budget-picks", "students"],
    date: "2026-08-07",
    dateLabel: "Aug 7, 2026",
    readTime: "8 min read",
    views: 0,
    featured: false
  },
  {
    slug: "anti-pollution-face-wash-men-delhi-mumbai-india",
    url: "/anti-pollution-face-wash-men-delhi-mumbai-india.html",
    title: "Top 4 Anti-Pollution Face Washes for Men in Delhi & Mumbai Under ₹500 (2026)",
    excerpt: "We compare 4 anti-pollution face washes under ₹500 by ingredients, price, aur real skin feel — for guys living with Delhi & Mumbai pollution.",
    image: "/assets/images/anti-pollution-face-wash-men-delhi-mumbai-india.webp",
    category: "Men's Skincare",
    categorySlug: "mens-skincare",
    tags: ["mens-skincare", "pollution-defense", "budget-picks", "oily-skin", "grooming"],
    date: "2026-08-08",
    dateLabel: "Aug 8, 2026",
    readTime: "7 min read",
    views: 0,
    featured: false
  }
];
