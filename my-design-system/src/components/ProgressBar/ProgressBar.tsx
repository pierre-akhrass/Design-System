import './ProgressBar.scss'

export interface ProgressStep {
  /** Step label */
  label: string
  /** Number of mini steps within this step */
  totalMiniSteps?: number
  /** Completed mini steps within this step */
  completedMiniSteps?: number
}

export type StepStatus = 'completed' | 'active' | 'upcoming'
export type ProgressBarMode = 'light' | 'dark'

export interface ProgressBarProps {
  /** Array of steps */
  steps: ProgressStep[]
  /** Current active step (1-based index) */
  currentStep?: number
  /** Mini step progress within current step (0 to totalMiniSteps) */
  currentMiniStep?: number
  /** Color mode */
  mode?: ProgressBarMode
}

export const ProgressBar = ({
  steps = [
    { label: 'Applicant & Company Information', totalMiniSteps: 5, completedMiniSteps: 5 },
    { label: 'Opportunity Overview', totalMiniSteps: 4, completedMiniSteps: 4 },
    { label: 'Business Details & Potential', totalMiniSteps: 6, completedMiniSteps: 6 },
    { label: 'Participation & Consent', totalMiniSteps: 3, completedMiniSteps: 3 },
    { label: 'Review & Submission', totalMiniSteps: 4, completedMiniSteps: 4 },
    { label: 'Final Approval', totalMiniSteps: 2, completedMiniSteps: 2 },
  ],
  currentStep = 6,
  currentMiniStep,
  mode = 'light',
}: ProgressBarProps) => {
  const getStepStatus = (index: number): StepStatus => {
    const stepNum = index + 1
    if (stepNum < currentStep) return 'completed'
    if (stepNum === currentStep) return 'active'
    return 'upcoming'
  }

  const getProgress = (step: ProgressStep, status: StepStatus): number => {
    if (status === 'completed') return 100
    if (status === 'upcoming') return 0
    // Active step
    if (currentMiniStep !== undefined && step.totalMiniSteps) {
      return (currentMiniStep / step.totalMiniSteps) * 100
    }
    if (step.totalMiniSteps && step.completedMiniSteps !== undefined) {
      return (step.completedMiniSteps / step.totalMiniSteps) * 100
    }
    return 50
  }

  return (
    <div className={`ds-progress-bar ${mode === 'dark' ? 'ds-progress-bar--dark' : ''}`}>
      {steps.map((step, index) => {
        const status = getStepStatus(index)
        const progress = getProgress(step, status)
        const stepNum = index + 1

        return (
          <div key={index} className={`ds-progress-bar__step ds-progress-bar__step--${status}`}>
            <div className="ds-progress-bar__track">
              <div
                className="ds-progress-bar__fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="ds-progress-bar__info">
              <span className="ds-progress-bar__number">
                {status === 'completed' || status === 'active' ? (
                  <span className="ds-progress-bar__circle">{stepNum}</span>
                ) : (
                  <span className="ds-progress-bar__plain-number">{stepNum}</span>
                )}
              </span>
              <span className="ds-progress-bar__label">{step.label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
