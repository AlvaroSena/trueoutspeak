# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Type-check + Vite build
pnpm lint         # ESLint
pnpm typecheck    # TypeScript check only (no emit)
pnpm format       # Prettier (ts, tsx)
pnpm preview      # Preview production build
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add <component-name>
```

Components land in `src/components/ui/`. Import via the `@/components/ui/<name>` alias.

## Architecture

**Stack:** React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui (radix-maia style), Radix UI primitives, Lucide icons, Lora Variable as the default serif/heading font.

**Entry point:** `src/main.tsx` wraps the app in `<ThemeProvider>` before mounting.

**Theme system:** `src/components/theme-provider.tsx` manages dark/light/system theme via `localStorage`. It applies the resolved theme as a `dark` or `light` class on `<html>`. Press `d` anywhere (outside inputs) to toggle dark mode. Consumers use the `useTheme()` hook.

**Styling:** Tailwind v4 config is inline in `src/index.css` using `@theme inline` — there is no `tailwind.config.*` file. Design tokens (colors, radius, sidebar, charts) are CSS custom properties using `oklch()`. The `@/` path alias maps to `src/`.

**shadcn config:** `components.json` uses `style: "radix-maia"`, base color `stone`, CSS variables enabled, icon library `lucide`. Path aliases match Vite: `@/components`, `@/lib/utils`, `@/hooks`.
