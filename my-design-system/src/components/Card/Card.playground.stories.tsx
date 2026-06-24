// filepath: /Users/mohammedoueidat/Documents/GitHub/Design-System/my-design-system/src/components/Card/Card.stories.tsx
import type { CSSProperties, ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Card } from './Card'

const description =
  'A modular content container used to group related information and actions into a clear, digestible layout. Cards help organize complex content while maintaining flexibility across different use cases such as listings, summaries, previews, or dashboards.'

const getPageStyle = (theme: 'light' | 'dark' = 'light'): CSSProperties => ({
  backgroundColor: theme === 'dark' ? '#0a111a' : '#f5f7fa',
  boxSizing: 'border-box',
  color: theme === 'dark' ? '#ffffff' : '#1f1f1f',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
  minHeight: '100vh',
  padding: '40px clamp(24px, 4vw, 56px)',
  width: '100%',
})

const headerStyle: CSSProperties = {
  borderBottom: '1px solid currentColor',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  opacity: 0.95,
  paddingBottom: '24px',
}

const breadcrumbStyle: CSSProperties = { fontSize: '14px', opacity: 0.85 }
const titleStyle: CSSProperties = { fontSize: '40px', fontWeight: 700, margin: 0 }
const descriptionStyle: CSSProperties = {
  fontSize: '14px',
  lineHeight: 1.5,
  margin: 0,
  maxWidth: '560px',
  opacity: 0.85,
}

const gridStyle: CSSProperties = {
  alignItems: 'start',
  display: 'grid',
  gap: '32px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  maxWidth: '1280px',
}

const bodyText =
  "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."

const longBodyText =
  "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."

/** Stroked rating-pill icon: "PG" above "15" inside a thin circle */
const PgRatingIcon = (): ReactNode => (
  <span
    style={{
      alignItems: 'center',
      border: '1.5px solid currentColor',
      borderRadius: '999px',
      display: 'inline-flex',
      flexDirection: 'column',
      fontFamily: 'inherit',
      fontSize: 9,
      fontWeight: 700,
      gap: 1,
      height: 38,
      justifyContent: 'center',
      letterSpacing: 0.2,
      lineHeight: 1,
      width: 38,
    }}
  >
    <span>PG</span>
    <span>15</span>
  </span>
)

type CardArgs = { theme: 'light' | 'dark' }

const meta: Meta<CardArgs> = {
  title: 'Components/Card/Playground',
  parameters: { layout: 'fullscreen' },
  args: { theme: 'light' },
  argTypes: {
    theme: {
      control: 'inline-radio',
      options: ['light', 'dark'],
    },
  },
}
export default meta

type Story = StoryObj<CardArgs>

/* -------------------------------------------------------------- *
 * 1 · Icon + title (horizontal header)                           *
 * -------------------------------------------------------------- */
