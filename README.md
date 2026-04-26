# Louis Peter Photography

Portfolio website for Louis Peter Photography — a Frankfurt-based photographer covering portrait, event, drone, and lifestyle work.

## Tech Stack

- **Vite 7** — build tool and dev server
- **React 18** with **react-router-dom 7** — single-page app with client-side routing
- **react-icons** — social icons
- **Netlify** — hosting, form handling, and SPA redirect

## Getting Started

Requires Node 24.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Project Structure

```
.
├── index.html              # Vite entry; includes hidden Netlify form for build detection
├── src/
│   ├── main.jsx            # React root + BrowserRouter
│   ├── App.jsx             # Routes, layout, pages, and components
│   ├── styles.css          # All styles
│   └── data/siteData.js    # Site content (copy, image refs, social links, legal text)
├── images/                 # Gallery and hero photos
├── Products/               # "What I Offer" service photos
├── video/                  # Videography clip
├── public/_redirects       # Netlify redirect fallback
├── netlify.toml            # Netlify build config (Node 24, dist publish)
└── vite.config.js
```

## Pages

- `/` — Home: hero collage, videography, about, services, contact form
- `/gallery` — Portfolio grid
- `/impressum` — German legal information

## Contact Form

The contact form is handled by [Netlify Forms](https://docs.netlify.com/forms/setup/). A hidden duplicate form lives in `index.html` so Netlify's build-time HTML parser can register the form fields; the live React form posts to it at runtime.

## Deployment

Pushes to `main` are built and deployed by Netlify using `netlify.toml`. The build runs `npm run build` and publishes `dist/`. The SPA redirect (`/* → /index.html`) ensures direct links to `/gallery` and `/impressum` resolve correctly.

## Contributing

Fork the repository and submit a pull request.

---

![status](https://img.shields.io/badge/status-live-brightgreen?style=flat-square)
