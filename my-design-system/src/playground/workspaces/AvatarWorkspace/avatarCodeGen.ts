// ── Types ─────────────────────────────────────────────────────────────────────

export type AvatarViewMode = 'avatar' | 'group' | 'block'

export interface AvatarConfig {
  // ── Active view ──────────────────────────────────────────────────────────
  view: AvatarViewMode

  // ── Shared ───────────────────────────────────────────────────────────────
  theme: 'auto' | 'light' | 'dark'

  // ── Avatar props ─────────────────────────────────────────────────────────
  type: 'initial' | 'image' | 'shape'
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  /** Single character shown when type="initial" */
  initials: string
  /** Image URL when type="image" */
  src: string
  /** Alt text when type="image" */
  alt: string

  // ── AvatarGroup props ────────────────────────────────────────────────────
  groupSpacing: 'overlap' | 'spaced'
  /** Number of avatar items rendered inside the group (2–6) */
  groupCount: number
  groupSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  groupType: 'initial' | 'image' | 'shape'
  showOverflow: boolean
  overflowCount: number

  // ── AvatarBlock props ────────────────────────────────────────────────────
  blockTitle: string
  blockDescription: string
  blockAvatarType: 'initial' | 'image' | 'shape'
  blockAvatarSize: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  blockSrc: string
  blockInitials: string

  // ── Custom CSS ───────────────────────────────────────────────────────────
  customClass: string
  customId: string
  customCss: string
}

export const defaultAvatarConfig: AvatarConfig = {
  view: 'avatar',
  theme: 'auto',

  type: 'initial',
  size: 'medium',
  initials: 'A',
  src: 'https://i.pravatar.cc/150?img=1',
  alt: 'User',

  groupSpacing: 'overlap',
  groupCount: 3,
  groupSize: 'xsmall',
  groupType: 'image',
  showOverflow: true,
  overflowCount: 5,

  blockTitle: 'Jane Doe',
  blockDescription: 'Product Designer',
  blockAvatarType: 'image',
  blockAvatarSize: 'medium',
  blockSrc: 'https://i.pravatar.cc/150?img=1',
  blockInitials: 'J',

  customClass: '',
  customId: '',
  customCss: '',
}

// ── Internal helpers ──────────────────────────────────────────────────────────

const PERSON_ICON_SNIPPET = `const PersonIcon = () => (
  <svg viewBox="0 0 24 24" width="60%" height="60%" fill="currentColor" aria-hidden="true">
    <path d="M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z" />
  </svg>
);`

const GROUP_INITIALS = ['A', 'B', 'C', 'D', 'E', 'F']
const GROUP_SRCS = Array.from({ length: 6 }, (_, i) => `https://i.pravatar.cc/150?img=${i + 1}`)

function themeAttr(theme: string): string | undefined {
  return theme !== 'auto' ? theme : undefined
}

function cssBlock(customCss: string): string[] {
  return customCss ? ['', '/* Custom CSS */', customCss] : []
}

// ── Single Avatar code gen ────────────────────────────────────────────────────

function singleAvatarCodeGen(cfg: AvatarConfig): string {
  const theme = themeAttr(cfg.theme)
  const props: string[] = []

  if (cfg.type !== 'initial') props.push(`type="${cfg.type}"`)
  if (cfg.size !== 'medium')  props.push(`size="${cfg.size}"`)

  if (cfg.type === 'initial' && cfg.initials !== 'A')
    props.push(`initials="${cfg.initials}"`)

  if (cfg.type === 'image') {
    props.push(`src="${cfg.src}"`)
    if (cfg.alt) props.push(`alt="${cfg.alt}"`)
  }

  if (cfg.type === 'shape') props.push(`icon={<PersonIcon />}`)

  if (theme)           props.push(`theme="${theme}"`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId)    props.push(`id="${cfg.customId}"`)

  const propsStr = props.length
    ? '\n  ' + props.join('\n  ') + '\n'
    : ' '

  const lines: string[] = [`import { Avatar } from '@company/design-system';`, '']

  if (cfg.type === 'shape') lines.push(PERSON_ICON_SNIPPET, '')

  lines.push(`<Avatar${propsStr}/>`)
  lines.push(...cssBlock(cfg.customCss))

  return lines.join('\n')
}

// ── AvatarGroup code gen ──────────────────────────────────────────────────────

