# HADIDI Coaching - Project Specs

## Overview
Arabic/English bilingual React website for Coach HADIDI's fitness programs (ebooks + meal plans + workout schedules + WhatsApp support). Built with React 18 + Vite + Tailwind CSS + Framer Motion.

## Tech Stack
- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS 3 with custom dark theme
- **Routing**: react-router-dom v6
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cairo + Tajawal (Google Fonts)
- **i18n**: Custom LanguageContext with `t()` function (Arabic/English)

## Architecture
- `src/context/` — LanguageContext (i18n + RTL/LTR), CartContext (cart state + BOOKS_DATA)
- `src/pages/` — Route-level pages (HomePage, BooksPage, ResultsPage, CoachPage, CheckoutPage, BlogPage, BlogPostPage, NotFoundPage, LegalPage)
- `src/sections/` — Homepage sections (Hero, Books, Transformations, Coach, FAQ, CTA, Footer)
- `src/components/` — Shared components (Header, WhatsAppButton, CartModal, CheckoutModal)

## Key Decisions
- **Brand**: HADIDI Coaching (renamed from FitLife)
- **Products**: Called "programs" (not books/ebooks) — includes ebooks + meal plans + workout schedules + WhatsApp support
- **Cart stores IDs (strings)**, not full objects. `BOOKS_DATA` lives in CartContext as the single source of truth.
- **Lion logo**: `lion-icon.png` (orange/black) as favicon, `lion-logo.png` (orange/white) as site logo
- **Coach photos**: `coach-gym.jpg` (physique) as primary on homepage + CoachPage hero; `coach.webp` (professional/seminar) in dedicated CoachPage section
- **RTL/LTR**: Dynamic via `document.documentElement.dir` in LanguageContext useEffect
- Bundle discount (3 programs = 219 SAR instead of 307) computed in CartContext

## Current State (2026-03-22)
### Done
- Full rebrand: FitLife → HADIDI Coaching (logo, text, meta, everywhere)
- Renamed all "books/ebooks" → "programs" across entire codebase
- Lion logo in Header and Footer, lion favicon in index.html
- Full SEO metadata: bilingual title, description, keywords, OG tags, Twitter cards
- RTL/LTR switching works correctly (removed hardcoded `direction: rtl` from index.css)
- Conditional layout adjustments across 7+ files for RTL/LTR (arrows, positions, text alignment, borders)
- Coach gym photo as primary, professional photo in dedicated CoachPage section
- Blog posts: emojis replaced with real Unsplash images
- CheckoutPage complete rewrite with:
  - Form validation (email, Saudi phone, Luhn card check, expiry, CVV)
  - Input masking/formatting (card number, expiry, phone, CVV)
  - Per-field error/success states with touched tracking
  - Terms & conditions checkbox
  - Coupon code input
  - Confirmation modal before payment
  - Mobile order summary (collapsible details)
  - Proper arrow direction by language
  - Cart item count, required field indicators
- Coach video modal embeds YouTube Short (`K8tWPrSYyHE`) in 9:16 aspect ratio
- Refund policy: 7-day technical issues only
- Build passes successfully

### Still Placeholder / Needs Real Content
- WhatsApp number is `966500000000` everywhere
- Social media links point to base URLs (no specific profiles)
- Bank IBAN is `SA0000000000000000000`
- No real payment gateway integration
- Newsletter form in BlogPage has no submit handler
