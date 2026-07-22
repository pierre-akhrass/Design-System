export interface TestimonialsItemConfig {
  image: string
  imageAlt: string
  quote: string
  name: string
  role: string
}

export interface TestimonialsConfig {
  label: string
  heading: string
  showSlider: boolean
  testimonials: TestimonialsItemConfig[]
  bgColor: string
  textColor: string
  paddingX: string
  paddingY: string
  marginX: string
  marginY: string
  // Typography + effects
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textTransform: string
  shadow: string
  customClass: string
  customId: string
  customCss: string
}

export const DEFAULT_TESTIMONIALS: TestimonialsItemConfig[] = [
  {
    image: '/src/assets/hero.png',
    imageAlt: 'Larissa Haven portrait',
    quote:
      'Dubai Festival City surpassed expectations with its diverse culinary offerings, vibrant atmosphere, and exciting events. The fusion of flavors and retail treasures made every moment memorable. Already looking forward to my next visit!',
    name: 'Larissa Haven',
    role: 'Community Member',
  },
  {
    image: '/src/assets/hero.png',
    imageAlt: 'Lorem Ipsum portrait',
    quote:
      "Finding our dream home with Al-Futtaim was an exceptional experience. The process was seamless, the team was incredibly helpful, and the quality of properties exceeded our expectations. We couldn't be happier!",
    name: 'Lorem Ipsum',
    role: 'A Happy Customer',
  },
]

export const defaultTestimonialsConfig: TestimonialsConfig = {
  label: 'Testimonials',
  heading: 'A word from our community',
  showSlider: true,
  testimonials: DEFAULT_TESTIMONIALS,
  bgColor: '',
  textColor: '',
  paddingX: '',
  paddingY: '',
  marginX: '',
  marginY: '',
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

function esc(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

export function testimonialsCodeGen(cfg: TestimonialsConfig): string {
  const lines: string[] = []
  lines.push(`import { Testimonials } from '@company/design-system';`)

  if (cfg.customCss.trim()) {
    lines.push('')
    lines.push('// Add to a <style> tag or your CSS file:')
    cfg.customCss.trim().split('\n').forEach((line) => lines.push(`// ${line}`))
  }

  lines.push('')

  const props: string[] = []
  if (cfg.label !== defaultTestimonialsConfig.label) props.push(`label="${cfg.label}"`)
  if (cfg.heading !== defaultTestimonialsConfig.heading) props.push(`heading="${cfg.heading}"`)
  if (cfg.showSlider !== defaultTestimonialsConfig.showSlider) props.push(`showSlider={${cfg.showSlider}}`)
  if (cfg.bgColor) props.push(`bgColor="${cfg.bgColor}"`)
  if (cfg.textColor) props.push(`textColor="${cfg.textColor}"`)
  if (cfg.paddingX) props.push(`paddingX="${cfg.paddingX}"`)
  if (cfg.paddingY) props.push(`paddingY="${cfg.paddingY}"`)
  if (cfg.marginX) props.push(`marginX="${cfg.marginX}"`)
  if (cfg.marginY) props.push(`marginY="${cfg.marginY}"`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  const items = cfg.testimonials.map((item) => [
    '  {',
    `    image: '${esc(item.image)}',`,
    `    imageAlt: '${esc(item.imageAlt)}',`,
    `    quote: '${esc(item.quote)}',`,
    `    name: '${esc(item.name)}',`,
    `    role: '${esc(item.role)}',`,
    '  },',
  ].join('\n')).join('\n')

  lines.push('<Testimonials')
  props.forEach((p) => lines.push(`  ${p}`))
  lines.push(`  testimonials={[\n${items}\n  ]}`)
  lines.push('/>')

  return lines.join('\n')
}
