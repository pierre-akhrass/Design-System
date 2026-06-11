import { useState, type CSSProperties, type ChangeEvent } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  Form,
  FormActions,
  FormCheckbox,
  type FormControlState,
  FormInput,
  FormSelect,
  FormTextLink,
  FormTextarea,
  type FormTheme,
} from './Form'

const meta: Meta<typeof Form> = {
  title: 'Components/Form (Maher Al Rifai)',
  component: Form,
  tags: ['autodocs'],
  args: {
    theme: 'dark',
  },
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Form>

type DemoProps = {
  theme: FormTheme
  layout?: 'login' | 'login-link' | 'shipping' | 'newsletter' | 'contact-compact' | 'forgot-password'
  selectOpen?: boolean
  checkboxChecked?: boolean
  compactButtons?: boolean
  inputState?: FormControlState
  textareaState?: FormControlState
  selectState?: FormControlState
  actionTone?: 'neutral' | 'brand'
  linkPlacement?: 'inline' | 'below'
  selectInverted?: boolean
  showDescriptions?: boolean
  showSecondaryAction?: boolean
}

const formCardStyle: CSSProperties = {
  maxWidth: 440,
  width: '100%',
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="ds-form-doc__header">
      <h3 className="ds-form-doc__title">{title}</h3>
      {subtitle && <p className="ds-form-doc__subtitle">{subtitle}</p>}
    </div>
  )
}

function useFieldState(initialValue: string) {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setValue(event.target.value),
  }
}

function LoginForm({ theme, selectOpen, checkboxChecked, compactButtons, inputState, actionTone, showDescriptions, showSecondaryAction }: DemoProps) {
  const resolvedCheckboxChecked = checkboxChecked ?? true
  const resolvedCompactButtons = compactButtons ?? false
  const resolvedInputState = inputState ?? 'default'
  const resolvedShowDescriptions = showDescriptions ?? true
  const resolvedShowSecondaryAction = showSecondaryAction ?? true
  const emailField = useFieldState('Email')
  const passwordField = useFieldState('Password')

  return (
    <Form className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 320 }} theme={theme}>
      <FormInput state={resolvedInputState} {...emailField} />
      <FormInput state={resolvedInputState} {...passwordField} />
      <FormCheckbox
        checked={resolvedCheckboxChecked}
        description={resolvedShowDescriptions ? 'Description' : undefined}
        label="Checkbox Label"
      />
      <FormActions compact={resolvedCompactButtons} primaryLabel="Button" secondaryLabel={resolvedShowSecondaryAction ? 'Button' : undefined} primaryTone={actionTone ?? 'neutral'} />
      {selectOpen && (
        <div className="ds-form-doc__note">Open state is showcased in the select example below.</div>
      )}
    </Form>
  )
}

function LoginWithLinkForm({ theme, inputState, actionTone, showSecondaryAction, selectOpen }: DemoProps) {
  const resolvedInputState = inputState ?? 'default'
  const resolvedActionTone = actionTone ?? 'neutral'
  const emailField = useFieldState('Email')
  const passwordField = useFieldState('Password')

  return (
    <Form className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 320 }} theme={theme}>
      <FormInput state={resolvedInputState} {...emailField} />
      <FormInput state={resolvedInputState} {...passwordField} />
      <FormActions primaryLabel="Button" secondaryLabel={showSecondaryAction === false ? undefined : 'Button'} primaryTone={resolvedActionTone} />
      <FormTextLink href="#" className="ds-form-doc__link">
        Forgot password?
      </FormTextLink>
      {selectOpen && null}
    </Form>
  )
}

