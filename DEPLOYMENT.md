# Deployment Guide

## Quick Start: Vercel (Recommended)

### 1. Prerequisites
- GitHub account with your GeoMaster repo pushed
- Vercel account (free at vercel.com)

### 2. Deploy
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Find and select `j65133909-debug/GeoMaster`
4. Vercel auto-detects Vite configuration
5. Click **Deploy**
6. Wait ~2 minutes for build
7. ✅ Your app is live! (URL: `geomaster-xyz.vercel.app`)

### 3. Environment Variables (if using backend)
In Vercel dashboard:
- Go to **Settings → Environment Variables**
- Add `VITE_API_URL` and `VITE_AI_TUTOR_KEY`
- Redeploy

---

## Alternative: Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## Alternative: GitHub Pages

### 1. Update vite.config.ts
```ts
export default defineConfig({
  base: '/GeoMaster/',
  // ...
})
```

### 2. Build & Deploy
```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

### 3. Enable in GitHub Settings
- Repo → Settings → Pages
- Source: Deploy from a branch
- Branch: main, folder: /dist
- Save

---

## Performance Optimization

- ✅ Gzip compression (automatic on Vercel)
- ✅ Code splitting (configured in vite.config.ts)
- ✅ Minification (terser)
- ✅ CSS purging (Tailwind)
- ✅ Image optimization (use modern formats)

## Security Checklist

- ✅ HTTPS enabled (automatic)
- ✅ Content Security Policy headers (configure in vercel.json)
- ✅ No secrets in code (use .env.local)
- ✅ Dependencies up-to-date (run `npm audit`)

## Monitoring

### Vercel Analytics
- Dashboard shows build times, deployment status, edge function logs

### Error Tracking (Optional)
- Integrate Sentry or Rollbar for client-side errors
- Add to `src/main.jsx`:
  ```js
  import * as Sentry from "@sentry/react";
  Sentry.init({ dsn: "your-dsn" });
  ```

---

## Troubleshooting

### Build fails with "dependency not found"
- Run `npm install` locally
- Check `package.json` for typos
- Push changes and redeploy

### Site shows blank page
- Check browser console for errors
- Verify `base` path in vite.config.ts matches deployment URL
- Check Vercel logs (Deployments → Details)

### Slow initial load
- Enable Vercel Edge Caching
- Compress images
- Split large components with `React.lazy()`

---

## Next Steps

1. ✅ Deploy to Vercel
2. ✅ Set up custom domain (optional)
3. ✅ Configure analytics
4. ✅ Add monitoring
5. ✅ Promote to users!
