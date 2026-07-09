export interface CarouselConfig {
  // Behaviour
  theme: 'light' | 'dark'
  showNavigation: boolean
  showFade: boolean
  prevLabel: string
  nextLabel: string
  slideCount: number
  // Color overrides
  slideBg: string
  textColor: string
  // Spacing overrides — '' means "use the design token"
  gap: string          // .ds-carousel__track gap (between slides)
  slideRadius: string  // .ds-carousel__slide corner radius
  buttonRadius: string // .ds-carousel__button corner radius
  // Border overrides on slides
  borderWidth: string
  borderStyle: string
  borderColor: string
  // CSS targeting
  customClass: string
  customId: string
  customCss: string
}

export const defaultCarouselConfig: CarouselConfig = {
  theme: 'light',
  showNavigation: true,
  showFade: true,
  prevLabel: 'Prev',
  nextLabel: 'Next',
  slideCount: 6,
  slideBg: '',
  textColor: '',
  gap: '',
  slideRadius: '',
  buttonRadius: '',
  borderWidth: '',
  borderStyle: '',
  borderColor: '',
  customClass: '',
  customId: '',
  customCss: '',
}

export function carouselCodeGen(cfg: CarouselConfig): string {
  const props: string[] = []

  if (cfg.theme !== 'light') props.push(`theme="${cfg.theme}"`)
  if (!cfg.showNavigation) props.push(`showNavigation={false}`)
  if (!cfg.showFade) props.push(`showFade={false}`)
  if (cfg.prevLabel !== 'Prev') props.push(`prevLabel="${cfg.prevLabel}"`)
  if (cfg.nextLabel !== 'Next') props.push(`nextLabel="${cfg.nextLabel}"`)
  if (cfg.customClass) props.push(`className="${cfg.customClass}"`)
  if (cfg.customId) props.push(`id="${cfg.customId}"`)

  // Overrides that live on internal elements become a CSS snippet
  const cssRules: string[] = []
  if (cfg.gap) cssRules.push(`.ds-carousel__track { gap: ${cfg.gap}; }`)
  if (cfg.slideBg) cssRules.push(`.ds-carousel__slide { background: ${cfg.slideBg}; }`)
  if (cfg.textColor) cssRules.push(`.ds-carousel { color: ${cfg.textColor}; }`)
  if (cfg.slideRadius) cssRules.push(`.ds-carousel__slide { border-radius: ${cfg.slideRadius}; }`)
  if (cfg.buttonRadius) cssRules.push(`.ds-carousel__button { border-radius: ${cfg.buttonRadius}; }`)
  if (cfg.borderWidth) {
    cssRules.push(`.ds-carousel__slide { border: ${cfg.borderWidth} ${cfg.borderStyle || 'solid'} ${cfg.borderColor || '#3fb0bc'}; }`)
  }

  const lines: string[] = []
  lines.push(`import { Carousel, CarouselSlide } from '@company/design-system';`)

  if (cssRules.length || cfg.customCss.trim()) {
    lines.push(``)
    lines.push(`// Add to a <style> tag or your CSS file:`)
    cssRules.forEach((r) => lines.push(`// ${r}`))
    if (cfg.customCss.trim()) cfg.customCss.trim().split('\n').forEach((l) => lines.push(`// ${l}`))
  }

  lines.push(``)

  const slides = Array.from({ length: cfg.slideCount }, (_, i) => `  <CarouselSlide>Slide ${i + 1}</CarouselSlide>`)

  const openTag = props.length === 0 ? `<Carousel>` : props.length <= 2 ? `<Carousel ${props.join(' ')}>` : null
  if (openTag) {
    lines.push(openTag)
  } else {
    lines.push(`<Carousel`)
    props.forEach((p) => lines.push(`  ${p}`))
    lines.push(`>`)
  }
  slides.forEach((s) => lines.push(s))
  lines.push(`</Carousel>`)

  return lines.join('\n')
}
