# @company/design-system

Reusable React component library scaffold built with Vite library mode, TypeScript, SCSS, Style Dictionary, and Storybook.

## Install

```bash
npm install
```

## Scripts

- `npm run dev`: Local Vite playground for quick component checks.
- `npm run build:tokens`: Build SCSS token variables from `tokens/`.
- `npm run build`: Build tokens, library bundles, CSS, and TypeScript declarations.
- `npm run storybook`: Start Storybook docs on port 6006.
- `npm run build-storybook`: Build static Storybook output.

## Local Usage

Build first:

```bash
npm run build
```

Then consume locally in another project using `npm link` (or a local tarball):

```bash
# in this project
npm link

# in consuming project
npm link @company/design-system
```

Component usage:

```tsx
import { Button } from '@company/design-system'
import '@company/design-system/styles.css'

export function App() {
  return <Button variant="primary" size="md">Hello</Button>
}
```

## Build Output For Publishing

The `dist/` folder contains:

- `index.js` (ES module build)
- `index.cjs` (CommonJS build)
- `index.d.ts` (type declarations)
- `style.css` (compiled library styles)

Only publishable files are included through the `files` field in `package.json`.

## Token Pipeline

- Source tokens live in `tokens/*.json`.
- `style-dictionary.config.js` generates `src/styles/_variables.scss`.
- SCSS components consume variables via `@use`.
