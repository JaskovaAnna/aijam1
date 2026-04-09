# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server at http://localhost:5173/aijam1/ |
| `npm run build` | TypeScript type-check + production build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build locally |

## Architecture

Single-page React 19 app (no router, no global state). Entry: `src/main.tsx` → `src/App.tsx` → components in `src/components/`.

`src/index.css` defines the Tailwind v4 theme via `@theme {}` — custom colors (Material Design tokens), fonts (`Noto Serif` / `Manrope`), and zero border-radius. Google Fonts and Material Symbols are loaded via `<link>` in `index.html`. Do not use a `tailwind.config.js` — Tailwind v4 is configured purely in CSS.

The app is deployed to GitHub Pages under the `/aijam1/` base path, set in `vite.config.ts`.

## Google Stitch MCP

To add the Stitch MCP server to Claude Code (required for loading designs from stitch.withgoogle.com):

```bash
claude mcp add stitch --transport http https://stitch.googleapis.com/mcp --header "X-Goog-Api-Key: YOUR-API-KEY" -s project
```

The VS Code config lives in `.vscode/mcp.json` and is separate from Claude Code's MCP config.

Available Stitch tools (via MCP): `get_screen`, `list_screens`, `get_project`, `generate_screen_from_text`, `edit_screens`, `apply_design_system`.

## Skills

The `/update-docs` skill (`.claude/skills/update-docs/SKILL.md`) analyzes the codebase and creates/updates `AGENTS.md`. Copy from `docs/skills/update-docs/SKILL.md` to activate.
