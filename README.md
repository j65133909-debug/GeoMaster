# GeoMaster

> Interactive Euclidean Geometry Learning Platform for CAPS Mathematics (Grade 10–12)

GeoMaster is a polished, responsive educational web app designed to teach Euclidean Geometry to students following the South African CAPS Mathematics curriculum. It combines an interactive geometry laboratory with a personal AI mathematics tutor, prioritizing understanding, visualization, reasoning, and problem-solving over memorization.

## ✨ Features

- **🔬 Interactive Geometry Lab** — Drag vertices in real-time, visualize theorems (circumcircle, incircle, medians, altitudes), and explore live measurements.
- **🤖 AI Mathematics Tutor** — Ask questions, get step-by-step solutions, Socratic guidance, and worked proofs.
- **📚 Structured Lessons** — CAPS-aligned curriculum from Grade 10 foundations to Grade 12 riders.
- **📱 Responsive Design** — Works on desktop, tablet, and mobile.
- **🌙 Dark Mode** — Built-in light/dark theme toggle.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Installation

```bash
git clone https://github.com/yourusername/GeoMaster.git
cd GeoMaster
npm install
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
GeoMaster/
├── src/
│   ├── components/          # React components
│   │   ├── geometry/        # Triangle explorer, measurements
│   │   ├── Layout.jsx       # Main layout
│   │   └── Navbar.jsx       # Navigation
│   ├── pages/               # Page components
│   │   ├── Home.jsx         # Landing
│   │   ├── GeometryLab.jsx  # Interactive lab
│   │   ├── Tutor.jsx        # AI tutor chat
│   │   └── Lessons.jsx      # Lesson list & detail
│   ├── lib/                 # Utilities
│   │   └── geometry.js      # Math helpers
│   ├── data/                # Content
│   │   └── lessons.js       # CAPS curriculum
│   ├── App.jsx              # Main app
│   └── index.css            # Global styles
├── base44/                  # Backend (AI tutor)
│   └── functions/
│       └── askTutor/        # Tutor API
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## 🛠️ Technology Stack

- **React 18** + TypeScript
- **Vite** — Ultra-fast build tool
- **Tailwind CSS** — Utility-first styling
- **React Router** — Client-side navigation
- **Lucide Icons** — Clean SVG icons
- **React Markdown** — Lesson content
- **TanStack Query** — Data fetching
- **Base44** — Backend & AI (optional)

## 🎓 CAPS Curriculum Coverage

### Grade 10
- Angles and lines (revision, corresponding, alternate, co-interior)
- Triangle properties & angle sum
- Congruency (SSS, SAS, RHS, AAS)
- Mid-point theorem
- Quadrilaterals

### Grade 11
- Circle geometry (angles at centre, angle in semicircle)
- Cyclic quadrilaterals
- Tangents & alternate segment theorem
- Proportionality

### Grade 12
- Similarity & ratio
- Advanced riders
- Coordinate geometry foundations

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to https://vercel.com/new
3. Import the repository
4. Vercel auto-detects Vite → Deploy
5. Your site is live!

### Netlify

```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

Update `vite.config.ts`:
```js
export default defineConfig({
  base: '/GeoMaster/',
  // ...
})
```

Then:
```bash
npm run build
```

Push `dist/` to `gh-pages` branch.

## 🔌 Environment Variables

Create `.env.local`:
```
VITE_API_URL=https://your-backend-api.com
VITE_AI_TUTOR_KEY=your_api_key
```

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repo
2. Create a feature branch
3. Commit with clear messages
4. Open a PR

## 📄 License

MIT License — see LICENSE.md

## 🙋 Support

Questions or issues? Open a GitHub issue or contact the maintainers.

---

**GeoMaster** — Making Euclidean Geometry accessible, visual, and engaging. 🎓
