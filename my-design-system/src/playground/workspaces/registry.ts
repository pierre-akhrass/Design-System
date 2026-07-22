import type { FC } from 'react'
import { TagWorkspace } from './TagWorkspace/TagWorkspace'
import { CheckboxWorkspace } from './CheckboxWorkspace/CheckboxWorkspace'
import { RadioWorkspace } from './RadioWorkspace/RadioWorkspace'
import { SwitchWorkspace } from './SwitchWorkspace/SwitchWorkspace'
import { TextAreaWorkspace } from './TextAreaWorkspace/TextAreaWorkspace'
import { SearchWorkspace } from './SearchWorkspace/SearchWorkspace'
import { DropdownWorkspace } from './DropdownWorkspace/DropdownWorkspace'
import { NavbarWorkspace } from './NavbarWorkspace/NavbarWorkspace'
import { NavItemWorkspace } from './NavItemWorkspace/NavItemWorkspace'
import { MapWorkspace } from './MapWorkspace/MapWorkspace'
import { CardWorkspace } from './CardWorkspace/CardWorkspace'
import { CarouselWorkspace } from './CarouselWorkspace/CarouselWorkspace'
import { ListWorkspace } from './ListWorkspace/ListWorkspace'
import { SocialMediaWorkspace } from './SocialMediaWorkspace/SocialMediaWorkspace'
import { DialogWorkspace } from './DialogWorkspace/DialogWorkspace'
import { BreadcrumbsWorkspace } from './BreadcrumbsWorkspace/BreadcrumbsWorkspace'
import { MegaMenuWorkspace } from './MegaMenuWorkspace/MegaMenuWorkspace'
import { TestimonialsWorkspace } from './TestimonialsWorkspace/TestimonialsWorkspace'
import { TooltipWorkspace } from './TooltipWorkspace/TooltipWorkspace'
import { AvatarWorkspace } from './AvatarWorkspace/AvatarWorkspace'
import { FooterWorkspace } from './FooterWorkspace/FooterWorkspace'
import { FormWorkspace } from './FormWorkspace/FormWorkspace'

export interface WorkspaceEntry {
  id: string
  label: string
  group?: string
  component: FC
}

/**
 * Central registry of all component workspaces.
 * To add a new component: create its Workspace folder, then add an entry here.
 */
export const registry: WorkspaceEntry[] = [
  {
    id: 'tag',
    label: 'Tag',
    group: 'Components',
    component: TagWorkspace,
  },
  {
    id: 'card',
    label: 'Card',
    group: 'Components',
    component: CardWorkspace,
  },
  {
    id: 'carousel',
    label: 'Carousel',
    group: 'Components',
    component: CarouselWorkspace,
  },
  {
    id: 'list',
    label: 'List',
    group: 'Components',
    component: ListWorkspace,
  },
  {
    id: 'social-media',
    label: 'Social Media',
    group: 'Components',
    component: SocialMediaWorkspace,
  },
  {
    id: 'dialog',
    label: 'Dialog',
    group: 'Components',
    component: DialogWorkspace,
  },
  {
    id: 'map',
    label: 'Map',
    group: 'Components',
    component: MapWorkspace,
  },
  {
    id: 'tooltip',
    label: 'Tooltip',
    group: 'Components',
    component: TooltipWorkspace,
  },
  {
    id: 'avatar',
    label: 'Avatar',
    group: 'Components',
    component: AvatarWorkspace,
  },
  {
    id: 'footer',
    label: 'Footer',
    group: 'Components',
    component: FooterWorkspace,
  },
  {
    id: 'form',
    label: 'Form',
    group: 'Components',
    component: FormWorkspace,
  },
  {
    id: 'testimonials',
    label: 'Testimonials',
    group: 'Components',
    component: TestimonialsWorkspace,
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    group: 'Inputs',
    component: CheckboxWorkspace,
  },
  {
    id: 'radio',
    label: 'Radio',
    group: 'Inputs',
    component: RadioWorkspace,
  },
  {
    id: 'switch',
    label: 'Switch',
    group: 'Inputs',
    component: SwitchWorkspace,
  },
  {
    id: 'textarea',
    label: 'TextArea',
    group: 'Inputs',
    component: TextAreaWorkspace,
  },
  {
    id: 'search',
    label: 'Search',
    group: 'Inputs',
    component: SearchWorkspace,
  },
  {
    id: 'dropdown',
    label: 'Dropdown',
    group: 'Navigation',
    component: DropdownWorkspace,
  },
  {
    id: 'navbar',
    label: 'Navbar',
    group: 'Navigation',
    component: NavbarWorkspace,
  },
  {
    id: 'navitem',
    label: 'NavItem',
    group: 'Navigation',
    component: NavItemWorkspace,
  },
  {
    id: 'breadcrumbs',
    label: 'Breadcrumbs',
    group: 'Navigation',
    component: BreadcrumbsWorkspace,
  },
  {
    id: 'megamenu',
    label: 'MegaMenu',
    group: 'Navigation',
    component: MegaMenuWorkspace,
  },
]
