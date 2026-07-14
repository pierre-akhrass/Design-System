import type { ComponentOverride } from '../../../theme/publishedTheme'

/**
 * Central override builder.
 * ------------------------------------------------------------------
 * Each workspace already injects a live <style> block to preview colour /
 * spacing tweaks against the component's real `.ds-*` selectors. Publishing
 * must produce the *same* CSS so what you see is what ships. This module
 * mirrors every workspace's preview rules, keyed by component id, and returns
 * a ComponentOverride whose `css` is that ruleset (kept as freeform CSS so it
 * works whether a component uses CSS variables or hardcoded colours).
 *
 * Configs vary per workspace, so we accept a loose record and read the fields
 * each component actually uses.
 */

type Cfg = Record<string, unknown>
const s = (v: unknown): string => (typeof v === 'string' ? v : '')

const DEFAULT_BORDER = '#3fb0bc'

/** Compose a border shorthand the same way the previews do. */
function border(cfg: Cfg): string | null {
  const w = s(cfg.borderWidth)
  if (!w) return null
  return `${w} ${s(cfg.borderStyle) || 'solid'} ${s(cfg.borderColor) || DEFAULT_BORDER}`
}

/** Build the published CSS rules for a component id from its workspace config. */
function rulesFor(componentId: string, cfg: Cfg): string[] {
  const r: string[] = []
  const bg = s(cfg.bgColor)
  const fg = s(cfg.textColor)
  const ff = s(cfg.fontFamily)
  const rad = s(cfg.borderRadius)
  const px = s(cfg.paddingX)
  const py = s(cfg.paddingY)
  const gap = s(cfg.gap)
  const bd = border(cfg)

  switch (componentId) {
    case 'card': {
      if (bg) r.push(`.ds-card { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-card, .ds-card .ds-card__title, .ds-card .ds-card__text { color: ${fg} !important; }`)
      if (rad) r.push(`.ds-card { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-card__body { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-card__body { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-card__body { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-card { border: ${bd} !important; }`)
      break
    }
    case 'carousel': {
      if (gap) r.push(`.ds-carousel__track { gap: ${gap} !important; }`)
      if (s(cfg.slideBg)) r.push(`.ds-carousel__slide { background: ${s(cfg.slideBg)} !important; }`)
      if (fg) r.push(`.ds-carousel { --ds-carousel-fg: ${fg} !important; color: ${fg} !important; }`)
      if (fg) r.push(`.ds-carousel__slide, .ds-carousel__button { color: ${fg} !important; }`)
      if (s(cfg.slideRadius)) r.push(`.ds-carousel__slide { border-radius: ${s(cfg.slideRadius)} !important; }`)
      if (s(cfg.buttonRadius)) r.push(`.ds-carousel__button { border-radius: ${s(cfg.buttonRadius)} !important; }`)
      if (bd) r.push(`.ds-carousel__slide { border: ${bd} !important; }`)
      break
    }
    case 'checkbox': {
      if (bg) {
        r.push(`.ds-checkbox__box { background: ${bg} !important; border-color: ${bg} !important; }`)
        r.push(`.ds-checkbox--checked .ds-checkbox__box, .ds-checkbox--indeterminate .ds-checkbox__box { background: ${bg} !important; border-color: ${bg} !important; }`)
      }
      if (fg) r.push(`.ds-checkbox__label, .ds-checkbox__description { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-checkbox { font-family: ${ff} !important; }`)
      if (rad) {
        r.push(`.ds-checkbox { border-radius: ${rad} !important; }`)
        r.push(`.ds-checkbox__box { border-radius: ${rad} !important; }`)
      }
      if (px) r.push(`.ds-checkbox { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-checkbox { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-checkbox { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-checkbox { border: ${bd} !important; }`)
      break
    }
    case 'dialog': {
      if (bg) r.push(`.ds-dialog__panel { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-dialog__panel, .ds-dialog__title, .ds-dialog__text { color: ${fg} !important; }`)
      if (rad) r.push(`.ds-dialog__panel { border-radius: ${rad} !important; }`)
      if (s(cfg.padding)) r.push(`.ds-dialog__panel { padding: ${s(cfg.padding)} !important; }`)
      if (gap) r.push(`.ds-dialog__panel { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-dialog__panel { border: ${bd} !important; }`)
      break
    }
    case 'dropdown': {
      if (bg) r.push(`.ds-dropdown { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-dropdown, .ds-dropdown .ds-nav-item { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-dropdown { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-dropdown { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-dropdown { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-dropdown { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-dropdown { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-dropdown { border: ${bd} !important; }`)
      break
    }
    case 'list': {
      if (fg) r.push(`.ds-list { --ds-list-fg: ${fg} !important; --ds-list-fg-muted: ${fg} !important; color: ${fg} !important; }`)
      if (fg) r.push(`.ds-list__item, .ds-list__label, .ds-list__description, .ds-list__leading, .ds-list__trailing, .ds-list__meta { color: ${fg} !important; }`)
      if (s(cfg.itemHoverBg)) r.push(`.ds-list__item:hover { background: ${s(cfg.itemHoverBg)} !important; }`)
      if (gap) r.push(`.ds-list { gap: ${gap} !important; }`)
      if (s(cfg.itemPadding)) r.push(`.ds-list__item { padding: ${s(cfg.itemPadding)} !important; }`)
      if (s(cfg.itemRadius)) r.push(`.ds-list__item { border-radius: ${s(cfg.itemRadius)} !important; }`)
      if (bd) r.push(`.ds-list__item { border: ${bd} !important; }`)
      break
    }
    case 'map': {
      if (bg) r.push(`.ds-map { background-color: ${bg} !important; }`)
      if (fg) r.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-map, .ds-map__header-title, .ds-map__header-desc { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-map { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-map { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-map { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-map { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-map { border: ${bd} !important; }`)
      break
    }
    case 'mega-menu': {
      if (bg) r.push(`.ds-mega-menu { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-mega-menu, .ds-mega-menu .ds-nav-item { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-mega-menu { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-mega-menu { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-mega-menu { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-mega-menu { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-mega-menu__body { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-mega-menu { border: ${bd} !important; }`)
      break
    }
    case 'navbar': {
      if (bg) r.push(`.ds-navbar { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-navbar, .ds-navbar .ds-nav-item { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-navbar { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-navbar { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-navbar { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-navbar { padding-block: ${py} !important; }`)
      if (bd) r.push(`.ds-navbar { border: ${bd} !important; }`)
      break
    }
    case 'radio': {
      if (bg) {
        r.push(`.ds-radio__box svg path[fill="#141F2E"] { fill: ${bg} !important; }`)
        r.push(`.ds-radio__box svg path[fill="#E9ECF0"] { fill: ${bg} !important; }`)
        r.push(`.ds-radio__box svg path[fill="#6B6B6B"] { fill: ${bg} !important; }`)
        r.push(`.ds-radio__box svg path[fill="#BCBCBC"] { fill: ${bg} !important; }`)
      }
      if (fg) r.push(`.ds-radio__label, .ds-radio__description { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-radio { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-radio { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-radio { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-radio { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-radio { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-radio { border: ${bd} !important; }`)
      break
    }
    case 'search': {
      if (bg) {
        r.push(`.ds-search { background: ${bg} !important; }`)
        r.push(`.ds-search__input { background: ${bg} !important; }`)
      }
      if (fg) {
        r.push(`.ds-search__input, .ds-search { color: ${fg} !important; }`)
        r.push(`.ds-search__input::placeholder { color: ${fg} !important; opacity: 0.6; }`)
      }
      if (ff) r.push(`.ds-search, .ds-search__input { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-search { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-search { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-search { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-search { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-search { border: ${bd} !important; }`)
      break
    }
    case 'social-media': {
      if (s(cfg.cardBg)) r.push(`.ds-social-media-post__media { background: ${s(cfg.cardBg)} !important; }`)
      if (fg) r.push(`.ds-social-media-post { color: ${fg} !important; }`)
      if (s(cfg.radius)) r.push(`.ds-social-media-post__media { border-radius: ${s(cfg.radius)} !important; }`)
      if (s(cfg.textPadding)) r.push(`.ds-social-media-post__media--text { padding: ${s(cfg.textPadding)} !important; }`)
      if (bd) r.push(`.ds-social-media-post__media { border: ${bd} !important; }`)
      break
    }
    case 'switch': {
      if (bg) {
        r.push(`.ds-switch__track { background: ${bg} !important; border-color: ${bg} !important; }`)
        r.push(`.ds-switch--checked .ds-switch__track { background: ${bg} !important; border-color: ${bg} !important; }`)
      }
      if (fg) r.push(`.ds-switch__label, .ds-switch__description { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-switch { font-family: ${ff} !important; }`)
      if (rad) {
        r.push(`.ds-switch { border-radius: ${rad} !important; }`)
        r.push(`.ds-switch__track { border-radius: ${rad} !important; }`)
      }
      if (px) r.push(`.ds-switch { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-switch { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-switch { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-switch { border: ${bd} !important; }`)
      break
    }
    case 'tag': {
      if (bg) r.push(`.ds-tag { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-tag { color: ${fg} !important; }`)
      if (rad) r.push(`.ds-tag { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-tag { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-tag { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-tag { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-tag { border: ${bd} !important; }`)
      break
    }
    case 'testimonials': {
      if (bg) r.push(`.ds-testimonials, .ds-testimonial-card { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-testimonials { --ds-testimonials-text-color: ${fg} !important; color: ${fg} !important; }`)
      break
    }
    case 'textarea': {
      if (bg) r.push(`.ds-textarea__input { background: ${bg} !important; }`)
      if (fg) r.push(`.ds-textarea__input, .ds-textarea__label { color: ${fg} !important; }`)
      if (ff) r.push(`.ds-textarea__input, .ds-textarea__label { font-family: ${ff} !important; }`)
      if (rad) r.push(`.ds-textarea__input { border-radius: ${rad} !important; }`)
      if (px) r.push(`.ds-textarea__input { padding-inline: ${px} !important; }`)
      if (py) r.push(`.ds-textarea__input { padding-block: ${py} !important; }`)
      if (gap) r.push(`.ds-textarea { gap: ${gap} !important; }`)
      if (bd) r.push(`.ds-textarea__input { border: ${bd} !important; }`)
      break
    }
    default:
      break
  }
  return r
}

const num = (v: unknown): number | undefined =>
  typeof v === 'number' ? v : undefined
const bool = (v: unknown): boolean | undefined =>
  typeof v === 'boolean' ? v : undefined

/**
 * Extract structural props/content (non-CSS) each component needs so consuming
 * pages can render slide counts, variants, platforms, etc. Returns undefined
 * when a component has nothing structural to publish.
 */
function propsFor(componentId: string, cfg: Cfg): Record<string, unknown> | undefined {
  const p: Record<string, unknown> = {}
  const set = (k: string, v: unknown) => {
    if (v !== undefined && v !== '') p[k] = v
  }
  switch (componentId) {
    case 'carousel': {
      set('slideCount', num(cfg.slideCount))
      set('showNavigation', bool(cfg.showNavigation))
      set('showFade', bool(cfg.showFade))
      set('prevLabel', s(cfg.prevLabel))
      set('nextLabel', s(cfg.nextLabel))
      set('theme', s(cfg.theme))
      break
    }
    case 'list': {
      set('itemCount', num(cfg.itemCount))
      set('variant', s(cfg.variant))
      set('bordered', bool(cfg.bordered))
      set('showDescription', bool(cfg.showDescription))
      set('theme', s(cfg.theme))
      break
    }
    case 'social-media': {
      set('platform', s(cfg.platform))
      set('type', s(cfg.type))
      set('caption', s(cfg.caption))
      set('text', s(cfg.text))
      set('hashtags', s(cfg.hashtags))
      set('showPagination', bool(cfg.showPagination))
      set('theme', s(cfg.theme))
      break
    }
    default:
      break
  }
  return Object.keys(p).length ? p : undefined
}

/**
 * Build a publishable ComponentOverride for a workspace.
 * `selector` is a representative root selector; the concrete rules live in
 * `css` (mirroring the live preview), and the author's freeform Custom CSS is
 * appended after.
 */
export function buildWorkspaceOverride(
  componentId: string,
  config: object,
  rootSelector: string,
): ComponentOverride {
  const cfg = config as Cfg
  const rules = rulesFor(componentId, cfg)
  const custom = s(cfg.customCss).trim()
  const css = [rules.join('\n'), custom].filter(Boolean).join('\n')
  const props = propsFor(componentId, cfg)
  return { selector: rootSelector, vars: {}, css: css || undefined, props }
}
