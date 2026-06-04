import { Illustration } from '../../Illustration/Illustration'
import type { IllustrationName, IllustrationSize } from '../../Illustration/Illustration'
import './IllustrationShowcase.scss'

// ─── Icons ────────────────────────────────────────────────────────────────────

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.751.751 0 01-1.042-.018.751.751 0 01-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAMED_SIZES: { key: IllustrationSize; px: number; previewSize: number; usage: string }[] = [
  { key: 'sm', px: 48,  previewSize: 32,  usage: 'Inline callouts' },
  { key: 'md', px: 80,  previewSize: 52,  usage: 'Cards, banners'  },
  { key: 'lg', px: 104, previewSize: 68,  usage: 'Default / hero'  },
  { key: 'xl', px: 160, previewSize: 92,  usage: 'Empty states'    },
]

const CUSTOM_PX = [24, 32, 48, 64, 80, 96]

const COLORS: { label: string; color: string; hex: string }[] = [
  { label: 'Deep Navy',    color: '#003e7e', hex: '#003e7e' },
  { label: 'Vibrant Teal', color: '#008c94', hex: '#008c94' },
  { label: 'Golden Beige', color: '#b4814f', hex: '#b4814f' },
  { label: 'Sky Blue',     color: '#317d9e', hex: '#317d9e' },
  { label: 'Slate',        color: '#546e73', hex: '#546e73' },
  { label: 'Danger',       color: '#c0392b', hex: '#c0392b' },
]

const ALL_NAMES = Array.from(
  { length: 20 },
  (_, i) => `mechanical-${String(i + 1).padStart(2, '0')}` as IllustrationName,
)

// ─── Component ────────────────────────────────────────────────────────────────

export const IllustrationShowcase = () => {
  return (
    <section className="il-showcase" aria-labelledby="illustration-showcase-title">

      {/* ── Section header ──────────────────────────────────────────────── */}
      <header className="il-showcase__header">
        <span className="il-showcase__badge">Component</span>
        <h2 className="il-showcase__title" id="illustration-showcase-title">
          Illustration
        </h2>
        <p className="il-showcase__description">
          A visual communication pattern to enhance storytelling, improve comprehension, and
          highlight important data points in a visual way across the experience.
        </p>
      </header>

      {/* ── Sizes ───────────────────────────────────────────────────────── */}
      <div className="il-showcase__block">
        <div className="il-showcase__block-header">
          <h3 className="il-showcase__block-title">Sizes</h3>
          <p className="il-showcase__block-subtitle">
            Four named presets cover the most common layouts. For one-off requirements, pass any
            pixel value directly — the illustration scales proportionally without loss of quality.
          </p>
        </div>

        <div className="il-showcase__sizes-canvas">
          {/* Row 1 — named presets */}
          <div className="il-showcase__sizes-row">
            {NAMED_SIZES.map(({ key, px, previewSize, usage }) => (
              <div key={key} className="il-showcase__size-col">
                <div className="il-showcase__size-preview">
                  <Illustration name="mechanical-01" size={previewSize} />
                </div>
                <span className="il-showcase__size-name">{key}</span>
                <span className="il-showcase__size-px">{px}px</span>
                <span className="il-showcase__size-usage">{usage}</span>
              </div>
            ))}
          </div>

          <div className="il-showcase__sizes-divider" />

          {/* Row 2 — custom pixel examples */}
          <div className="il-showcase__sizes-section-label">Custom pixels</div>
          <div className="il-showcase__sizes-row">
            {CUSTOM_PX.map((px) => (
              <div key={px} className="il-showcase__size-col">
                <div className="il-showcase__size-preview">
                  <Illustration name="mechanical-05" size={px} />
                </div>
                <span className="il-showcase__size-px">{px}px</span>
                <code className="il-showcase__size-code">size&#x3D;&#x7B;{px}&#x7D;</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Colors ──────────────────────────────────────────────────────── */}
      <div className="il-showcase__block">
        <div className="il-showcase__block-header">
          <h3 className="il-showcase__block-title">Colors</h3>
          <p className="il-showcase__block-subtitle">
            Pass any CSS color to the <strong>color</strong> prop — hex values, CSS custom
            properties, or design tokens all work. SVG strokes update instantly via{' '}
            <strong>currentColor</strong>, keeping the illustration crisp at every size.
          </p>
        </div>

        <div className="il-showcase__color-grid">
          {COLORS.map(({ label, color, hex }) => (
            <div key={label} className="il-showcase__color-card">
              <div className="il-showcase__color-canvas">
                <Illustration name="mechanical-10" size="md" color={color} />
              </div>
              <div className="il-showcase__color-body">
                <span className="il-showcase__color-label">{label}</span>
                <span className="il-showcase__color-swatch" style={{ backgroundColor: color }} />
                <code className="il-showcase__color-hex">{hex}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── All illustrations ────────────────────────────────────────────── */}
      <div className="il-showcase__block">
        <div className="il-showcase__block-header">
          <h3 className="il-showcase__block-title">All Illustrations — Mechanical</h3>
          <p className="il-showcase__block-subtitle">
            20 mechanical illustrations ready for use. Each exports as a crisp, transparent SVG.
          </p>
        </div>

        <div className="il-showcase__grid-canvas">
          {ALL_NAMES.map((name) => (
            <div key={name} className="il-showcase__grid-item">
              <div className="il-showcase__grid-preview">
                <Illustration name={name} size="sm" />
              </div>
              <span className="il-showcase__grid-label">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Storybook CTA ───────────────────────────────────────────────── */}
      <div className="il-showcase__cta">
        <div className="il-showcase__cta-text">
          <span className="il-showcase__cta-heading">
            Explore in Storybook
            <ExternalLinkIcon />
          </span>
          <span className="il-showcase__cta-body">
            Test all 20 illustrations with live size, pixel, and color controls — including named
            presets, custom-px scaling, and all color variants.
          </span>
        </div>
        <a
          href="http://localhost:6006/?path=/story/components-illustration--all-illustrations"
          target="_blank"
          rel="noopener noreferrer"
          className="il-showcase__cta-link"
        >
          Open Storybook
          <ArrowRightIcon />
        </a>
      </div>

    </section>
  )
}
