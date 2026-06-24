import type { ComponentProps, FC } from 'react'
import type { IllustrationName } from './Illustration'

// SVG files are imported as React components via vite-plugin-svgr (?react suffix).
// Each SVG should have fill/stroke set to "currentColor" so the `color` prop works.
import M01 from '../../assets/illustrations/mechanical-01.svg?react'
import M02 from '../../assets/illustrations/mechanical-02.svg?react'
import M03 from '../../assets/illustrations/mechanical-03.svg?react'
import M04 from '../../assets/illustrations/mechanical-04.svg?react'
import M05 from '../../assets/illustrations/mechanical-05.svg?react'
import M06 from '../../assets/illustrations/mechanical-06.svg?react'
import M07 from '../../assets/illustrations/mechanical-07.svg?react'
import M08 from '../../assets/illustrations/mechanical-08.svg?react'
import M09 from '../../assets/illustrations/mechanical-09.svg?react'
import M10 from '../../assets/illustrations/mechanical-10.svg?react'
import M11 from '../../assets/illustrations/mechanical-11.svg?react'
import M12 from '../../assets/illustrations/mechanical-12.svg?react'
import M13 from '../../assets/illustrations/mechanical-13.svg?react'
import M14 from '../../assets/illustrations/mechanical-14.svg?react'
import M15 from '../../assets/illustrations/mechanical-15.svg?react'
import M16 from '../../assets/illustrations/mechanical-16.svg?react'
import M17 from '../../assets/illustrations/mechanical-17.svg?react'
import M18 from '../../assets/illustrations/mechanical-18.svg?react'
import M19 from '../../assets/illustrations/mechanical-19.svg?react'
import M20 from '../../assets/illustrations/mechanical-20.svg?react'

export type SvgComponent = FC<ComponentProps<'svg'>>

export const illustrationMap: Record<IllustrationName, SvgComponent> = {
  'mechanical-01': M01,
  'mechanical-02': M02,
  'mechanical-03': M03,
  'mechanical-04': M04,
  'mechanical-05': M05,
  'mechanical-06': M06,
  'mechanical-07': M07,
  'mechanical-08': M08,
  'mechanical-09': M09,
  'mechanical-10': M10,
  'mechanical-11': M11,
  'mechanical-12': M12,
  'mechanical-13': M13,
  'mechanical-14': M14,
  'mechanical-15': M15,
  'mechanical-16': M16,
  'mechanical-17': M17,
  'mechanical-18': M18,
  'mechanical-19': M19,
  'mechanical-20': M20,
}
