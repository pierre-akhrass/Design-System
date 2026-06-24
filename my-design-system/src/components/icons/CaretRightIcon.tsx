import type { SVGProps } from 'react'

/**
 * Shared caret-right glyph used as the trailing chevron on call-to-action
 * buttons (e.g. the MegaMenu card's "Read more" button).
 *
 * Source: src/assets/caret-right.svg. Inlined here so consumers can:
 *   - drive color via `currentColor` (no extra theming wiring needed),
 *   - apply any SVG props (size, transform, etc.) directly.
 */
export const CaretRightIcon = ({
  width = 16,
  height = 16,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M6 3L11 8L6 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
