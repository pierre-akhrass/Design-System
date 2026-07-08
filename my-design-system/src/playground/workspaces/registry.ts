import type { FC } from 'react'
import { TagWorkspace } from './TagWorkspace/TagWorkspace'
import { CheckboxWorkspace } from './CheckboxWorkspace/CheckboxWorkspace'
import { RadioWorkspace } from './RadioWorkspace/RadioWorkspace'
import { SwitchWorkspace } from './SwitchWorkspace/SwitchWorkspace'
import { TextAreaWorkspace } from './TextAreaWorkspace/TextAreaWorkspace'
import { SearchWorkspace } from './SearchWorkspace/SearchWorkspace'
import { MapWorkspace } from './MapWorkspace/MapWorkspace'

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
    id: 'map',
    label: 'Map',
    group: 'Components',
    component: MapWorkspace,
  },
]
