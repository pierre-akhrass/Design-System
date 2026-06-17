import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A multi-step progress bar with mini-step tracking within each major step. Supports light and dark modes with responsive mobile layout.

**Light Mode Tokens:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$mapping-system-slate-background-primary\` | #141F2E | Bar fill, circle bg & mobile dots |
| \`$mapping-system-slate-surface-tertiary\` | #D2D9E0 | Track background & mobile upcoming dots |
| \`$mapping-system-slate-surface-secondary\` | #E9ECF0 | Upcoming track background |
| \`$mapping-system-slate-surface-primary\` | #F5F7FA | Upcoming number circle bg |
| \`$mapping-system-slate-text-on-primary\` | #FFFFFF | Circle number text |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Upcoming step number |
| \`$mapping-system-slate-text-secondary\` | #545454 | Step label text |

**Dark Mode Tokens:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$mapping-system-slate-background-primary\` | #141F2E | Container background, circle text |
| \`$mapping-system-slate-surface-primary\` | #F5F7FA | Bar fill, circle bg, label text & mobile dots |
| \`$mapping-system-slate-background-secondary\` | #2A3C50 | Track bg & upcoming number circle bg |
| \`$mapping-system-slate-background-tertiary\` | #91A2B1 | Upcoming track & mobile upcoming dots |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Upcoming step number |
| \`$font-family-en-primary\` | Noto Sans | Font family |`,
      },
    },
  },
  argTypes: {
    currentStep: { control: { type: 'number', min: 1, max: 6 } },
    mode: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  args: {
    currentStep: 6,
    mode: 'light',
    steps: [
      { label: 'Applicant & Company Information', totalMiniSteps: 5, completedMiniSteps: 5 },
      { label: 'Opportunity Overview', totalMiniSteps: 4, completedMiniSteps: 4 },
      { label: 'Business Details & Potential', totalMiniSteps: 6, completedMiniSteps: 6 },
      { label: 'Participation & Consent', totalMiniSteps: 3, completedMiniSteps: 3 },
      { label: 'Review & Submission', totalMiniSteps: 4, completedMiniSteps: 4 },
      { label: 'Final Approval', totalMiniSteps: 2, completedMiniSteps: 2 },
    ],
  },
}
export default meta

type Story = StoryObj<typeof ProgressBar>

export const Playground: Story = {
  args: {
    steps: [{
      "label": "Applicant & Company Information",
      "totalMiniSteps": 5,
      "completedMiniSteps": 5
    }, {
      "label": "Opportunity Overview",
      "totalMiniSteps": 4,
      "completedMiniSteps": 4
    }, {
      "label": "Business Details & Potential",
      "totalMiniSteps": 6,
      "completedMiniSteps": 6
    }, {
      "label": "Participation & Consent",
      "totalMiniSteps": 3,
      "completedMiniSteps": 3
    }, {
      "label": "Review & Submission",
      "totalMiniSteps": 4,
      "completedMiniSteps": 4
    }, {
      "label": "Final Approval",
      "totalMiniSteps": 2,
      "completedMiniSteps": 1
    }]
  }
}
