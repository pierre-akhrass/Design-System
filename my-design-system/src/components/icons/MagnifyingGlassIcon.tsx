import type { SVGProps } from 'react'

/**
 * Plain magnifying-glass glyph used as the "search" control in MapBlock.
 *
 * Source: Figma export (MagnifyingGlass.svg). Stroke defaults to the
 * design-spec `#9D9D9D` (dimmer than the zoom-in/out icons so the rail's
 * middle action reads as a secondary control). Override via `stroke`.
 */
export const MagnifyingGlassIcon = ({
  width = 32,
  height = 32,
  stroke = '#9D9D9D',
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
  </svg>
)
