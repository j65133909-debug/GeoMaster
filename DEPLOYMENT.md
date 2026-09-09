# GeoMaster Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
- Vercel account (free at vercel.com)
- Git repository pushed to GitHub

### Steps

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

3. **Configure**
   - Connect GitHub repository
   - Select framework: Next.js (or blank)
   - Build command: `npm run build`
   - Output directory: `dist`

### Alternative: Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Alternative: GitHub Pages

```bash
npm run build
git add dist/
git commit -m "Deploy to GitHub Pages"
git push
```

## Environment Setup

Create `.env.local`:
```
VITE_API_URL=https://api.geomaster.com
VITE_AI_TUTOR_KEY=your_key
```

## Performance Checklist

- [ ] Enable gzip compression
- [ ] Configure caching
- [ ] Set up CDN
- [ ] Monitor Core Web Vitals
- [ ] Test on slow networks
- [ ] Optimize bundle size

## Security Checklist

- [ ] Enable HTTPS
- [ ] Configure CORS
- [ ] Add security headers
- [ ] Set up rate limiting
- [ ] Implement input validation

## Monitoring

- Google Analytics
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring

## Support

For help, open an issue on GitHub.
