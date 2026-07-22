import { useState, useEffect } from 'react'
import { Footer } from '../../../components/Footer'
import type { FooterNavColumn, FooterLink, SocialLink, SocialPlatform, OpeningHourGroup } from '../../../components/Footer'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { FooterControls } from './FooterControls'
import { footerCodeGen, defaultFooterConfig } from './footerCodeGen'
import type { FooterConfig } from './footerCodeGen'
import './FooterWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'

// ── Sample opening hours (matches Footer.tsx defaults) ────────────────────────

const SAMPLE_HOURS: OpeningHourGroup[] = [
  {
    title: 'General Mall Timings',
    rows: [
      { days: 'Mon – Thu', hours: '10:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '10:00 am to 01:00 am' },
    ],
  },
  {
    title: 'F&B, Foodcourt & Waterfront',
    rows: [
      { days: 'Mon – Thu', hours: '10:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '10:00 am to 01:00 am' },
    ],
  },
  {
    title: 'IMAGINE Show Timings',
    rows: [
      { days: 'Mon – Wed', hours: '07:00 pm to 11:00 pm' },
      { days: 'Thur – Sun', hours: '07:00 pm to 11:00 pm' },
    ],
  },
  {
    title: 'Hypermarket (Carrefour and LuLu)',
    rows: [
      { days: 'Mon – Thu', hours: '08:00 am to 12:00 am' },
      { days: 'Fri – Sun', hours: '08:00 am to 12:00 am' },
    ],
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function buildNavColumns(count: number, linksPerCol: number): FooterNavColumn[] {
  return Array.from({ length: count }, (_, ci) => ({
    title: `Category ${ci + 1}`,
    links: Array.from({ length: linksPerCol }, (_, li): FooterLink => ({
      label: `Nav Link ${li + 1}`,
    })),
  }))
}

function buildSocialLinks(cfg: FooterConfig): SocialLink[] {
  const all: [boolean, SocialPlatform, string][] = [
    [cfg.showLinkedIn,  'linkedin',  'LinkedIn'],
    [cfg.showInstagram, 'instagram', 'Instagram'],
    [cfg.showYoutube,   'youtube',   'YouTube'],
    [cfg.showX,         'x',         'X (Twitter)'],
  ]
  return all
    .filter(([on]) => on)
    .map(([, platform, ariaLabel]) => ({ platform, ariaLabel }))
}

function buildLegalLinks(cfg: FooterConfig): FooterLink[] {
  if (!cfg.showLegalLinks) return []
  const links: FooterLink[] = []
  if (cfg.legalLink1) links.push({ label: cfg.legalLink1 })
  if (cfg.legalLink2) links.push({ label: cfg.legalLink2 })
  return links
}

function buildLogo(cfg: FooterConfig) {
  if (cfg.logoType === 'none') return undefined
  return (
    <span
      style={{
        color: cfg.theme === 'dark' ? '#ffffff' : '#141f2e',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontSize: 20,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      {cfg.logoText}
    </span>
  )
}

// ── URL hash codec ────────────────────────────────────────────────────────────

function encodeConfig(cfg: FooterConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) }
  catch { return '' }
}

function decodeConfig(hash: string): FooterConfig | null {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(hash)))
    return { ...defaultFooterConfig, ...decoded } as FooterConfig
  } catch { return null }
}

function readHashConfig(): FooterConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const LinkIcon = ({ copied }: { copied: boolean }) =>
  copied ? (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="2,7 5,10 11,4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 7.5a2.5 2.5 0 0 0 3.54.04l2-2a2.5 2.5 0 0 0-3.54-3.54l-1.12 1.11" strokeLinecap="round" />
      <path d="M8 5.5a2.5 2.5 0 0 0-3.54-.04l-2 2a2.5 2.5 0 0 0 3.54 3.54l1.11-1.12" strokeLinecap="round" />
    </svg>
  )

// ── FooterWorkspace ───────────────────────────────────────────────────────────

export const FooterWorkspace = () => {
  const [config, setConfig]     = useState<FooterConfig>(() => readHashConfig() ?? loadDraft<FooterConfig>('footer') ?? defaultFooterConfig)
  const [linkCopied, setLinkCopied] = useState(false)

  // Pull colour values from the component's .scss into the UI (reverse sync).
  useScssSync<FooterConfig>('footer', setConfig)

  // Keep URL hash in sync
  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  // Inject footer colour overrides as a live <style> block
  useEffect(() => {
    const rules: string[] = []
    if (config.bgColor)   rules.push(`.ds-footer { --ds-footer-bg: ${config.bgColor} !important; }`)
    if (config.textColor) rules.push(`.ds-footer { --ds-footer-text: ${config.textColor} !important; }`)
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-footer-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor])

  // Inject custom CSS as a live <style> block
  useEffect(() => {
    if (!config.customCss.trim()) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-custom', '')
    el.textContent = config.customCss
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.customCss])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
  }

  // Build Footer props from config
  const footerProps = {
    theme:             config.theme,
    showNewsletterBar: config.showNewsletterBar,
    showOpeningHours:  config.showOpeningHours,
    newsletter: {
      title:            config.newsletterTitle,
      subtitle:         config.newsletterSubtitle,
      emailPlaceholder: config.newsletterEmailPlaceholder,
      subscribeLabel:   config.newsletterBtnLabel,
    },
    openingHoursTitle: config.openingHoursTitle,
    openingHours:      SAMPLE_HOURS.slice(0, config.openingHoursGroupCount) as OpeningHourGroup[],
    navColumns:        buildNavColumns(config.navColumnCount, config.navLinksPerColumn),
    logo:              buildLogo(config),
    copyright:         config.copyright,
    legalLinks:        buildLegalLinks(config),
    socialLinks:       buildSocialLinks(config),
    className:         config.customClass || undefined,
    id:                config.customId || undefined,
  }

  return (
    <div className="footer-ws">
      {/* ── Center: preview + code ──────────────────────────────────── */}
      <div className="footer-ws__main">

        {/* Toolbar */}
        <div className="footer-ws__toolbar">
          <div className="footer-ws__toolbar-left">
            <span className="footer-ws__toolbar-label">Preview</span>
            {/* Theme quick-toggle */}
            <div className="footer-ws__theme-switcher">
              {(['light', 'dark'] as const).map((t) => (
                <button
                  key={t}
                  className={`footer-ws__theme-btn${config.theme === t ? ' footer-ws__theme-btn--active' : ''}`}
                  onClick={() => setConfig(c => ({ ...c, theme: t }))}
                  type="button"
                >
                  {t === 'light' ? '☀ Light' : '☾ Dark'}
                </button>
              ))}
            </div>
          </div>

          <div className="footer-ws__toolbar-actions">
            <button
              className={`footer-ws__toolbar-btn${linkCopied ? ' footer-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Full-width canvas preview */}
        <div className="footer-ws__canvas-area">
          <Canvas bg={config.theme === 'dark' ? 'dark' : 'light'} componentLabel="Footer">
            <Footer {...footerProps} />
          </Canvas>
        </div>

        <CodeBlock code={footerCodeGen(config)} />

        <PublishBar
          componentId="footer"
          draftConfig={config}
          componentLabel="Footer"
          override={buildWorkspaceOverride('footer', config, '.ds-footer')}
        />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel title="Props">
        <FooterControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
