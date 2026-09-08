# hope-mvp-site

Published build of **Jisir / Gesher** — <https://1210395.github.io/hope-mvp-site/>

## This repository is generated

Everything here except this README, `.nojekyll` and `.gitattributes` is Vite
build output. Do not edit `index.html` or `assets/` by hand; the next build
overwrites them, and the asset filenames are content-hashed.

Source lives in [hope-mvp](https://github.com/1210395/hope-mvp).

## Publishing a new build

From a checkout of the source repository:

```bash
npm install
npm run build:pages     # vite build --base=/hope-mvp-site/
```

Then copy the contents of `dist/` over the root of this repository and commit.
`build:pages` is required rather than plain `build`: GitHub Pages serves this
project from the `/hope-mvp-site/` subpath, and the default base would emit
asset URLs rooted at `/` that 404 here.

`.nojekyll` keeps Pages from running the output through Jekyll.
