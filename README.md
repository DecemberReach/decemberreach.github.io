# December Reach

Official website for December Reach.

Current website release: Reach Hub 1.0.

The site is built with Astro 6 and custom CSS. It is separate from the operating-system source and the emulation runtime.

## Site structure

- / — Hub with project and website-version catalogues.
- /project/auroraADE/ — auroraADE project page.
- /project/haloDOT/ — haloDOT project page.
- /project/stellaOS/ — stellaOS project page.
- /platform/ — Fabric Dessert platform architecture.
- /resources/ — technical documentation and source repositories.
- /devices/ — published device integration status.
- /emulation/ — source acquisition and emulation responsibility model.
- /architecture/ — compatibility redirect to /platform/.

## OS source organization

All operating-system projects are developed in the shared repository:

https://github.com/DecemberReach/reach-to-be-reached

Each OS is developed in its own directory within that repository. The project pages link to this shared source repository rather than separate per-OS repositories.

## Website release

- Release name: Reach Hub
- Version: 1.0
- Theme: unified dark visual system across all site pages

## Artwork

Temporary landscape artwork is served from Unsplash. Each image links to its photographer's Unsplash photo page. The landscape photographs are not screenshots of the projects or their interfaces.

## Typography

The site uses the Open Sans variable font locally from public/fonts/open-sans/, including upright and italic styles. The font is distributed under the SIL Open Font License 1.1; its license is included as public/fonts/open-sans/OFL.txt.

Korean text falls back to the platform's Korean sans-serif font.

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

Astro outputs the static site to dist/.

## Architecture notes

- OS source is acquired and preloaded before a session is started.
- The JavaScript backend is responsible for emulation and execution.
- The browser frontend does not emulate the guest CPU, memory, or devices.
- The emulation service is separate from this static GitHub Pages site.

## Project links

- Shared OS source repository: https://github.com/DecemberReach/reach-to-be-reached
- Fabric Dessert implementation reference: https://github.com/critical-dummy/reachOS
- December Reach organization: https://github.com/DecemberReach

## Deployment

The GitHub Actions workflow in .github/workflows/deploy.yml builds the Astro site and publishes dist/ to GitHub Pages. In repository settings, set Pages → Build and deployment → Source to GitHub Actions.
