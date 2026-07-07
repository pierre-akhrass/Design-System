import { useState } from 'react'
import type { CSSProperties } from 'react'
import { Tag } from '../../../components/Tag'
import type { TagState, TagTheme } from '../../../components/Tag'
import { Canvas } from '../../components/Canvas/Canvas'
import { ControlPanel } from '../../components/ControlPanel/ControlPanel'
import { CodeBlock } from '../../components/CodeBlock/CodeBlock'
import { TagControls } from './TagControls'
import { tagCodeGen, defaultTagConfig } from './tagCodeGen'
import type { TagConfig } from './tagCodeGen'
import './TagWorkspace.scss'

// ── Star icon (matches Tag.stories.tsx) ───────────────────────────────────────

const StarIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
    />
  </svg>
)

// ── Helpers ────────────────────────────────────────────────────────────────────

function resolveCanvasBg(theme: TagConfig['theme']): 'auto' | 'light' | 'dark' {
  if (theme === 'light') return 'light'
  if (theme === 'dark') return 'dark'
  return 'auto'
}

function resolveTagTheme(theme: TagConfig['theme']): TagTheme | undefined {
  if (theme === 'auto') return undefined
  return theme
}

// ── TagWorkspace ──────────────────────────────────────────────────────────────

export const TagWorkspace = () => {
  const [config, setConfig] = useState<TagConfig>(defaultTagConfig)

  return (
    <div className="tag-ws">
      {/* ── Center: canvas + code block ──────────────────────────────── */}
      <div className="tag-ws__main">
        <Canvas bg={resolveCanvasBg(config.theme)} componentLabel="Tag">
          <Tag
            label={config.label}
            state={config.state as TagState}
            theme={resolveTagTheme(config.theme)}
            iconStart={config.showIconStart ? <StarIcon /> : undefined}
            iconEnd={config.showIconEnd ? <StarIcon /> : undefined}
            bgColor={config.bgColor || undefined}
            textColor={config.textColor || undefined}
            style={{
              ...(config.borderRadius && { borderRadius: config.borderRadius }),
              ...(config.paddingX && { paddingInline: config.paddingX }),
              ...(config.paddingY && { paddingBlock: config.paddingY }),
              ...(config.gap && { gap: config.gap }),
              ...(config.borderWidth && {
                borderWidth: config.borderWidth,
                borderStyle: (config.borderStyle || 'solid') as CSSProperties['borderStyle'],
                ...(config.borderColor && { borderColor: config.borderColor }),
              }),
            }}
          />
        </Canvas>

        <CodeBlock code={tagCodeGen(config)} />
      </div>

      {/* ── Right: control panel ─────────────────────────────────────── */}
      <ControlPanel>
        <TagControls config={config} onChange={setConfig} />
      </ControlPanel>
    </div>
  )
}
