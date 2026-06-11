# Design System Components - Developer Attribution

**Last Updated:** June 11, 2026

## Component Ownership & Attribution

This document outlines which developer created and maintains each component in the design system. All components are integrated from the latest branch versions.

---

## 📦 Core Components by Developer

### 🟦 **Maher Al Rifai** (Footers, Avatars, Media & Form Controls)

| Component | Status | Location | Latest Update |
|-----------|--------|----------|---|
| **Footer** | ✅ Production | `src/components/Footer/` | Footers branch |
| **Avatar** | ✅ Production | `src/components/Avatar/` | Avatars branch |
| **Form** | ✅ Production | `src/components/Form/` | Avatars branch |
| **Media** | ✅ Production | `src/components/Media/` | Avatars branch |
| **Tooltip** | ✅ Production | `src/components/Tooltip/` | Avatars branch |
| **Tag** | ✅ Production | `src/components/Tag/` | Avatars branch |

**Key Features:**
- Responsive footer with flexible layout
- Avatar system with social media icons
- Complete form controls with validation
- Media component for images/videos
- Tooltip and tag system for UI annotations

---

### 🟪 **Mohamad oueidat** (Data & Content Components)

| Component | Status | Location | Latest Update |
|-----------|--------|----------|---|
| **Search** | ✅ Production | `src/components/Search/` | Oueidat branch |
| **List** | ✅ Production | `src/components/List/` | Oueidat branch |
| **Carousel** | ✅ Production | `src/components/Carousel/` | Oueidat branch |
| **SocialMediaPost** | ✅ Production | `src/components/SocialMediaPost/` | Oueidat branch |
| **Card** | ✅ Production | `src/components/Card/` | Oueidat branch |

**Key Features:**
- Advanced search with autocomplete
- Flexible list system with multiple layouts
- Carousel with touch/keyboard support
- Social media post display
- Card component for content containers

---

### 🟩 **sereneogilvy** (Navigation & Layout)

| Component | Status | Location | Latest Update |
|-----------|--------|----------|---|
| **MegaMenu** | ✅ Production | `src/components/MegaMenu/` | serene branch |
| **Sidebar** | ✅ Production | `src/components/Sidebar/` | serene branch |
| **Checkbox** | ✅ Production | `src/components/Checkbox/` | serene branch |
| **Radio** | ✅ Production | `src/components/Radio/` | serene branch |
| **Switch** | ✅ Production | `src/components/Switch/` | serene branch |
| **Navbar** | ✅ Production (updated) | `src/components/Navbar/` | serene branch (updates) |
| **Map** | ✅ Production (updated) | `src/components/Map/` | serene branch (updates) |

**Key Features:**
- Mega menu for complex navigation
- Responsive sidebar with animations
- Complete form controls (checkbox, radio, switch)
- Updated navbar with enhanced styling
- Interactive map component

---

### 🟧 **pierre-akhrass** (Foundation & Core Components)

| Component | Status | Location | Latest Update |
|-----------|--------|----------|---|
| **Button** | ✅ Production | `src/components/Button/` | main branch |
| **Accordion** | ✅ Production | `src/components/Accordion/` | main branch |
| **Hero** | ✅ Production | `src/components/Hero/` | main branch |
| **Breadcrumbs** | ✅ Production | `src/components/Breadcrumbs/` | main branch |
| **Dropdown** | ✅ Production | `src/components/Dropdown/` | main branch |
| **Banner** | ✅ Production | `src/components/Banner/` | main branch |
| **TextBlock** | ✅ Production | `src/components/TextBlock/` | main branch |
| **Pagination** | ✅ Production | `src/components/Pagination/` | main branch |
| **NavItem** | ✅ Production | `src/components/NavItem/` | main branch |
| **Overlay** | ✅ Production | `src/components/Overlay/` | main branch |
| **Illustration** | ✅ Production | `src/components/Illustration/` | main branch |
| **Icons** (CaretRight, ChevronDown) | ✅ Production | `src/components/icons/` | serene branch |

**Key Features:**
- Button with multiple variants and states
- Accordion for collapsible content
- Hero section for landing pages
- Navigation breadcrumbs
- Complete form dropdown system
- Banner for alerts and announcements
- Text block for content areas
- Pagination for data lists
- Overlay for modals and dialogs

---

### 🟡 **Stephan El Khoury** (Integration & System Features)

| Feature | Status | Location |
|---------|--------|----------|
| **Theme System** | ✅ Production | `.storybook/preview.ts` |
| **Light/Dark Toggle** | ✅ Production | Storybook toolbar |
| **Branch Consolidation** | ✅ Complete | All merged branches |
| **Design Tokens** | ✅ Production | `src/styles/tokens/` |
| **Storybook Integration** | ✅ Production | `.storybook/` |

**Key Features:**
- Light/Dark theme toggle in Storybook
- Global style system with CSS variables
- Design token generation via style-dictionary
- Consolidated all team branches (Footers, Avatars, Oueidat, serene)
- Storybook configuration with Vite integration

---

## 🔄 Latest Branch Integration Status

| Branch | Developer | Status | Key Components |
|--------|-----------|--------|---|
| `origin/Footers` | Maher Al Rifai | ✅ Merged | Footer (V1-V15) |
| `origin/Avatars` | Maher Al Rifai | ✅ Merged | Avatar, Form, Media, Tooltip, Tag |
| `origin/Oueidat` | Mohamad oueidat | ✅ Merged | Search, List, Carousel, Card, SocialMediaPost |
| `origin/serene` | sereneogilvy | ✅ Merged | MegaMenu, Sidebar, Checkbox, Radio, Switch |

**Current Branch:** `stephan` (57 commits ahead of origin/stephan after merges)

---

## 🎨 Component Statistics

- **Total Components:** 29
- **Production Ready:** 100%
- **With Storybook Stories:** 100%
- **With Auto Docs:** 100%
- **With TypeScript Types:** 100%

### Developer Contribution Summary

| Developer | Components | % of System |
|-----------|-----------|---|
| pierre-akhrass | 12 | 41% |
| Maher Al Rifai | 6 | 21% |
| Mohamad oueidat | 5 | 17% |
| sereneogilvy | 5 | 17% |
| Stephan El Khoury | System & Integration | Core |

---

## 📋 How to Use This Document

1. **Finding a Component's Developer:** Look up the component name in the tables above
2. **Latest Version Status:** All components are on latest from merged branches
3. **Contributing:** When updating a component, add your name with "(updated by)" if not the original creator
4. **Adding New Components:** Add entry to appropriate developer section
5. **Contact:** Reach out to the listed developer for component-specific questions

---

## 🚀 Development Guidelines

### For Component Updates

When updating an existing component:

```typescript
/**
 * [Component Name]
 * @developer [Original Developer] (original), [Your Name] (updates)
 */
```

### For New Components

```typescript
/**
 * [Component Name]
 * @developer [Your Name]
 */
```

---

## 📝 Notes

- All components follow the design system's SCSS structure
- All components include Storybook stories with interactive playground
- All components have TypeScript support with full type definitions
- Theme colors are managed via CSS variables in `src/styles/global.scss`
- Component exports are centralized in each component's `index.ts`

---

**Maintained by:** Design System Team  
**Last Updated:** June 11, 2026