export const IconHeader: Story = {
  name: '1 · Icon + title (horizontal header)',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Icon header</h1>
        <p style={descriptionStyle}>
          A simple card with an icon next to the title and two actions in the
          footer.
        </p>
      </header>
      <div style={{ maxWidth: 560 }}>
        <Card theme={theme}>
          <Card.Body>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <Card.Icon />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                <Card.Title>Title</Card.Title>
                <Card.Text>{bodyText}</Card.Text>
              </div>
            </div>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 2 · Horizontal · portrait media                                *
 * -------------------------------------------------------------- */
export const HorizontalPortrait: Story = {
  name: '2 · Horizontal · portrait image',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Horizontal · portrait media</h1>
        <p style={descriptionStyle}>
          A side-by-side layout with the media inset inside the card padding.
        </p>
      </header>
      <div style={{ maxWidth: 560 }}>
        <Card theme={theme} orientation="horizontal">
          <Card.Media shape="portrait" inset />
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 3 · Stacked icon + title                                       *
 * -------------------------------------------------------------- */
export const StackedIcon: Story = {
  name: '3 · Stacked icon + title',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Stacked icon</h1>
        <p style={descriptionStyle}>
          The icon sits above the title — useful for feature lists or
          highlight grids.
        </p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Icon />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 4 · Rating + person                                            *
 * -------------------------------------------------------------- */
export const RatingPerson: Story = {
  name: '4 · Rating + person',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Rating + person</h1>
        <p style={descriptionStyle}>
          Use stars and a person row to attribute a quote or testimonial.
        </p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Rating value={3.5} />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Person name="Name" supporting="Supporting text" />
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 5 · Big stat                                                   *
 * -------------------------------------------------------------- */
export const StatCard: Story = {
  name: '5 · Big stat',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Stat card</h1>
        <p style={descriptionStyle}>
          A headline number with a supporting suffix, paired with body copy
          and actions.
        </p>
      </header>
      <div style={{ maxWidth: 460 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Stat prefix="+" value="999" suffix="Million" />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 6 · Circle image + link                                        *
 *   – Circle is left-aligned (not centered)                      *
 *   – Link in subdued gray with arrow                            *
 * -------------------------------------------------------------- */
export const CircleMedia: Story = {
  name: '6 · Circle image + link',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Circle image + link</h1>
        <p style={descriptionStyle}>
          A round media element above a title, subtitle and a single text link.
        </p>
      </header>
      <div style={{ maxWidth: 440 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Media shape="circle" />
            <Card.Title>Title of the card</Card.Title>
            <Card.Text>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Text>
            <Card.Link href="#">This is a link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 7 · Meta + close + alert + labels                              *
 *   – Title 28 / Subtitle 20                                     *
 * -------------------------------------------------------------- */
export const DetailCard: Story = {
  name: '7 · Meta + close + alert + labels',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Detail card</h1>
        <p style={descriptionStyle}>
          A long-form layout combining metadata, a close affordance, an inline
          alert and a chip group.
        </p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Header
              meta="This is a meta data text"
              onClose={() => undefined}
            />
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>
            <Card.Alert title="This is the title">
              A problem was encountered while processing your request.
            </Card.Alert>
            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 8 · Booking · split actions                                    *
 *   – PG-15 alert icon                                           *
 *   – Book Your Tickets (filled)  +  Learn More → (link)         *
 * -------------------------------------------------------------- */
export const BookingCard: Story = {
  name: '8 · Booking · split actions',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Booking card</h1>
        <p style={descriptionStyle}>
          A primary "Book Your Tickets" action paired with a textual "Learn More"
          link.
        </p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>

            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>

            <Card.Alert icon={<PgRatingIcon />}>
              A problem was encountered while processing your request.
            </Card.Alert>

            <Card.Actions align="between">
              <Button>Book Your Tickets</Button>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 9 · Featured detail (wider booking variant)                    *
 * -------------------------------------------------------------- */
export const FeaturedDetail: Story = {
  name: '9 · Featured detail',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Featured detail</h1>
        <p style={descriptionStyle}>
          A wider variant of the booking card with the same vocabulary of
          headline, body, labels, alert and actions.
        </p>
      </header>
      <div style={{ maxWidth: 520 }}>
        <Card theme={theme}>
          <Card.Body>
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>

            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>

            <Card.Alert icon={<PgRatingIcon />}>
              A problem was encountered while processing your request.
            </Card.Alert>

            <Card.Actions align="between">
              <Button>Book Your Tickets</Button>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 10 · Image variants (LOGO + overlay)                           *
 *   – Banner with LOGO bottom-left                               *
 *   – Banner with bottom-overlay caption                         *
 * -------------------------------------------------------------- */
export const ImageAssets: Story = {
  name: '10 · Image variants (LOGO + overlay)',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card · Assets</div>
        <h1 style={titleStyle}>Card image</h1>
        <p style={descriptionStyle}>{description}</p>
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          maxWidth: 480,
          width: '100%',
        }}
      >
        <Card.Media shape="banner" logo />
        <Card.Media
          shape="banner"
          overlay={
            <>
              <Card.Title style={{ fontSize: 22 }}>Title of the card</Card.Title>
              <Card.Text>
                The subtitle text for whatever you'd want the user to read first.
              </Card.Text>
            </>
          }
        />
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 11 · Horizontal full detail                                    *
 *   Portrait image on the left with LOGO bottom-left,            *
 *   full content on the right                                    *
 * -------------------------------------------------------------- */
export const HorizontalFullDetail: Story = {
  name: '11 · Horizontal · full detail with LOGO',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Horizontal full detail</h1>
        <p style={descriptionStyle}>
          A horizontal layout combining a portrait media frame with the LOGO
          badge anchored bottom-left, and the full content vocabulary on the
          right (meta, close, title, subtitle, body, alert and labels).
        </p>
      </header>
      <div style={{ maxWidth: 720 }}>
        <Card theme={theme} orientation="horizontal">
          <Card.Media shape="portrait" logo />
          <Card.Body>
            <Card.Header
              meta="This is a meta data text"
              onClose={() => undefined}
            />
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>
            <Card.Alert title="This is the title">
              A problem was encountered while processing your request.
            </Card.Alert>
            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 12 · Vertical full detail                                      *
 *   Banner image on top with LOGO bottom-left,                   *
 *   full content stacked below                                   *
 * -------------------------------------------------------------- */
export const VerticalFullDetail: Story = {
  name: '12 · Vertical · full detail with LOGO',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Vertical full detail</h1>
        <p style={descriptionStyle}>
          A vertical layout combining a banner media frame with the LOGO
          badge anchored bottom-left, and the full content vocabulary stacked
          below (meta, close, title, subtitle, body, alert and labels).
        </p>
      </header>
      <div style={{ maxWidth: 480 }}>
        <Card theme={theme}>
          <Card.Media shape="banner" logo />
          <Card.Body>
            <Card.Header
              meta="This is a meta data text"
              onClose={() => undefined}
            />
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>
            <Card.Alert title="This is the title">
              A problem was encountered while processing your request.
            </Card.Alert>
            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}

/* -------------------------------------------------------------- *
 * 13 · Showcase – every variant on a single page                 *
 * -------------------------------------------------------------- */
export const Showcase: Story = {
  name: '13 · Showcase (all variants)',
  render: ({ theme }) => (
    <div style={getPageStyle(theme)}>
      <header style={headerStyle}>
        <div style={breadcrumbStyle}>Components / Card</div>
        <h1 style={titleStyle}>Card{theme === 'dark' ? ': Dark' : ''}</h1>
        <p style={descriptionStyle}>{description}</p>
      </header>

      <div style={gridStyle}>
        {/* 1. Icon header */}
        <Card theme={theme}>
          <Card.Body>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <Card.Icon />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                <Card.Title>Title</Card.Title>
                <Card.Text>{bodyText}</Card.Text>
              </div>
            </div>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>

        {/* 3. Stacked icon */}
        <Card theme={theme}>
          <Card.Body>
            <Card.Icon />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>

        {/* 4. Rating */}
        <Card theme={theme}>
          <Card.Body>
            <Card.Rating value={3.5} />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Person name="Name" supporting="Supporting text" />
          </Card.Body>
        </Card>

        {/* 5. Stat */}
        <Card theme={theme}>
          <Card.Body>
            <Card.Stat prefix="+" value="999" suffix="Million" />
            <Card.Title>Title</Card.Title>
            <Card.Text>{bodyText}</Card.Text>
            <Card.Actions>
              <Button variant="plain">Button</Button>
              <Button>Button</Button>
            </Card.Actions>
          </Card.Body>
        </Card>

        {/* 6. Circle */}
        <Card theme={theme}>
          <Card.Body>
            <Card.Media shape="circle" />
            <Card.Title>Title of the card</Card.Title>
            <Card.Text>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Text>
            <Card.Link href="#">This is a link</Card.Link>
          </Card.Body>
        </Card>

        {/* 8. Booking */}
        <Card theme={theme}>
          <Card.Body>
            <Card.Title>Title of the card</Card.Title>
            <Card.Subtitle>
              The subtitle text for whatever you'd want the user to read first.
            </Card.Subtitle>
            <Card.Text>{longBodyText}</Card.Text>
            <Card.Labels>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
              <Card.Label>Label</Card.Label>
            </Card.Labels>
            <Card.Alert icon={<PgRatingIcon />}>
              A problem was encountered while processing your request.
            </Card.Alert>
            <Card.Actions align="between">
              <Button>Book Your Tickets</Button>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.Actions>
          </Card.Body>
        </Card>
      </div>
    </div>
  ),
}
