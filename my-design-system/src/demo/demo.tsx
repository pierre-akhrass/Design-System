import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Card,
  Button,
  Tag,
  Carousel,
  CarouselSlide,
  Dialog,
  List,
  ListItem,
  SocialMediaPost,
  Avatar,
  AvatarGroup,
  Footer,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  FormCheckbox,
  FormActions,
  Tooltip,
} from '../index'
import {
  applyPublishedTheme,
  loadPublishedTheme,
  type PublishedTheme,
} from '../theme/publishedTheme'
import './demo.scss'

// ── Apply published overrides ─────────────────────────────────────────────────
// This is the ONE line a real frontend page needs. It reads whatever you
// published from the playground (stored in this browser's localStorage) and
// injects it globally, so every component below reflects your changes.
applyPublishedTheme()

// ── Shared live-theme hook ────────────────────────────────────────────────────
// Re-reads the published theme (CSS *and* structural props) whenever something
// is published, storage changes, or the tab regains focus.
function usePublishedTheme() {
  const [theme, setTheme] = useState<PublishedTheme | null>(() => loadPublishedTheme())

  useEffect(() => {
    const refresh = () => {
      applyPublishedTheme()
      setTheme(loadPublishedTheme())
    }
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'ds-published-theme') refresh()
    }
    const onVisible = () => { if (!document.hidden) refresh() }
    window.addEventListener('ds-theme-published', refresh)
    window.addEventListener('storage', onStorage)
    window.addEventListener('focus', onVisible)
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.removeEventListener('ds-theme-published', refresh)
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('focus', onVisible)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return theme
}

/** Read the published props for one component id (empty object when none). */
function usePublishedProps(theme: PublishedTheme | null, id: string): Record<string, unknown> {
  return (theme?.components[id]?.props ?? {}) as Record<string, unknown>
}