function ShippingForm({
  theme,
  selectOpen,
  checkboxChecked,
  inputState,
  textareaState,
  selectState,
  actionTone,
  linkPlacement,
  selectInverted,
  showSecondaryAction,
}: DemoProps) {
  const resolvedInputState = inputState ?? 'default'
  const resolvedTextareaState = textareaState ?? 'default'
  const resolvedSelectState = selectState ?? 'default'
  const resolvedActionTone = actionTone ?? 'neutral'
  const nameField = useFieldState('Full Name')
  const noteField = useFieldState('Delivery note')
  const [shippingValue, setShippingValue] = useState('standard')

  return (
    <Form className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 365 }} theme={theme}>
      <SectionTitle title="Shipping information" subtitle="We ship within 2 working days" />
      <FormInput state={resolvedInputState} {...nameField} />
      <FormSelect
        inlineLabel="Label"
        open={selectOpen ?? true}
        state={resolvedSelectState}
        className={selectInverted ? 'ds-form-select--inverted' : undefined}
        options={[
          { value: 'standard', label: 'Standard Delivery', description: '2-3 business days' },
          { value: 'express', label: 'Express Delivery', description: 'Next business day' },
          { value: 'pickup', label: 'Store Pickup', description: 'Ready in 4 hours' },
        ]}
        value={shippingValue}
        onValueChange={setShippingValue}
      />
      <FormTextarea rows={4} state={resolvedTextareaState} {...noteField} />
      <FormCheckbox
        checked={checkboxChecked ?? true}
        label="I accept the terms"
        linkLabel="Read our T&Cs"
        linkPlacement={linkPlacement ?? 'below'}
      />
      <FormActions primaryLabel="Button" secondaryLabel={showSecondaryAction === false ? undefined : 'Button'} primaryTone={resolvedActionTone} />
    </Form>
  )
}

function NewsletterForm({ theme, inputState, compactButtons, actionTone }: DemoProps) {
  const resolvedInputState = inputState ?? 'default'
  const emailField = useFieldState('you@example.com')

  return (
    <Form className="ds-form-doc__card ds-form--newsletter" style={{ ...formCardStyle, maxWidth: 338 }} theme={theme}>
      <FormInput state={resolvedInputState} {...emailField} />
      <FormActions compact={compactButtons ?? true} primaryLabel="Button" primaryTone={actionTone ?? 'brand'} />
    </Form>
  )
}

function ContactCompactForm({ theme, inputState, textareaState, actionTone, showSecondaryAction }: DemoProps) {
  const resolvedInputState = inputState ?? 'default'
  const resolvedTextareaState = textareaState ?? 'default'
  const nameField = useFieldState('Name')
  const surnameField = useFieldState('Surname')
  const emailField = useFieldState('Email')
  const messageField = useFieldState('Message')

  return (
    <Form className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 320 }} theme={theme}>
      <FormInput state={resolvedInputState} {...nameField} />
      <FormInput state={resolvedInputState} {...surnameField} />
      <FormInput state={resolvedInputState} {...emailField} />
      <FormTextarea rows={4} state={resolvedTextareaState} {...messageField} />
      <FormActions primaryLabel="Button" secondaryLabel={showSecondaryAction === false ? undefined : 'Button'} primaryTone={actionTone ?? 'neutral'} />
    </Form>
  )
}

function ForgotPasswordForm({ theme, inputState, actionTone, showSecondaryAction }: DemoProps) {
  const resolvedInputState = inputState ?? 'default'
  const emailField = useFieldState('Email')

  return (
    <Form className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 320 }} theme={theme}>
      <FormInput state={resolvedInputState} {...emailField} />
      <FormActions
        className="ds-form-actions--forgot"
        primaryLabel="Button"
        secondaryLabel={showSecondaryAction === false ? undefined : 'Button'}
        primaryTone={actionTone ?? 'neutral'}
      />
    </Form>
  )
}

