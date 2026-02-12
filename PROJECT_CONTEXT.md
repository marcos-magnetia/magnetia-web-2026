# Magnetia Web 2026 - Project Context

> **Last Updated:** 2026-02-12
> **Status:** Sanity CMS Integration - Phase 1 Complete ✅

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Sanity CMS Integration](#sanity-cms-integration)
5. [Environment Variables](#environment-variables)
6. [Development Setup](#development-setup)
7. [Key Features & Routes](#key-features--routes)
8. [Next Steps](#next-steps)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

**Magnetia** is a B2B customer acquisition agency website built with Next.js 16, featuring:
- Bilingual content (Spanish/English) with next-intl
- Animated, narrative-style UI with Framer Motion
- Sanity CMS for content management (in progress)
- SEO optimized with metadata, sitemaps, and structured data

**Primary Domain:** https://www.magnetia.io
**Repo:** https://github.com/marcos-magnetia/magnetia-web-2026

---

## 🛠 Tech Stack

### Core
- **Framework:** Next.js 16.1.6 (App Router, Turbopack)
- **React:** 19
- **TypeScript:** Latest
- **Styling:** Tailwind CSS v4 (with `@theme inline`)
- **Animations:** Framer Motion v12

### Internationalization
- **Library:** next-intl
- **Locales:** Spanish (es, default), English (en)
- **Routing:** Locale prefix as-needed (`/` = Spanish, `/en` = English)

### CMS (New)
- **Platform:** Sanity.io
- **Project ID:** `6hpk87gz`
- **Dataset:** production
- **Studio Route:** `/studio`
- **Packages:** sanity, @sanity/client, next-sanity, @sanity/vision

### Deployment
- **Platform:** Vercel
- **Production URL:** https://magnetia.io
- **Preview Deployments:** Automatic from GitHub (when configured)

---

## 📁 Project Structure

```
magnetia-next/
├── public/
│   └── imagenes/           # Images and assets
│       ├── fotos/
│       ├── logos/
│       └── iconos/
│
├── src/
│   ├── app/
│   │   ├── [locale]/       # Localized routes (es/en)
│   │   │   ├── layout.tsx  # Root layout with metadata
│   │   │   ├── page.tsx    # Homepage
│   │   │   ├── contacto/   # Contact page
│   │   │   ├── aviso-legal/
│   │   │   ├── politica-de-privacidad/
│   │   │   └── politica-de-cookies/
│   │   ├── studio/         # Sanity CMS Studio
│   │   │   ├── layout.tsx
│   │   │   └── [[...index]]/
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MeshGradientBg.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx           # Animated hero section
│   │   │   ├── Metodo.tsx         # 4-step method section
│   │   │   ├── Servicios.tsx      # Services section
│   │   │   ├── About.tsx          # About section
│   │   │   └── Testimonios.tsx
│   │   └── ui/
│   │       ├── MagneticButton.tsx
│   │       ├── LanguageSelector.tsx
│   │       └── MobileBottomCTA.tsx
│   │
│   ├── lib/
│   │   ├── animations.ts     # Framer Motion easing curves
│   │   ├── featureFlags.ts   # Feature toggles
│   │   └── sanity/           # 🆕 Sanity integration
│   │       ├── client.ts     # Frontend Sanity client
│   │       ├── queries.ts    # GROQ queries
│   │       └── types.ts      # TypeScript types
│   │
│   ├── i18n/
│   │   ├── navigation.ts     # next-intl navigation config
│   │   └── request.ts        # next-intl server config
│   │
│   ├── messages/
│   │   ├── es.json           # Spanish translations (250+ fields)
│   │   └── en.json           # English translations
│   │
│   └── middleware.ts         # i18n middleware (excludes /studio)
│
├── sanity/                   # 🆕 Sanity CMS configuration
│   ├── sanity.config.ts      # Studio configuration
│   ├── sanity.cli.ts         # CLI configuration
│   ├── lib/
│   │   └── client.ts         # Server-side Sanity client
│   └── schema/
│       ├── index.ts          # Schema registry
│       ├── documents/
│       │   └── hero.ts       # Hero section schema (ES/EN)
│       └── objects/
│           └── stat.ts       # Statistics object schema
│
├── .env.local                # Environment variables (not committed)
├── .env.example              # Template for env vars (gitignored)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🎨 Sanity CMS Integration

### Status: Phase 1 Complete ✅

#### What's Configured
- ✅ Sanity packages installed
- ✅ Project created (ID: `6hpk87gz`)
- ✅ Studio accessible at `/studio`
- ✅ Environment variables configured
- ✅ Hero schema created (with ES/EN support)
- ✅ Middleware updated to exclude `/studio` from i18n

#### Schemas Created

**Hero Section** (`sanity/schema/documents/hero.ts`)
- Fields: pretitle, line1, line2, line3, cta, scroll
- Stats array (4 items): number, label, description
- IDs: `hero-es`, `hero-en`

**Stat Object** (`sanity/schema/objects/stat.ts`)
- Fields: number, label, description

#### How to Access Studio

1. Start dev server: `npm run dev`
2. Navigate to: http://localhost:3000/studio
3. Sign in with Google or GitHub (OAuth)
4. Edit content in Hero Section → Español/English

#### Architecture Decisions

**Approach:** Embedded Studio (Local + Cloud)
- Studio runs at `/studio` route in Next.js
- Data stored in Sanity Cloud (always synced)
- Editable from anywhere (local or production)

**Translation Strategy:** Document-level
- One document per language (e.g., `hero-es`, `hero-en`)
- Simpler queries than field-level translation
- Better UX in Studio (edit one language at a time)

**Data Fetching:** ISR (Incremental Static Regeneration)
- Cache: 1 hour (`revalidate: 3600`)
- Pages pre-rendered for performance
- Auto-update after publishing in CMS

---

## 🔐 Environment Variables

### Required Variables

**File:** `.env.local` (not committed to git)

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID="6hpk87gz"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-02-12"

# Optional: For write operations (seeding, mutations)
SANITY_API_TOKEN=""  # Get from manage.sanity.io → API → Tokens
```

### Getting a Sanity API Token (for seeding)

1. Go to https://manage.sanity.io
2. Select project "Magnetia 2026"
3. Settings → API → Tokens
4. Create new token with "Editor" permissions
5. Copy token to `.env.local`

---

## 💻 Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Initial Setup

```bash
# Clone repo
git clone https://github.com/marcos-magnetia/magnetia-web-2026.git
cd magnetia-web-2026/magnetia-next

# Install dependencies
npm install

# Create .env.local (copy from .env.example or create manually)
cat > .env.local << EOF
NEXT_PUBLIC_SANITY_PROJECT_ID="6hpk87gz"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-02-12"
EOF

# Start dev server
npm run dev
```

### Common Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm run start            # Start production server

# Deployment
vercel --prod            # Deploy to production (manual)

# Sanity (future)
npm run sanity:seed      # Migrate JSON data to Sanity (not implemented yet)
```

### Accessing the App

- **Homepage (Spanish):** http://localhost:3000
- **Homepage (English):** http://localhost:3000/en
- **Contact Page:** http://localhost:3000/contacto
- **Sanity Studio:** http://localhost:3000/studio

---

## 🚀 Key Features & Routes

### Public Routes

| Route | ES | EN | Description |
|-------|----|----|-------------|
| Home | `/` | `/en` | Hero + Method + Services + About |
| Contact | `/contacto` | `/en/contact` | Calendly embed |
| Legal Notice | `/aviso-legal` | `/en/legal-notice` | Legal info |
| Privacy Policy | `/politica-de-privacidad` | `/en/privacy-policy` | GDPR compliance |
| Cookie Policy | `/politica-de-cookies` | `/en/cookie-policy` | Cookie consent |

### Admin Routes

| Route | Description | Access |
|-------|-------------|--------|
| `/studio` | Sanity CMS Studio | OAuth (Google/GitHub) |

### SEO Routes

| Route | Description |
|-------|-------------|
| `/sitemap.xml` | Dynamic sitemap |
| `/robots.txt` | Robots configuration |

---

## 📝 Next Steps (Roadmap)

### Phase 2: Seed Script & Data Migration (Next)
- [ ] Create `scripts/seedSanity.ts`
- [ ] Migrate Hero data from `messages/es.json` to Sanity
- [ ] Test data retrieval in frontend

### Phase 3: Complete Schemas
- [ ] Create Services schema (`services.ts`)
- [ ] Create Method schema (`method.ts`)
- [ ] Create About schema (`about.ts`)
- [ ] Create Navigation schema (`navigation.ts`)
- [ ] Update schema registry

### Phase 4: Component Migration
- [ ] Migrate Hero component to use Sanity data
- [ ] Migrate Services component
- [ ] Migrate Method component
- [ ] Migrate About component
- [ ] Migrate Header/Footer (navigation)

### Phase 5: Production Setup
- [ ] Configure CORS for magnetia.io in Sanity
- [ ] Test Studio in production
- [ ] Set up webhooks for instant revalidation (optional)
- [ ] Document CMS usage for team

### Phase 6: Advanced Features (Optional)
- [ ] Portable Text for rich content
- [ ] Image optimization with Sanity CDN
- [ ] Draft/Publish workflow
- [ ] Content versioning

---

## 🐛 Troubleshooting

### Studio shows 404

**Cause:** Middleware is intercepting `/studio` route
**Fix:** Ensure `src/middleware.ts` excludes `/studio`:

```typescript
export const config = {
  matcher: ['/((?!api|studio|_next|_vercel|.*\\..*).*)']
};
```

### "Missing <html> and <body> tags" error in Studio

**Cause:** Studio route needs its own layout
**Fix:** Ensure `src/app/studio/layout.tsx` exists:

```typescript
export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
```

### Port 3000 already in use

**Fix:**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Sanity client errors (projectId undefined)

**Fix:** Verify `.env.local` exists with correct variables:
```bash
cat .env.local  # Should show NEXT_PUBLIC_SANITY_PROJECT_ID="6hpk87gz"
```

### Vercel deployment not auto-triggering from GitHub

**Temporary Fix:** Deploy manually:
```bash
vercel --prod --yes
```

**Permanent Fix:** Reconnect GitHub integration in Vercel dashboard

---

## 📚 Documentation References

- **Next.js 16 Docs:** https://nextjs.org/docs
- **Sanity Docs:** https://www.sanity.io/docs
- **next-intl Docs:** https://next-intl-docs.vercel.app
- **Framer Motion Docs:** https://www.framer.com/motion
- **Tailwind CSS v4:** https://tailwindcss.com/docs

---

## 👥 Team Notes

### Animation Style: NARRATIVE
All animations follow a **narrative, reading-rhythm style**:
- Letter-by-letter reveals in Hero (~16ms/char)
- Breathing pauses between blocks (0.3-0.5s)
- Sequential, never simultaneous
- See `CLAUDE.md` for full animation guidelines

### Color Palette
- **Primary Red:** `#E64A58` / `text-magnetia-red`
- **Primary Black:** `#1A1A1A` / `text-magnetia-black`
- **Background:** White with subtle mesh gradients (4% opacity max)

### Feature Flags
Located in `src/lib/featureFlags.ts`:
- Currently active: heroCta, metodoCta, headerCta, footerCta
- Disabled: testimonios section (temporarily hidden)

---

## 📊 Project Stats

- **Total Components:** ~15
- **Translation Keys:** ~250+ (ES/EN)
- **Sanity Schemas:** 2 (Hero, Stat) - More coming
- **Routes:** 10+ public routes
- **Images:** WebP optimized
- **Build Time:** ~30s
- **Bundle Size:** TBD (check with `npm run build`)

---

**For detailed implementation plans, see:**
- SEO Audit Plan: `/Users/marcosflorez/.claude/plans/vivid-tumbling-quill.md` (Section 1)
- Sanity CMS Plan: `/Users/marcosflorez/.claude/plans/vivid-tumbling-quill.md` (Section 2)

---

**Last Commit:** `eb0395c` - "feat: Integrate Sanity CMS for content management"
**Contributors:** Marcos Florez, Claude Sonnet 4.5