function groupCodeGen(cfg: AvatarConfig): string {
  const theme = themeAttr(cfg.theme)
  const groupProps: string[] = []

  if (cfg.groupSpacing !== 'overlap') groupProps.push(`spacing="${cfg.groupSpacing}"`)
  if (cfg.showOverflow) {
    groupProps.push('showOverflow')
    groupProps.push(`overflowCount={${cfg.overflowCount}}`)
  }
  if (theme)           groupProps.push(`theme="${theme}"`)
  if (cfg.customClass) groupProps.push(`className="${cfg.customClass}"`)
  if (cfg.customId)    groupProps.push(`id="${cfg.customId}"`)

  const groupAttrStr = groupProps.length
    ? '\n  ' + groupProps.join('\n  ') + '\n'
    : ''

  const avatarLines = Array.from({ length: cfg.groupCount }, (_, i) => {
    const parts: string[] = []
    if (cfg.groupType !== 'initial') parts.push(`type="${cfg.groupType}"`)
    if (cfg.groupSize !== 'medium')  parts.push(`size="${cfg.groupSize}"`)
    if (cfg.groupType === 'initial' && GROUP_INITIALS[i] !== 'A')
      parts.push(`initials="${GROUP_INITIALS[i]}"`)
    if (cfg.groupType === 'image') {
      parts.push(`src="${GROUP_SRCS[i]}"`)
      parts.push(`alt="User ${i + 1}"`)
    }
    if (cfg.groupType === 'shape') parts.push(`icon={<PersonIcon />}`)
    if (theme) parts.push(`theme="${theme}"`)
    return `  <Avatar ${parts.join(' ')} />`
  })

  const lines: string[] = [
    `import { Avatar, AvatarGroup } from '@company/design-system';`,
    '',
  ]

  if (cfg.groupType === 'shape') lines.push(PERSON_ICON_SNIPPET, '')

  lines.push(
    `<AvatarGroup${groupAttrStr ? groupAttrStr : ''}>`,
    ...avatarLines,
    `</AvatarGroup>`,
  )
  lines.push(...cssBlock(cfg.customCss))

  return lines.join('\n')
}

// ── AvatarBlock code gen ──────────────────────────────────────────────────────

function blockCodeGen(cfg: AvatarConfig): string {
  const theme = themeAttr(cfg.theme)

  // Inner Avatar props
  const innerParts: string[] = []
  if (cfg.blockAvatarType !== 'initial')
    innerParts.push(`type="${cfg.blockAvatarType}"`)
  if (cfg.blockAvatarSize !== 'medium')
    innerParts.push(`size="${cfg.blockAvatarSize}"`)
  if (cfg.blockAvatarType === 'initial' && cfg.blockInitials !== 'A')
    innerParts.push(`initials="${cfg.blockInitials}"`)
  if (cfg.blockAvatarType === 'image') {
    innerParts.push(`src="${cfg.blockSrc}"`)
    innerParts.push(`alt="${cfg.blockTitle}"`)
  }
  if (cfg.blockAvatarType === 'shape') innerParts.push(`icon={<PersonIcon />}`)
  if (theme) innerParts.push(`theme="${theme}"`)

  // AvatarBlock props
  const blockParts: string[] = [
    `  avatar={<Avatar ${innerParts.join(' ')} />}`,
    `  title="${cfg.blockTitle}"`,
  ]
  if (cfg.blockDescription) blockParts.push(`  description="${cfg.blockDescription}"`)
  if (theme)           blockParts.push(`  theme="${theme}"`)
  if (cfg.customClass) blockParts.push(`  className="${cfg.customClass}"`)
  if (cfg.customId)    blockParts.push(`  id="${cfg.customId}"`)

  const lines: string[] = [
    `import { Avatar, AvatarBlock } from '@company/design-system';`,
    '',
  ]

  if (cfg.blockAvatarType === 'shape') lines.push(PERSON_ICON_SNIPPET, '')

  lines.push('<AvatarBlock', ...blockParts, '/>')
  lines.push(...cssBlock(cfg.customCss))

  return lines.join('\n')
}

// ── Master dispatcher ─────────────────────────────────────────────────────────

export function avatarViewCodeGen(cfg: AvatarConfig): string {
  switch (cfg.view) {
    case 'avatar': return singleAvatarCodeGen(cfg)
    case 'group':  return groupCodeGen(cfg)
    case 'block':  return blockCodeGen(cfg)
  }
}