export const Playground: Story = {
  args: {
    layout: 'shipping',
    selectOpen: false,
    checkboxChecked: true,
    compactButtons: false,
    theme: 'dark',
    inputState: 'default',
    textareaState: 'default',
    selectState: 'default',
    actionTone: 'neutral',
    linkPlacement: 'below',
    selectInverted: true,
    showDescriptions: true,
    showSecondaryAction: true,
  },
  argTypes: {
    layout: {
      control: { type: 'radio' },
      options: ['login', 'login-link', 'shipping', 'newsletter', 'contact-compact', 'forgot-password'],
    },
    selectOpen: {
      control: 'boolean',
      if: { arg: 'layout', eq: 'shipping' },
    },
    checkboxChecked: {
      control: 'boolean',
      if: { arg: 'layout', neq: 'newsletter' },
    },
    compactButtons: {
      control: 'boolean',
      if: { arg: 'layout', neq: 'shipping' },
    },
    inputState: {
      control: { type: 'radio' },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: { arg: 'layout', neq: 'forgot-password' },
    },
    textareaState: {
      control: { type: 'radio' },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: { arg: 'layout', eq: 'contact-compact' },
    },
    selectState: {
      control: { type: 'radio' },
      options: ['default', 'focus', 'hover', 'error', 'disabled'],
      if: { arg: 'layout', eq: 'shipping' },
    },
    actionTone: {
      control: { type: 'radio' },
      options: ['neutral', 'brand'],
      if: { arg: 'layout', neq: 'newsletter' },
    },
    linkPlacement: {
      control: { type: 'radio' },
      options: ['inline', 'below'],
      if: { arg: 'layout', eq: 'shipping' },
    },
    selectInverted: {
      control: 'boolean',
      if: { arg: 'layout', eq: 'shipping' },
    },
    showDescriptions: {
      control: 'boolean',
      if: { arg: 'layout', eq: 'login' },
    },
    showSecondaryAction: {
      control: 'boolean',
      if: { arg: 'layout', neq: 'newsletter' },
    },
  },
  render: ({
    theme = 'light',
    layout,
    selectOpen,
    checkboxChecked,
    compactButtons,
    inputState,
    textareaState,
    selectState,
    actionTone,
    linkPlacement,
    selectInverted,
    showDescriptions,
    showSecondaryAction,
  }) => {
    const demoProps: DemoProps = {
      theme,
      layout,
      selectOpen,
      checkboxChecked,
      compactButtons,
      inputState,
      textareaState,
      selectState,
      actionTone,
      linkPlacement,
      selectInverted,
      showDescriptions,
      showSecondaryAction,
    }

    const preview = (() => {
      switch (layout) {
        case 'login':
          return <LoginForm {...demoProps} theme={theme} />
        case 'login-link':
          return <LoginWithLinkForm {...demoProps} theme={theme} />
        case 'shipping':
          return <ShippingForm {...demoProps} theme={theme} />
        case 'newsletter':
          return <NewsletterForm {...demoProps} theme={theme} />
        case 'contact-compact':
          return <ContactCompactForm {...demoProps} theme={theme} />
        case 'forgot-password':
          return <ForgotPasswordForm {...demoProps} theme={theme} />
      }
    })()

    return (
      <div className="ds-form-doc">
        <SectionTitle title="Form playground" subtitle="Switch layouts and states to verify spacing, labels, checkbox behavior, and action styles." />
        {preview}
      </div>
    )
  },
}

export const AllForms: Story = {
  name: 'All Forms',
  parameters: {
    controls: { include: ['theme'] },
  },
  render: ({ theme = 'dark' }) => (
    <div className="ds-form-doc ds-form-doc--all">
      <SectionTitle title="All forms" subtitle="Six layouts implemented from Figma with theme toggle (light and dark)." />
      <div className="ds-form-doc__grid ds-form-doc__grid--showcase">
        <LoginForm theme={theme} selectOpen={false} checkboxChecked compactButtons />
        <LoginWithLinkForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />
        <ShippingForm theme={theme} selectOpen checkboxChecked />
        <NewsletterForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />
        <ContactCompactForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />
        <ForgotPasswordForm theme={theme} selectOpen={false} checkboxChecked={false} compactButtons={false} />
      </div>
    </div>
  ),
}

export const SelectStates: Story = {
  name: 'Select States',
  args: {
    theme: 'dark',
    selectOpen: true,
    selectInverted: false,
  },
  argTypes: {
    theme: {
      control: { type: 'radio' },
      options: ['light', 'dark'],
    },
    selectOpen: {
      control: 'boolean',
    },
    selectInverted: {
      control: 'boolean',
      if: { arg: 'theme', eq: 'dark' },
    },
  },
  render: ({ theme = 'dark', selectOpen = true, selectInverted = false }) => {
    const states: FormControlState[] = ['default', 'focus', 'hover', 'error', 'disabled']

    return (
      <div className="ds-form-doc">
        <SectionTitle title="Select states" subtitle="Validate default, focus, hover, error, and disabled states in both themes." />
        <div className="ds-form-doc__grid ds-form-doc__grid--showcase">
          {states.map((state) => (
            <Form key={state} className="ds-form-doc__card" style={{ ...formCardStyle, maxWidth: 365 }} theme={theme}>
              <SectionTitle title={`State: ${state}`} />
              <FormSelect
                inlineLabel="Shipping method"
                state={state}
                open={state === 'disabled' ? false : selectOpen}
                className={selectInverted ? 'ds-form-select--inverted' : undefined}
                options={[
                  { value: 'standard', label: 'Standard Delivery', description: '2-3 business days' },
                  { value: 'express', label: 'Express Delivery', description: 'Next business day' },
                  { value: 'pickup', label: 'Store Pickup', description: 'Ready in 4 hours' },
                ]}
                value="standard"
              />
            </Form>
          ))}
        </div>
      </div>
    )
  },
}

