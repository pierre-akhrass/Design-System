/**
 * Design token values for the playground controls.
 * Mirrors src/styles/tokens/_variables.scss
 * Update these constants when tokens are regenerated with `npm run build:tokens`.
 */
export const TOKENS = {
  // $size-radius-* + $dimensions-tag-corner-radius
  radius: {
    none: '0px',    // $size-radius-null
    sm:   '4px',    // $size-radius-smal
    md:   '8px',    // $size-radius-medium
    lg:   '16px',   // $size-radius-large
    xl:   '24px',   // $size-radius-x-large
    full: '9999px', // $size-radius-full / $dimensions-tag-corner-radius (pill)
  },

  // $padding-action-* (horizontal padding, paddingInline)
  paddingX: {
    '2xs': '4px',   // $padding-action-2xs
    xs:    '8px',   // $padding-action-xs  ← Tag default
    s:     '16px',  // $padding-action-s
    m:     '24px',  // $padding-action-m
    l:     '32px',  // $padding-action-l
  },

  // $padding-action-* (vertical padding, paddingBlock)
  // Tag height is token-controlled; paddingBlock overrides grow it
  paddingY: {
    '2px': '2px',
    '2xs': '4px',   // $padding-action-2xs
    xs:    '8px',   // $padding-action-xs
    'xs+': '12px',
    s:     '16px',  // $padding-action-s
  },

  // $gap-* (icon gap)
  gap: {
    '0':   '0px',
    '3xs': '4px',   // $gap-3xs  ← Tag default
    '2xs': '8px',   // $gap-2xs
    xs:    '12px',  // $gap-xs
    s:     '16px',  // $gap-s
    m:     '24px',  // $gap-m
    l:     '32px',  // $gap-l
    xl:    '48px',  // $gap-xl
    xxl:   '64px',  // $gap-xxl
  },

  // $space-* (spacing scale)
  space: {
    '0':    '0px',
    '050':  '4px',   // $space-050
    '100':  '8px',   // $space-100
    '150':  '12px',  // $space-150
    '200':  '16px',  // $space-200
    '250':  '20px',  // $space-250
    '300':  '24px',  // $space-300
    '400':  '32px',  // $space-400
    '500':  '40px',  // $space-500
    '600':  '48px',  // $space-600
    '700':  '56px',  // $space-700
    '800':  '64px',  // $space-800
    '1000': '80px',  // $space-1000
    '1200': '96px',  // $space-1200
    '1600': '120px', // $space-1600
  },

  // $padding-container-* (responsive padding)
  paddingContainer: {
    xs: '16px',  // $padding-container-xs
    s:  '24px',  // $padding-container-s
    m:  '32px',  // $padding-container-m
    l:  '48px',  // $padding-container-l
    xl: '64px',  // $padding-container-xl
  },

  // $size-stroke-border-width-*
  borderWidth: {
    '1px': '1px',   // $size-stroke-border-width-1
    '2px': '2px',   // $size-stroke-border-width-2
    '4px': '4px',   // $size-stroke-border-width-4
  },

  // Font families available in the design system (playground presets)
  fontFamily: {
    ui:      "'Noto Sans', system-ui, sans-serif",
    heading: "'Nunito Sans', system-ui, sans-serif",
    mono:    "'JetBrains Mono', ui-monospace, monospace",
    serif:   "Georgia, 'Times New Roman', serif",
    system:  "system-ui, -apple-system, sans-serif",
  },

  // Common font sizes (px)
  fontSize: {
    xs:  '12px',
    sm:  '14px',
    md:  '16px',
    lg:  '20px',
    xl:  '24px',
  },

  // Font weights
  fontWeight: {
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
  },

  // Letter spacing
  letterSpacing: {
    tight:  '-0.02em',
    normal: '0',
    wide:   '0.04em',
    wider:  '0.08em',
  },

  // Elevation / shadow presets
  shadow: {
    sm: '0 1px 2px rgba(20, 31, 46, 0.08)',
    md: '0 4px 12px rgba(20, 31, 46, 0.12)',
    lg: '0 12px 28px rgba(20, 31, 46, 0.18)',
    xl: '0 24px 48px rgba(20, 31, 46, 0.22)',
  },
} as const
