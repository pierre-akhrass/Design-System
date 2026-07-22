import { useState, useEffect } from 'react'
import { Avatar, AvatarGroup, AvatarBlock } from '../../../components/Avatar'
import type { AvatarType, AvatarSize, AvatarTheme, AvatarGroupSpacing } from '../../../components/Avatar'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { AvatarControls } from './AvatarControls'
import { avatarViewCodeGen, defaultAvatarConfig } from './avatarCodeGen'
import type { AvatarConfig } from './avatarCodeGen'
import './AvatarWorkspace.scss'
import { PublishBar } from '../../components/PublishBar/PublishBar'
import { buildWorkspaceOverride } from '../../components/PublishBar/buildWorkspaceOverride'
import { loadDraft } from '../../draftStore'
import { useScssSync } from '../../useScssSync'

// ── Sample data for AvatarGroup ───────────────────────────────────────────────

const GROUP_INITIALS = ['A', 'B', 'C', 'D', 'E', 'F']
const GROUP_SRCS = Array.from({ length: 6 }, (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`)

// ── Person icon (matches Avatar.stories.tsx) ──────────────────────────────────

const PersonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="60%" height="60%" fill="currentColor">
    <path d="M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z" />
  </svg>
)

// ── Canvas / theme helpers ────────────────────────────────────────────────────

function resolveCanvasBg(theme: AvatarConfig['theme']): 'auto' | 'light' | 'dark' {
  if (theme === 'light') return 'light'
  if (theme === 'dark')  return 'dark'
  return 'auto'
}

function resolveTheme(theme: AvatarConfig['theme']): AvatarTheme | undefined {
  if (theme === 'auto') return undefined
  return theme
}

// ── URL hash codec ────────────────────────────────────────────────────────────

function encodeConfig(cfg: AvatarConfig): string {
  try { return btoa(encodeURIComponent(JSON.stringify(cfg))) }
  catch { return '' }
}

function decodeConfig(hash: string): AvatarConfig | null {
  try {
    const decoded = JSON.parse(decodeURIComponent(atob(hash)))
    return { ...defaultAvatarConfig, ...decoded } as AvatarConfig
  } catch { return null }
}

function readHashConfig(): AvatarConfig | null {
  const raw = window.location.hash.slice(1)
  return raw ? decodeConfig(raw) : null
}

// ── View label map ────────────────────────────────────────────────────────────

const VIEW_LABELS: Record<AvatarConfig['view'], string> = {
  avatar: 'Avatar',
  group:  'AvatarGroup',
  block:  'AvatarBlock',
}

// ── Component renderer ────────────────────────────────────────────────────────

function renderAvatarView(cfg: AvatarConfig, themeOverride: AvatarTheme | undefined) {
  switch (cfg.view) {
    case 'avatar':
      return (
        <Avatar
          type={cfg.type as AvatarType}
          size={cfg.size as AvatarSize}
          {...(cfg.type === 'initial' ? { initials: cfg.initials } : {})}
          {...(cfg.type === 'image'   ? { src: cfg.src, alt: cfg.alt } : {})}
          {...(cfg.type === 'shape'   ? { icon: <PersonIcon /> } : {})}
          theme={themeOverride}
          className={cfg.customClass || undefined}
          id={cfg.customId || undefined}
        />
      )

    case 'group':
      return (
        <AvatarGroup
          spacing={cfg.groupSpacing as AvatarGroupSpacing}
          showOverflow={cfg.showOverflow}
          overflowCount={cfg.overflowCount}
          theme={themeOverride}
          className={cfg.customClass || undefined}
          id={cfg.customId || undefined}
        >
          {Array.from({ length: cfg.groupCount }, (_, i) => (
            <Avatar
              key={i}
              type={cfg.groupType as AvatarType}
              size={cfg.groupSize as AvatarSize}
              {...(cfg.groupType === 'initial' ? { initials: GROUP_INITIALS[i] } : {})}
              {...(cfg.groupType === 'image'   ? { src: GROUP_SRCS[i], alt: `User ${i + 1}` } : {})}
              {...(cfg.groupType === 'shape'   ? { icon: <PersonIcon /> } : {})}
              theme={themeOverride}
            />
          ))}
        </AvatarGroup>
      )

    case 'block':
      return (
        <AvatarBlock
          avatar={
            <Avatar
              type={cfg.blockAvatarType as AvatarType}
              size={cfg.blockAvatarSize as AvatarSize}
              {...(cfg.blockAvatarType === 'initial' ? { initials: cfg.blockInitials } : {})}
              {...(cfg.blockAvatarType === 'image'   ? { src: cfg.blockSrc, alt: cfg.blockTitle } : {})}
              {...(cfg.blockAvatarType === 'shape'   ? { icon: <PersonIcon /> } : {})}
              theme={themeOverride}
            />
          }
          title={cfg.blockTitle}
          description={cfg.blockDescription || undefined}
          theme={themeOverride}
          className={cfg.customClass || undefined}
          id={cfg.customId || undefined}
        />
      )
  }
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const CompareIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <rect x="0.75" y="1.75" width="4.5" height="9.5" rx="0.75" />
    <rect x="7.75" y="1.75" width="4.5" height="9.5" rx="0.75" />
  </svg>
)

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

// ── AvatarWorkspace ───────────────────────────────────────────────────────────

export const AvatarWorkspace = () => {
  const [config, setConfig]     = useState<AvatarConfig>(() => readHashConfig() ?? loadDraft<AvatarConfig>('avatar') ?? defaultAvatarConfig)
  const [compare, setCompare]   = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  // Pull colour values from the component's .scss into the UI (reverse sync).
  useScssSync<AvatarConfig>('avatar', setConfig)

  // Keep URL hash in sync
  useEffect(() => {
    window.location.hash = encodeConfig(config)
  }, [config])

  // Inject avatar colour overrides as a live <style> block
  useEffect(() => {
    const rules: string[] = []
    if (config.bgColor)   rules.push(`.ds-avatar--initial, .ds-avatar--shape { --ds-avatar-bg: ${config.bgColor} !important; }`)
    if (config.textColor) rules.push(`.ds-avatar__initials, .ds-avatar__shape { --ds-avatar-fg: ${config.textColor} !important; }`)
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-avatar-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.bgColor, config.textColor])

  // Inject custom CSS as a live <style> block
  // Inject typography overrides as a live <style> block
  useEffect(() => {
    const rules: string[] = []
    if (config.fontFamily) rules.push(`.ds-avatar { font-family: ${config.fontFamily} !important; }`)
    if (config.fontSize) rules.push(`.ds-avatar { font-size: ${config.fontSize} !important; }`)
    if (config.fontWeight) rules.push(`.ds-avatar { font-weight: ${config.fontWeight} !important; }`)
    if (config.letterSpacing) rules.push(`.ds-avatar { letter-spacing: ${config.letterSpacing} !important; }`)
    if (config.textTransform && config.textTransform !== 'none') rules.push(`.ds-avatar { text-transform: ${config.textTransform} !important; }`)
    if (config.shadow) rules.push(`.ds-avatar { box-shadow: ${config.shadow} !important; }`)
    if (!rules.length) return
    const el = document.createElement('style')
    el.setAttribute('data-pg-typo-override', '')
    el.textContent = rules.join('\n')
    document.head.appendChild(el)
    return () => { el.remove() }
  }, [config.fontFamily, config.fontSize, config.fontWeight, config.letterSpacing, config.textTransform, config.shadow])
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

  const canvasBg      = resolveCanvasBg(config.theme)
  const resolvedTheme = resolveTheme(config.theme)
  const compLabel     = VIEW_LABELS[config.view]

  return (
    <div className="avatar-ws">
      {/* ── Center: canvas + code ─────────────────────────────────────── */}
      <div className="avatar-ws__main">

        {/* Toolbar */}
        <div className="avatar-ws__toolbar">
          <div className="avatar-ws__toolbar-left">
            <span className="avatar-ws__toolbar-label">Preview</span>
            {/* View switcher */}
            <div className="avatar-ws__view-switcher">
              {(['avatar', 'group', 'block'] as const).map((v) => (
                <button
                  key={v}
                  className={`avatar-ws__view-btn${config.view === v ? ' avatar-ws__view-btn--active' : ''}`}
                  onClick={() => setConfig(c => ({ ...c, view: v }))}
                  type="button"
                >
                  {VIEW_LABELS[v]}
                </button>
              ))}
            </div>
          </div>

          <div className="avatar-ws__toolbar-actions">
            <button
              className={`avatar-ws__toolbar-btn${compare ? ' avatar-ws__toolbar-btn--active' : ''}`}
              onClick={() => setCompare(c => !c)}
              type="button"
              title="Compare light and dark themes side by side"
            >
              <CompareIcon />
              Compare themes
            </button>
            <button
              className={`avatar-ws__toolbar-btn${linkCopied ? ' avatar-ws__toolbar-btn--active' : ''}`}
              onClick={copyLink}
              type="button"
              title="Copy shareable link to this configuration"
            >
              <LinkIcon copied={linkCopied} />
              {linkCopied ? 'Link copied!' : 'Copy link'}
            </button>
          </div>
        </div>

        {/* Canvas area — single or split */}
        <div className="avatar-ws__canvas-area">
          {compare ? (
            <>
              <Canvas bg="light" componentLabel="light theme">
                {renderAvatarView(config, 'light')}
              </Canvas>
              <Canvas bg="dark" componentLabel="dark theme">
                {renderAvatarView(config, 'dark')}
              </Canvas>
            </>
          ) : (
            <Canvas bg={canvasBg} componentLabel={compLabel}>
              {renderAvatarView(config, resolvedTheme)}
            </Canvas>
          )}
        </div>

        <CodeBlock code={avatarViewCodeGen(config)} />

        <PublishBar
          componentId="avatar"
          draftConfig={config}
          componentLabel="Avatar"
          override={buildWorkspaceOverride('avatar', config, '.ds-avatar')}
        />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel title="Props">
        <AvatarControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
