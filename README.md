# Portfolio

React + Vite portfolio, deployed to GitHub Pages by GitHub Actions.

## Edit your content
All text, links, findings, certificates and socials live in `src/data.js`.
Replace `public/cv.pdf` with your own CV (delete `public/README.txt`).
Update the `<title>` and description in `index.html`.

## Run locally
    npm install
    npm run dev

## Deploy
1. Create a GitHub repo and push this project to the `main` branch.
2. In the repo go to Settings → Pages and set Source to **GitHub Actions**.
3. Every push to `main` now builds and publishes the site.
   For a root URL (`username.github.io`), name the repo `username.github.io`.
