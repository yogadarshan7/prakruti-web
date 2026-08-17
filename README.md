# prakruti-web

School website for [Prakruti Yogashala](https://www.prakrutiyogashala.com) — yoga teacher training in Tapovan, Rishikesh. React, TypeScript, and Vite.

This is the **school** site (100 / 200 / 300 hour TTC), not an Ayurveda constitution quiz. The name Prakruti Yogashala is the school.

Agent copy rules live in [`.cursor/skills/prakrutiyogashala-website/`](.cursor/skills/prakrutiyogashala-website/SKILL.md).

## Development

```bash
npm ci
npm run dev
```

Open http://localhost:5173

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript without emitting |

## Cloud Agent

Environment configuration lives in `.cursor/environment.json`. The install script runs `npm ci` and the dev server starts automatically in a named terminal.
