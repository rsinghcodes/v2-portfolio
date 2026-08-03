# AGENTS.md

Portfolio site for Raghvendra Singh (rsingh.codes). Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber. Node 22, npm 10.

## Commands

- `npm run dev` — dev server (uses `--turbopack`)
- `npm run build` / `npm start` — production build/run
- **Lint is broken; do not rely on it.** `npm run lint` runs `next lint`, which was removed in Next 16 and fails (treats `lint` as a directory). `npx eslint .` also crashes during FlatCompat config validation. Verify with:
  - `npx tsc --noEmit` (passes cleanly today)

## Architecture

- **All site content and SEO live in `src/data/portfolio.json`** — metadata, personal, sections, navItems, socialLinks, titles (typewriter), skills, experience, projects, certifications. `src/app/layout.tsx` builds the full `Metadata` object from `metadata` in this JSON. To change any visible text or SEO, edit the JSON, not the components. Components just render it.
- Routes: `/` (`src/app/page.tsx`) and `/projects` (`src/app/projects/page.tsx`). Both are `'use client'`. `src/app/sitemap.ts` hardcodes the `https://rsingh.codes` URLs.
- Path alias `@/*` → `./src/*`.
- All components use `framer-motion` and `react-icons` (Fi*). 3D background is in `src/components/CanvasBackground.tsx` (react-three-fiber/drei). Check `src/components/` before adding a component — do not duplicate existing ones (e.g. `ProjectMockup`, `SocialIcons`, `TiltCard`, `Tooltip`).

## Theme

- `src/app/contexts/ThemeContext.tsx` toggles a `data-theme` attribute on `<html>` (light/dark, default dark, persisted to localStorage) and sets `--background`/`--foreground` CSS vars defined in `src/app/globals.css` (`:root`, `[data-theme='light']`, `[data-theme='dark']`).
- Tailwind color tokens (`text-foreground`, `bg-card`, etc.) are mapped from those vars via `@theme inline` in `globals.css`. Add new theme colors there; keep the `data-theme` selectors in sync.
- `useTheme()` must be called inside `ThemeProvider` (wraps all routes in `layout.tsx`).

## Next.js quirks

- `next.config.ts` has `images.remotePatterns` set to `[]` — no remote hosts are allowed for `next/image`. Any new remote `next/image` host must be added to `remotePatterns` (next/image throws on unlisted hosts).
- README claims Next.js 15; the installed version is 16.2.10 — trust `package.json`.
