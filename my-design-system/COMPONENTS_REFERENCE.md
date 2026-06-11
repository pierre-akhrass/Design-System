# 🎯 Component Developer Quick Reference

**All Components - Latest Updates - Developer Attribution**

## Components A-Z

| # | Component | Developer | Files | Status |
|---|-----------|-----------|-------|--------|
| 1 | **Accordion** | pierre-akhrass | Accordion.tsx, Accordion.scss | ✅ |
| 2 | **Avatar** | Maher Al Rifai | Avatar.tsx, Avatar.scss | ✅ |
| 3 | **Banner** | pierre-akhrass | Banner.tsx, Banner.scss | ✅ |
| 4 | **Breadcrumbs** | pierre-akhrass | Breadcrumbs.tsx, Breadcrumbs.scss | ✅ |
| 5 | **Button** | pierre-akhrass | Button.tsx, Button.scss | ✅ |
| 6 | **Card** | Mohamad oueidat | Card.tsx, Card.scss | ✅ |
| 7 | **Carousel** | Mohamad oueidat | Carousel.tsx, Carousel.scss | ✅ |
| 8 | **Checkbox** | sereneogilvy | Checkbox.tsx, Checkbox.scss | ✅ |
| 9 | **Dropdown** | pierre-akhrass | Dropdown.tsx, Dropdown.scss | ✅ |
| 10 | **Footer** | Maher Al Rifai | Footer.tsx, Footer.scss | ✅ |
| 11 | **Form** | Maher Al Rifai | Form.tsx, Form.scss | ✅ |
| 12 | **Hero** | pierre-akhrass | Hero.tsx, Hero.scss | ✅ |
| 13 | **Illustration** | pierre-akhrass | Illustration.tsx, Illustration.scss | ✅ |
| 14 | **List** | Mohamad oueidat | List.tsx, List.scss | ✅ |
| 15 | **Map** | pierre-akhrass (original), sereneogilvy (updates) | Map.tsx, Map.scss | ✅ |
| 16 | **Media** | Maher Al Rifai | Media.tsx, Media.scss | ✅ |
| 17 | **MegaMenu** | sereneogilvy | MegaMenu.tsx, MegaMenu.scss | ✅ |
| 18 | **NavItem** | pierre-akhrass | NavItem.tsx, NavItem.scss | ✅ |
| 19 | **Navbar** | pierre-akhrass (original), sereneogilvy (updates) | Navbar.tsx, Navbar.scss | ✅ |
| 20 | **Overlay** | pierre-akhrass | Overlay.tsx, Overlay.scss | ✅ |
| 21 | **Pagination** | pierre-akhrass | Pagination.tsx, Pagination.scss | ✅ |
| 22 | **Radio** | sereneogilvy | Radio.tsx, Radio.scss | ✅ |
| 23 | **Search** | Mohamad oueidat | Search.tsx, Search.scss | ✅ |
| 24 | **Sidebar** | sereneogilvy | Sidebar.tsx, Sidebar.scss | ✅ |
| 25 | **SocialMediaPost** | Mohamad oueidat | SocialMediaPost.tsx, SocialMediaPost.scss | ✅ |
| 26 | **Switch** | sereneogilvy | Switch.tsx, Switch.scss | ✅ |
| 27 | **Tag** | Maher Al Rifai | Tag.tsx, Tag.scss | ✅ |
| 28 | **TextBlock** | pierre-akhrass | TextBlock.tsx, TextBlock.scss | ✅ |
| 29 | **Tooltip** | Maher Al Rifai | Tooltip.tsx, Tooltip.scss | ✅ |

---

## Developer Summary

### 🟧 pierre-akhrass (12 components - 41%)
**Foundation & Core Components**
- Accordion, Banner, Breadcrumbs, Button, Dropdown, Hero, Illustration, NavItem, Overlay, Pagination, TextBlock
- Plus co-developed: Map, Navbar

### 🟦 Maher Al Rifai (6 components - 21%)
**Footers, Avatars, Media & Form Controls**
- Avatar, Footer, Form, Media, Tag, Tooltip

### 🟪 Mohamad oueidat (5 components - 17%)
**Data & Content Components**
- Card, Carousel, List, Search, SocialMediaPost

### 🟩 sereneogilvy (5 components - 17%)
**Navigation & Layout**
- Checkbox, MegaMenu, Radio, Sidebar, Switch
- Plus updates to: Map, Navbar

### 🟡 Stephan El Khoury
**System Integration & Enhancement**
- Theme toggle (Light/Dark in Storybook)
- Branch consolidation
- Storybook configuration

---

## 📍 File Locations

All components follow the structure:
```
src/components/[ComponentName]/
├── [ComponentName].tsx      (component logic)
├── [ComponentName].scss     (styles)
├── [ComponentName].stories.tsx  (Storybook stories)
└── index.ts                (exports)
```

---

## ✨ Latest Features by Developer

### Maher Al Rifai's Latest:
- Avatar system with customizable sizes and shapes
- Complete form controls with built-in validation
- Tooltip system with multiple positioning options
- Tag component for categorization

### Mohamad oueidat's Latest:
- Search component with advanced filtering
- Carousel with gesture support
- List component with multiple layout options
- SocialMediaPost display card

### sereneogilvy's Latest:
- MegaMenu with dropdown hierarchy
- Sidebar with collapsible sections
- Complete form input controls (checkbox, radio, switch)
- Updated navbar and map components

### pierre-akhrass's Latest:
- Button system with all variants
- Accordion for expandable content
- Hero section for landing pages
- Navigation breadcrumbs and items

### Stephan El Khoury's Latest:
- Light/Dark theme toggle in Storybook
- Consolidated all branches into unified design system
- CSS variable system for theming

---

## 🔍 How to Find Component Code

1. **Main component file:** `src/components/[Name]/[Name].tsx`
2. **Storybook story:** `src/components/[Name]/[Name].stories.tsx`
3. **Styles:** `src/components/[Name]/[Name].scss`
4. **Exports:** `src/components/[Name]/index.ts`

---

**Generated:** June 11, 2026  
**System Status:** ✅ All components production-ready  
**Theme:** ✅ Light/Dark toggle working  
**Build:** ✅ All modules compiling successfully
