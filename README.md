Personal Portfolio
---
Pre-AI website Built with **React 17** and deployed via Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/c893913c-2107-4340-bcdf-c3ebdc1b7401/deploy-status)](https://app.netlify.com/sites/leventisportfolio/deploys)

🚀 https://me.tooper.io 🚀

**Setup**
```bash
mise install     # Node 24 (pinned in mise.toml)
mise run setup   # secret-scanning hook + npm ci
mise run dev
```
Secrets: 1Password, **Dev** vault, item **`react_portfolio`** (`op inject -i .env.tpl -o .env`). Variables are listed in `.env.example`.

**Exception to the runtime standard:** Create React App 4 (webpack 4) needs `--openssl-legacy-provider` on Node 17+, so every `react-scripts` command passes it. Moving to Vite removes the flag.

**Features**
- Light / dark mode
- Interactive terminal with active links
- Typewriter effect on landing
- Scroll animations
- Mobile responsive

**Libraries**
- [AOS](https://michalsnik.github.io/aos/) — scroll animations
- [Typewriter Effect](https://www.npmjs.com/package/typewriter-effect) — landing text
- [React Image Gallery](https://www.npmjs.com/package/react-image-gallery) — project media
