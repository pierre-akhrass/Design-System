import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion } from './Accordion'
import './Accordion.stories.scss'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  args: {
    theme: 'light',
    allowMultiple: false,
  },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
    allowMultiple: {
      control: 'boolean',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Expandable content sections with single or multiple open behavior for dense information layouts.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof Accordion>

const AccordionDocumentation = ({ theme, allowMultiple }: { theme: 'light' | 'dark'; allowMultiple: boolean }) => (
  <div className={`ds-accordion-doc ds-accordion-doc--${theme}`}>
    <div className="ds-accordion-doc__intro">
      <h1 className="ds-accordion-doc__title">{theme === 'dark' ? 'Accordion Item: Dark' : 'Accordion Item'}</h1>
      <p className="ds-accordion-doc__description">
        A vertically stacked interactive component that allows users to expand and collapse sections of
        content. Accordions help organize large amounts of information into manageable groups while reducing
        visual clutter and improving scanability.
      </p>
    </div>

    <div className="ds-accordion-doc__divider" />

    <div className="ds-accordion-doc__rows">
      <div className="ds-accordion-doc__row">
        <span className="ds-accordion-doc__chip">Closed</span>
        <Accordion
          theme={theme}
          allowMultiple={allowMultiple}
          items={[{ id: 'closed', title: 'Title for accordion row', isOpen: false }]}
          className="ds-accordion-doc__component"
        />
      </div>

      <div className="ds-accordion-doc__row">
        <span className="ds-accordion-doc__chip">Open</span>
        <Accordion
          theme={theme}
          allowMultiple={allowMultiple}
          items={[
            {
              id: 'open',
              title: 'Title for accordion row',
              isOpen: true,
              content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida tellus eget sapien ultricies, ac dapibus arcu fermentum. Morbi massa metus, iaculis vitae mi eu, bibendum posuere ante. Aliquam sed imperdiet dui, nec convallis nunc. Quisque tortor turpis, consectetur ac elit rutrum, bibendum scelerisque massa.',
            },
          ]}
          className="ds-accordion-doc__component"
        />
      </div>
    </div>
  </div>
)

export const Playground: Story = {}

export const Documentation: Story = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#f5f7fa' },
        { name: 'dark', value: '#0a111a' },
      ],
      default: 'light',
    },
  },
  render: (args) => (
    <section className={`ds-accordion-figma ds-accordion-figma--${args.theme}`}>
      <header className="ds-accordion-figma__header">
        <span>
          <span className="ds-accordion-figma__header-muted">Component / </span>Accordion
        </span>
        <span>Design System</span>
      </header>

      <div className="ds-accordion-figma__content">
        <AccordionDocumentation theme={args.theme ?? 'light'} allowMultiple={Boolean(args.allowMultiple)} />
      </div>
    </section>
  ),
}
