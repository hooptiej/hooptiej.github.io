# hooptiej.com

Personal FPV / hobby-build site. Plain static HTML + CSS, no build step, no framework.

Served by GitHub Pages from the `master` branch root, with the custom domain `hooptiej.com`
configured via the `CNAME` file.

## Structure

- `index.html` — home
- `blog/` — posts, one file per post
- `projects/` — projects overview
- `assets/style.css` — shared styles
- `404.html` — not-found page

## Local preview

Any static file server works, e.g.:

```
python -m http.server 8000
```

Then open `http://localhost:8000`.
