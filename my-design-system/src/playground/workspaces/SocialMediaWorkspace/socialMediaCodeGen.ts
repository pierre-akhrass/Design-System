export type SmpPlatform = 'facebook' | 'instagram' | 'tiktok' | 'youtube' | 'x'
export type SmpType = 'image' | 'video' | 'text'

export interface SocialMediaConfig {
  // Content
  platform: SmpPlatform
  type: SmpType
  caption: string
  text: string
  hashtags: string
  showPagination: boolean
  // Behaviour
  theme: 'light' | 'dark'
  // Color overrides
  cardBg: string
  textColor: string
  // Spacing overrides — '' means "use the design token"
  radius: string       // .ds-social-media-post__media radius
  textPadding: string  // .ds-social-media-post__media--text padding
  // Border overrides
  borderWidth: string
  borderStyle: string
  borderColor: string
  // Typography + effects — '' means "use the design token"
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultSocialMediaConfig: SocialMediaConfig = {
  platform: 'instagram',
  type: 'image',
  caption: 'This is a caption for the post',
  text: 'Text content for a text-only social media post goes right here.',
  hashtags: '#design #systems #ui',
  showPagination: false,
  theme: 'light',
  cardBg: '',
  textColor: '',
  radius: '',
  textPadding: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  fontFamily: '',
  fontSize: '',
  fontWeight: '',
  letterSpacing: '',
  textTransform: 'none',
  shadow: '',
  customClass: '',
  customId: '',
  customCss: '',
}

function typoDecls(cfg: SocialMediaConfig): string {
  const p: string[] = []
  if (cfg.fontFamily) p.push(`font-family: ${cfg.fontFamily}`)
  if (cfg.fontSize) p.push(`font-size: ${cfg.fontSize}`)
  if (cfg.fontWeight) p.push(`font-weight: ${cfg.fontWeight}`)
  if (cfg.letterSpacing) p.push(`letter-spacing: ${cfg.letterSpacing}`)
  if (cfg.textTransform && cfg.textTransform !== 'none') p.push(`text-transform: ${cfg.textTransform}`)
  return p.join('; ')
}

export function socialMediaCodeGen(cfg: SocialMediaConfig): string {
  const props: string[] = []

  // platform is always required
  props.push(`platform="${cfg.platform}"`)
  if (cfg.type !== 'image') props.push(`type="${cfg.type}"`)
  if (cfg.theme !== 'light') props.push(`theme="${cfg.theme}"`)
  if (cfg.type === 'image' && cfg.caption) props.push(`caption="${cfg.caption}"`)
  if (cfg.type === 'text' && cfg.text) props.push(`text="${cfg.text}"`)
  if (cfg.type === 'text' && cfg.hashtags) props.push(`hashtags="${cfg.hashtags}"`)
  if (cfg.type === 'image' && cfg.showPagination) {
    props.push(`pagination={{ current: 1, total: 5 }}`)
  }
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  // Overrides that live on internal elements become a CSS snippet
  const cssRules: string[] = []
  if (cfg.cardBg) cssRules.push(`.ds-social-media-post__media { background: ${cfg.cardBg}; }`)
  if (cfg.textColor) cssRules.push(`.ds-social-media-post { color: ${cfg.textColor}; }`)
  if (cfg.radius) cssRules.push(`.ds-social-media-post__media { border-radius: ${cfg.radius}; }`)
  if (cfg.textPadding) cssRules.push(`.ds-social-media-post__media--text { padding: ${cfg.textPadding}; }`)
  if (cfg.borderWidth) {
    cssRules.push(`.ds-social-media-post__media { border: ${cfg.borderWidth} ${cfg.borderStyle || 'solid'} ${cfg.borderColor || '#3fb0bc'}; }`)
  }
  { const t = typoDecls(cfg); if (t) cssRules.push(`.ds-social-media-post { ${t}; }`) }
  if (cfg.shadow) cssRules.push(`.ds-social-media-post__media { box-shadow: ${cfg.shadow}; }`)

  const lines: string[] = []
  lines.push(`import { SocialMediaPost } from '@company/design-system';`)

  if (cssRules.length || cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cssRules.forEach((r) => lines.push(`// ${r}`))
    if (cfg.customCss.trim()) cfg.customCss.trim().split('\n').forEach((l) => lines.push(`// ${l}`))
  }

  lines.push(``)

  if (props.length <= 2) {
    lines.push(`<SocialMediaPost ${props.join(' ')} />`)
  } else {
    lines.push(`<SocialMediaPost`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`/>`)
  }

  return lines.join('\n')
}
