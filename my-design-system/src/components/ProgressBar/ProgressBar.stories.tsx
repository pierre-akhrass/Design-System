import type { Meta, StoryObj } from '@storybook/react'
import { ProgressBar } from './ProgressBar'

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A multi-step progress bar with mini-step tracking within each major step.

**Design Tokens Used:**
| Token | Value | Usage |
|-------|-------|-------|
| \`$mapping-system-slate-background-secondary\` | #2A3C50 | Completed bar fill & circle bg |
| \`$mapping-system-slate-background-tertiary\` | #91A2B1 | Active bar fill |
| \`$mapping-system-slate-surface-tertiary\` | #D2D9E0 | Track background |
| \`$mapping-system-slate-surface-secondary\` | #E9ECF0 | Upcoming track background |
| \`$mapping-system-slate-text-on-primary\` | #FFFFFF | Circle number text |
| \`$mapping-system-slate-text-tertiary\` | #6B6B6B | Upcoming step number |
| \`$mapping-system-slate-text-secondary\` | #545454 | Step label text |
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
