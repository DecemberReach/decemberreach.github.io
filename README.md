# December Reach

Official website for December Reach, an operating-system development project.

The site is built with **Astro 6** and custom CSS. It is intentionally kept separate from the operating-system source and the emulation runtime.

## Development

Requirements: Node.js 22.12.0 or newer.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Astro outputs the static site to `dist/`.

## Architecture notes

- The public website is the source-acquisition and presentation surface.
- OS source is acquired and preloaded before a session is started.
- The JavaScript backend is responsible for emulation and execution.
- The browser frontend does not emulate the guest CPU, memory, or devices.
- The emulation service is separate from this static GitHub Pages site.

## Project links

- OS source collection: https://github.com/DecemberReach/reach-to-be-reached
- Fabric Dessert implementation reference: https://github.com/critical-dummy/reachOS
- December Reach organization: https://github.com/DecemberReach

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes `dist/` to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
