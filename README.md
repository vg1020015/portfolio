# Vicky Gupta — Shopify Developer Portfolio

A modern, animated developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Design direction

The visual identity is pulled from the developer's actual stack rather than a generic
template: the accent color is a terracotta/checkout-tag palette, the typewriter and
section labels are styled as Liquid template tags (`{{ ... }}`), and project cards are
laid out like product cards in a storefront grid — a nod to the e-commerce subject matter.

## Tech stack

- React 18 (Vite)
- Tailwind CSS (custom color tokens, dark mode via `class` strategy)
- Framer Motion (scroll reveals, page-load animation, hover micro-interactions)
- React Icons

## Project structure

```
shopify-portfolio/
├── public/
│   ├── favicon.svg
│   └── Vicky_Gupta_Resume.pdf      # served by the "Download Resume" button
├── src/
│   ├── components/                 # one component per section/UI piece
│   ├── context/ThemeContext.jsx    # dark/light mode toggle
│   ├── hooks/                      # useTypewriter, useCountUp, useOnScreen
│   ├── data/portfolioData.js       # ⭐ all editable content lives here
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the printed local URL (usually http://localhost:5173)
```

To build for production:

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Editing content

Almost everything you'd want to change — name, role, intro copy, skills, projects,
work experience, stats — lives in **`src/data/portfolioData.js`**. You generally
won't need to touch component code for routine updates.

To swap in a real profile photo, open `src/components/About.jsx` and replace the
placeholder initials block with an `<img src="/your-photo.jpg" alt="..." />` tag
(drop the image file into `public/` first).

To wire the contact form up to a real inbox, open `src/components/Contact.jsx` and
replace the `console.log` in `handleSubmit` with a call to a form service
(e.g. Formspree, EmailJS) or your own API endpoint.

## Notes

- The seven storefront projects shown are real, live Shopify stores built/customized
  during client work. They link to "Live Demo" only — there are no public GitHub
  repos for these (private client codebases) — so the GitHub button is shown as
  disabled and labeled "Private client repo" where no repo exists.
- The contact email in `portfolioData.js` is a placeholder — update it to a real
  inbox before publishing.