function DemoPage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const theme = usePublishedTheme()

  // Structural props published from each workspace (fall back to demo defaults).
  const carousel = usePublishedProps(theme, 'carousel')
  const list = usePublishedProps(theme, 'list')
  const social = usePublishedProps(theme, 'social-media')

  const slideCount = typeof carousel.slideCount === 'number' ? carousel.slideCount : 4
  const carShowNav = typeof carousel.showNavigation === 'boolean' ? carousel.showNavigation : true
  const carShowFade = typeof carousel.showFade === 'boolean' ? carousel.showFade : undefined
  const carPrev = typeof carousel.prevLabel === 'string' ? carousel.prevLabel : undefined
  const carNext = typeof carousel.nextLabel === 'string' ? carousel.nextLabel : undefined
  const carTheme = carousel.theme === 'dark' ? 'dark' : 'light'

  const itemCount = typeof list.itemCount === 'number' ? list.itemCount : 3
  const listVariant = typeof list.variant === 'string' ? list.variant : 'document'
  const listBordered = typeof list.bordered === 'boolean' ? list.bordered : true
  const listShowDesc = typeof list.showDescription === 'boolean' ? list.showDescription : true
  const listTheme = list.theme === 'dark' ? 'dark' : 'light'

  const socPlatform = typeof social.platform === 'string' ? social.platform : 'instagram'
  const socType = typeof social.type === 'string' ? social.type : 'image'
  const socCaption = typeof social.caption === 'string' ? social.caption : 'A beautiful day on the coast ☀️'
  const socText = typeof social.text === 'string' ? social.text : 'Just published a design update from the playground!'
  const socHashtags = typeof social.hashtags === 'string' ? social.hashtags : '#designsystem #ui'
  const socShowPag = typeof social.showPagination === 'boolean' ? social.showPagination : true
  const socTheme = social.theme === 'dark' ? 'dark' : 'light'

  const avatar = usePublishedProps(theme, 'avatar')
  const avatarTheme = avatar.theme === 'dark' ? 'dark' : avatar.theme === 'light' ? 'light' : undefined
  const avatarSize = (typeof avatar.size === 'string' ? avatar.size : 'medium') as 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

  const tooltip = usePublishedProps(theme, 'tooltip')
  const tooltipTheme = tooltip.theme === 'dark' ? 'dark' : tooltip.theme === 'light' ? 'light' : undefined
  const tooltipPlacement = (typeof tooltip.placement === 'string' ? tooltip.placement : 'top') as 'top' | 'bottom' | 'left' | 'right'

  const form = usePublishedProps(theme, 'form')
  const formTheme = form.theme === 'dark' ? 'dark' : 'light'
  const formInputCount = typeof form.inputCount === 'number' ? form.inputCount : 2
  const formShowTextarea = typeof form.showTextarea === 'boolean' ? form.showTextarea : true
  const formShowSelect = typeof form.showSelect === 'boolean' ? form.showSelect : false
  const formShowCheckbox = typeof form.showCheckbox === 'boolean' ? form.showCheckbox : true
  const formActionsTone = form.actionsTone === 'brand' ? 'brand' : 'neutral'

  const footer = usePublishedProps(theme, 'footer')
  const footerTheme = footer.theme === 'dark' ? 'dark' : 'light'
  const footerShowNewsletter = typeof footer.showNewsletterBar === 'boolean' ? footer.showNewsletterBar : false
  const footerNavCount = typeof footer.navColumnCount === 'number' ? Math.max(1, Math.min(5, footer.navColumnCount)) : 3

  return (
    <main className="demo">
      <header className="demo__header">
        <h1 className="demo__title">My Frontend Page</h1>
        <p className="demo__lead">
          These are real design-system components. Publish a change in the
          Playground — colours, spacing, CSS variables, or structural options
          like slide count, list variant, form fields, or footer theme — then
          switch back to this tab and the change shows up here automatically.
        </p>
      </header>

      <section className="demo__section">
        <h2 className="demo__section-title">Tags</h2>
        <div className="demo__row">
          <Tag label="Featured" />
          <Tag label="New" />
          <Tag label="Sale" />
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Cards</h2>
        <div className="demo__grid">
          <Card>
            <Card.Body>
              <Card.Title>Mountain Retreat</Card.Title>
              <Card.Text>
                A quiet cabin in the hills — the perfect place to unplug and
                recharge over a long weekend.
              </Card.Text>
              <Card.Actions>
                <Button variant="plain">Details</Button>
                <Button>Book now</Button>
              </Card.Actions>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>City Apartment</Card.Title>
              <Card.Text>
                Modern living in the heart of downtown, steps from cafés,
                galleries and transit.
              </Card.Text>
              <Card.Actions>
                <Button variant="plain">Details</Button>
                <Button>Book now</Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Carousel</h2>
        <Carousel
          theme={carTheme}
          showNavigation={carShowNav}
          showFade={carShowFade}
          prevLabel={carPrev}
          nextLabel={carNext}
        >
          {Array.from({ length: slideCount }, (_, i) => (
            <CarouselSlide key={i}>Slide {i + 1}</CarouselSlide>
          ))}
        </Carousel>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">List</h2>
        <div style={{ maxWidth: 420 }}>
          <List theme={listTheme} bordered={listBordered}>
            {Array.from({ length: itemCount }, (_, i) => (
              <ListItem
                key={i}
                variant={listVariant as never}
                index={i + 1}
                label={`List item ${i + 1}`}
                description={listShowDesc ? 'Supporting description text' : undefined}
              />
            ))}
          </List>
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Social Media</h2>
        <div style={{ width: 280 }}>
          <SocialMediaPost
            platform={socPlatform as never}
            type={socType as never}
            theme={socTheme}
            caption={socType === 'image' ? socCaption : undefined}
            text={socType === 'text' ? socText : undefined}
            hashtags={socType === 'text' ? socHashtags : undefined}
            pagination={socType === 'image' && socShowPag ? { current: 1, total: 5 } : undefined}
          />
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Dialog</h2>
        <Button onClick={() => setDialogOpen(true)}>Open dialog</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <Dialog.Header title="Confirm booking" showClose onClose={() => setDialogOpen(false)} />
          <Dialog.Body>
            <Dialog.Text>
              This dialog reflects any published overrides too. Try changing the
              Dialog background in the Playground and reopening it.
            </Dialog.Text>
          </Dialog.Body>
          <Dialog.Actions>
            <Button variant="plain" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)}>Confirm</Button>
          </Dialog.Actions>
        </Dialog>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Avatar</h2>
        <div className="demo__row">
          <Avatar type="initial" initials="A" size={avatarSize} theme={avatarTheme} />
          <Avatar type="initial" initials="BC" size="large" theme={avatarTheme} />
          <AvatarGroup spacing="overlap">
            <Avatar type="initial" initials="A" size="small" theme={avatarTheme} />
            <Avatar type="initial" initials="B" size="small" theme={avatarTheme} />
            <Avatar type="initial" initials="C" size="small" theme={avatarTheme} />
          </AvatarGroup>
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Tooltip</h2>
        <div className="demo__row">
          <Tooltip title="Tooltip" body="Appears above" placement="top" theme={tooltipTheme} />
          <Tooltip title="Tooltip" body="Appears below" placement="bottom" theme={tooltipTheme} />
          <Tooltip title="Tooltip" body="Matches playground" placement={tooltipPlacement} theme={tooltipTheme} />
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Form</h2>
        <div style={{ maxWidth: 480 }}>
          <Form theme={formTheme}>
            <FormInput label="Full Name" placeholder="Enter your full name" />
            {formInputCount >= 2 && (
              <FormInput label="Email Address" placeholder="Enter your email" />
            )}
            {formShowSelect && (
              <FormSelect
                label="Subject"
                options={[
                  { value: 'general', label: 'General Enquiry' },
                  { value: 'support', label: 'Technical Support' },
                ]}
              />
            )}
            {formShowTextarea && (
              <FormTextarea label="Message" placeholder="Write your message here…" rows={4} />
            )}
            {formShowCheckbox && (
              <FormCheckbox label="I agree to the Terms & Conditions" />
            )}
            <FormActions primaryLabel="Submit" secondaryLabel="Cancel" primaryTone={formActionsTone} />
          </Form>
        </div>
      </section>

      <section className="demo__section">
        <h2 className="demo__section-title">Footer</h2>
        <Footer
          theme={footerTheme}
          showNewsletterBar={footerShowNewsletter}
          showOpeningHours={false}
          navColumns={Array.from({ length: footerNavCount }, (_, i) => ({
            title: (['Explore', 'Support', 'Legal', 'Company', 'More'][i] ?? `Section ${i + 1}`),
            links: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
          }))}
          socialLinks={[
            { platform: 'instagram', ariaLabel: 'Instagram' },
            { platform: 'linkedin', ariaLabel: 'LinkedIn' },
            { platform: 'x', ariaLabel: 'X (Twitter)' },
          ]}
          legalLinks={[{ label: 'Privacy Policy' }, { label: 'Terms & Conditions' }]}
          copyright="©2026. All Rights Reserved."
        />
      </section>
    </main>
  )
}

createRoot(document.getElementById('demo-root')!).render(
  <StrictMode>
    <DemoPage />
  </StrictMode>,
)
