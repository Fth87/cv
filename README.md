# Muhammad Fatih Al Fawwaz — Personal CV

My Personal CV website.

## Tech Stack

- [Astro](https://astro.build) — static site framework
- [React](https://react.dev) — interactive UI components via `client:load`
- [Tailwind CSS v4](https://tailwindcss.com) — utility-first styling
- [AOS](https://michalsnik.github.io/aos/) — scroll-triggered animations
- [Lucide React](https://lucide.dev) — icon library
- [Devicon](https://devicon.dev) — tech stack icons in the Skills section

## Project Structure

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── Logo.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   ├── background.svg
│   │   └── tanstack.tsx
│   ├── components/
│   │   ├── App.tsx              # Root React component, initialises AOS
│   │   ├── Hero.tsx             # Name, role, and contact links
│   │   ├── Summary.tsx          # Profile summary section
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Skills.tsx           # Technical skills grid with Devicon icons
│   │   ├── EducationAwards.tsx  # Education and achievements
│   │   └── Footer.tsx           # Footer with social links
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML layout (loads global CSS, AOS CSS, Devicon)
│   ├── pages/
│   │   └── index.astro          # Entry page, renders <App client:load />
│   ├── static/
│   │   └── data.ts              # All CV data (personal info, experience, skills, etc.)
│   ├── styles/
│   │   └── global.css           # Global styles and Tailwind v4 theme tokens
│   └── data.ts                  # Barrel re-export of src/static/data.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Commands

All commands are run from the root of the project:

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `pnpm install`    | Install dependencies                        |
| `pnpm dev`        | Start local dev server at `localhost:4321`  |
| `pnpm build`      | Build the production site to `./dist/`      |
| `pnpm preview`    | Preview the production build locally        |
| `pnpm astro ...`  | Run Astro CLI commands (e.g. `astro check`) |
