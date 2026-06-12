import type { SVGProps } from 'react'

/**
 * Magnifying-glass-plus glyph used as the "zoom in" control in MapBlock.
 *
 * Source: Figma export (MagnifyingGlassPlus.svg). Stroke is left at the
 * design-spec `#ECECEC` (light gray) by default, but every stroke uses
 * `currentColor` overrideable via the `stroke` prop or `color` on a parent
 * if you want to retheme.
 */
export const MagnifyingGlassPlusIcon = ({
  width = 32,
  height = 32,
  stroke = '#ECECEC',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M10 14H18"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0713 21.0713L28 28"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10V18"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
