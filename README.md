# Eunoia Innovations

Website for **Eunoia Innovations** — autonomous marine robotics.

Live: [https://sunanth-developer.github.io/eunoiainnovations/](https://sunanth-developer.github.io/eunoiainnovations/)

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Admin blog

- Public blog: `/blog`
- Login: `/admin/login`
- Dashboard: `/admin`

Default local login is `admin` / `eunoia-admin`. Copy `.env.example` to `.env` to change it. For GitHub Pages, set repository secrets `VITE_ADMIN_USER` and `VITE_ADMIN_PASSWORD`.

New posts are saved in the browser first. Export JSON from the dashboard, replace `public/blog.json`, and deploy so every visitor can read them.

