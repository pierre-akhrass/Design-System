import type { FC } from 'react'
import { TagWorkspace } from './TagWorkspace/TagWorkspace'
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
]
