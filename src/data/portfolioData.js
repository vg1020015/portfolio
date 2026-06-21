// ─────────────────────────────────────────────────────────────
// All editable content for the portfolio lives in this file.
// Update names, links, copy, and data here — no need to touch
// component code for routine content changes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Vicky Gupta',
  title: 'Shopify Developer',
  roles: ['Shopify Developer', 'Liquid Specialist', 'Storefront Builder', 'Problem Solver'],
  location: 'Indore, Madhya Pradesh, India',
  email: 'hello@vickygupta.dev', // placeholder — replace with real contact email
  linkedin: 'https://www.linkedin.com/in/vicky-gupta-a697292b8/?skipRedirect=true',
  resumeFile: '/Vicky_Gupta_Resume.pdf',
  intro:
    "I build fast, reliable Shopify storefronts — from pixel-perfect Liquid themes to custom checkout extensions. Three years deep in the Shopify ecosystem, I care about clean code, real performance gains, and stores that convert.",
}

export const about = {
  summary:
    "Shopify Developer with about 3 years of experience in custom theme development, app integration, and store optimization. I specialize in building high-performing, user-friendly e-commerce stores tailored to each client's brand and goals — with a constant focus on clean code, responsive design, and performance-driven solutions that help brands grow online. Proficient in Git/GitHub for version control and collaborative development.",
  goals:
    "Currently building custom Shopify Plus apps with the Remix framework and Shopify Functions, while pursuing an MBA to round out the technical work with a sharper business lens.",
}

export const skills = {
  Languages: [
    { name: 'Liquid', level: 92 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3 / Flexbox', level: 90 },
  ],
  'Frameworks & Platforms': [
    { name: 'Shopify Plus (Extensions & Functions)', level: 85 },
    { name: 'Remix', level: 75 },
    { name: 'Shopify API', level: 88 },
    { name: 'Shopify Webhooks', level: 82 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 88 },
    { name: 'Shopify CLI', level: 85 },
    { name: 'SEO Optimization', level: 78 },
    { name: 'Performance Tuning', level: 80 },
  ],
}

// Real client storefronts built/customized during Vicky's Shopify development work.
// No public GitHub repos exist for these — they are private client codebases —
// so each card links out to the live store only.
export const projects = [
  {
    title: 'Ultravoom',
    description:
      'Custom Shopify storefront build with a streamlined product browsing experience and a checkout tuned for conversion.',
    stack: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
    demo: 'https://ultravoom.com/',
    github: null,
  },
  {
    title: 'Yogable',
    description:
      'Theme customization and store optimization for a wellness brand, with responsive layouts across every device.',
    stack: ['Shopify', 'Liquid', 'Responsive Design'],
    demo: 'https://yogableshop.com/',
    github: null,
  },
  {
    title: 'Labwear',
    description:
      'Performance-focused storefront with image compression and lazy loading to keep page loads fast at scale.',
    stack: ['Shopify', 'Liquid', 'Performance Optimization'],
    demo: 'https://labwear.com/',
    github: null,
  },
  {
    title: 'House of Anmol',
    description:
      'Custom theme development matched to brand guidelines, with third-party app integration for payments and shipping.',
    stack: ['Shopify', 'Liquid', 'App Integration'],
    demo: 'https://houseofanmol.com/',
    github: null,
  },
  {
    title: 'Studio Cata',
    description:
      'Clean, design-led storefront build with structured data and SEO best practices to improve search visibility.',
    stack: ['Shopify', 'Liquid', 'SEO'],
    demo: 'https://studiocata.com/',
    github: null,
  },
  {
    title: 'Chorel Jewellery',
    description:
      'Jewellery e-commerce store with product management workflows and a polished, on-brand shopping experience.',
    stack: ['Shopify', 'Liquid', 'Store Optimization'],
    demo: 'https://www.choreljewellery.com/',
    github: null,
  },
  {
    title: 'KXNG Cosmetics',
    description:
      'Cosmetics storefront with custom UI components and cross-browser tested, responsive product pages.',
    stack: ['Shopify', 'Liquid', 'UX'],
    demo: 'https://kxngcosmetics.com/',
    github: null,
  },
]

export const experience = [
  {
    role: 'Shopify Developer',
    company: 'Parkhya Solutions Pvt Ltd',
    location: 'Indore, Madhya Pradesh',
    duration: 'July 2025 – Present',
    points: [
      'Developed custom Shopify apps using the Shopify API and Remix framework, focused on Shopify Plus features including extensions and functions.',
      'Built an inventory sync app using Shopify webhooks for real-time stock updates across product variants.',
      'Created a custom Admin UI extension for bulk order printing, cutting order processing time by 60%.',
      'Implemented delivery customization functions to manage shipping options during checkout.',
    ],
  },
  {
    role: 'Web Developer (Shopify Developer)',
    company: 'IT Geeks Technologies Pvt. Ltd.',
    location: 'Dewas, Madhya Pradesh',
    duration: 'December 2023 – July 2025',
    points: [
      'Designed, customized, and optimized multiple Shopify stores for diverse clients, with responsive design across every device.',
      'Developed custom Shopify themes using Liquid, HTML5, and CSS3 (Flexbox) to match each client\u2019s brand guidelines.',
      'Integrated third-party apps for payment gateways, shipping solutions, and marketing tools.',
      'Optimized store performance through code cleanup, image compression, and lazy loading — improving load times and conversion rates.',
      'Collaborated cross-functionally using Git and GitHub for smooth code management and deployment.',
      'Implemented SEO best practices and structured data to improve store visibility and search rankings.',
    ],
  },
  {
    role: 'Web Designer',
    company: 'Soham Web Solution',
    location: 'Dewas, Madhya Pradesh',
    duration: 'March 2023 – November 2023',
    points: [
      'Designed and developed responsive websites focused on user experience and cross-browser compatibility.',
      'Created wireframes, mockups, and prototypes for client approval.',
      'Implemented CSS Flexbox layouts and modern web design techniques.',
      'Worked directly with clients to translate requirements into customized web solutions.',
    ],
  },
]

export const education = [
  {
    school: 'Prestige Institute of Management & Research, Indore',
    degree: 'Master of Business Administration (MBA)',
    status: 'Expected',
  },
  {
    school: 'Prestige Institute of Management & Research, Indore',
    degree: 'Bachelor of Commerce (BCom)',
    status: 'Completed',
  },
]

export const stats = [
  { label: 'Live Stores Shipped', value: 7, suffix: '+' },
  { label: 'Years of Experience', value: 3, suffix: '+' },
  { label: 'Technologies Mastered', value: 12, suffix: '+' },
  { label: 'Order Processing Time Cut', value: 60, suffix: '%' },
]
