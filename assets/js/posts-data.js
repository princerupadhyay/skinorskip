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
    image: "/assets/images/monsoon-skincare-routine-oily-skin-students.png",
    category: "Routines",
    categorySlug: "routines",
    tags: ["routine", "students", "budget-picks", "monsoon", "oily-skin"],
    date: "2027-08-01",
    dateLabel: "Aug 1, 2027",
    readTime: "7 min read",
    views: 0,
    featured: false
  }
];
