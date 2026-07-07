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
  },

  // $size-stroke-border-width-*
  borderWidth: {
    '1px': '1px',   // $size-stroke-border-width-1
    '2px': '2px',   // $size-stroke-border-width-2
    '4px': '4px',   // $size-stroke-border-width-4
  },
} as const
