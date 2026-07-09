import type { FC } from 'react'
import { TagWorkspace } from './TagWorkspace/TagWorkspace'
import { CheckboxWorkspace } from './CheckboxWorkspace/CheckboxWorkspace'
import { RadioWorkspace } from './RadioWorkspace/RadioWorkspace'
import { SwitchWorkspace } from './SwitchWorkspace/SwitchWorkspace'
import { TextAreaWorkspace } from './TextAreaWorkspace/TextAreaWorkspace'
import { SearchWorkspace } from './SearchWorkspace/SearchWorkspace'
import { MapWorkspace } from './MapWorkspace/MapWorkspace'
import { CardWorkspace } from './CardWorkspace/CardWorkspace'
import { CarouselWorkspace } from './CarouselWorkspace/CarouselWorkspace'
import { ListWorkspace } from './ListWorkspace/ListWorkspace'
import { SocialMediaWorkspace } from './SocialMediaWorkspace/SocialMediaWorkspace'
import { DialogWorkspace } from './DialogWorkspace/DialogWorkspace'

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
]
