# December Reach

Official website for December Reach.

The site is built with **Astro 6** and custom CSS. It is separate from the operating-system source and the emulation runtime.

## Development

Requirements: Node.js 22.12.0 or newer.

\`\`\`sh
npm install
npm run dev
\`\`\`

## Build

\`\`\`sh
npm run build
npm run preview
\`\`\`

Astro outputs the static site to \`dist/\`.

## Site structure

- \`/\` — organization projects, platform overview, documentation and repositories.
- \`/architecture/\` — reachOS and Fabric Dessert architecture notes.
- \`/devices/\` — published device integration notes for auroraADE.
- \`/emulation/\` — source acquisition and emulation responsibility model.

## Typography

The site uses the Open Sans variable font locally from `public/fonts/open-sans/`, including upright and italic styles. The font is distributed under the SIL Open Font License 1.1; its license is included as `public/fonts/open-sans/OFL.txt`.

Open Sans does not provide the Korean glyph coverage required by this site, so Korean text falls back to the platform's Korean sans-serif font.

## Architecture notes

- The website documents the source-acquisition and access model.
- OS source is acquired and preloaded before a session is started.
- The JavaScript backend is responsible for emulation and execution.
- The browser frontend does not emulate the guest CPU, memory, or devices.
- The emulation service is separate from this static GitHub Pages site.

## Project links

- OS source collection: https://github.com/DecemberReach/reach-to-be-reached
- Fabric Dessert implementation reference: https://github.com/critical-dummy/reachOS
- auroraADE development repository: https://github.com/critical-dummy/auroraADE-AI-Development-Test
- December Reach organization: https://github.com/DecemberReach

## Deployment

The GitHub Actions workflow in \`.github/workflows/deploy.yml\` builds the Astro site and publishes \`dist/\` to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
