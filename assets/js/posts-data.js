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
    slug: "hostel-skincare-essentials-girls-india",
    url: "/hostel-skincare-essentials-girls-india.html",
    title: "5 Hostel Skincare Essentials Under ₹500 Each (India, 2026)",
    excerpt: "5 real, named products — cleanser, serum, sunscreen, moisturizer, lip balm — each under ₹500, picked for Indian hostel hard water and humidity.",
    image: "/assets/images/hostel-skincare-essentials-girls-india.webp",
    category: "Routines",
    categorySlug: "routines",
    tags: ["hostel", "budget-picks", "students", "monsoon", "essentials"],
    date: "2026-08-09",
    dateLabel: "Aug 9, 2026",
    readTime: "7 min read",
    views: 0,
    featured: false
  }
];
