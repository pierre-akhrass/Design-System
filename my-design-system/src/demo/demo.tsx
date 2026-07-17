import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Navbar,
  NavItem,
  Hero,
  Banner,
  Card,
  CardBody,
  CardMedia,
  CardTitle,
  CardText,
  CardLabels,
  CardLabel,
  CardRating,
  CardStat,
  CardPerson,
  CardActions,
  Button,
  Tag,
  Carousel,
  CarouselSlide,
  Accordion,
  Avatar,
  AvatarGroup,
  SocialMediaPost,
  Search,
  Form,
  FormInput,
  FormSelect,
  FormTextarea,
  FormActions,
  Dialog,
  Footer,
  Tooltip,
} from '../index'
import {
  applyPublishedTheme,
  loadPublishedTheme,
  type PublishedTheme,
} from '../theme/publishedTheme'
import './demo.scss'

// ── Apply published overrides on load ────────────────────────────────────────
applyPublishedTheme()

// ── Live-theme hook ───────────────────────────────────────────────────────────
function usePublishedTheme() {
  const [theme, setTheme] = useState<PublishedTheme | null>(() => loadPublishedTheme())
  useEffect(() => {
    const refresh = () => { applyPublishedTheme(); setTheme(loadPublishedTheme()) }
    const onStorage = (e: StorageEvent) => { if (e.key === 'ds-published-theme') refresh() }
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

function usePublishedProps(theme: PublishedTheme | null, id: string): Record<string, unknown> {
  return (theme?.components[id]?.props ?? {}) as Record<string, unknown>
}

// ── Static page data ──────────────────────────────────────────────────────────

const STORES = [
  {
    name: 'Zara',
    category: 'Fashion',
    rating: 4.7,
    text: "The latest trends from one of the world's most iconic fashion brands — new collections every season.",
    img: 'https://picsum.photos/seed/zara1/600/340',
  },
  {
    name: 'Apple Store',
    category: 'Electronics',
    rating: 4.9,
    text: 'Experience the full Apple ecosystem — from the latest iPhone and Mac to accessories and expert support.',
    img: 'https://picsum.photos/seed/apple2/600/340',
  },
  {
    name: 'Pottery Barn',
    category: 'Home & Lifestyle',
    rating: 4.5,
    text: 'Discover curated furniture and home décor that brings warmth, texture, and character to every room.',
    img: 'https://picsum.photos/seed/pottery3/600/340',
  },
]

const EVENTS = [
  'Summer Fashion Week — 20 July',
  'Tech Expo & Gadget Launch — 2 Aug',
  'Home & Garden Fair — 15 Aug',
  'Food & Culture Festival — 28 Aug',
  'Back-to-School Weekend Sale — 5 Sep',
]

const REVIEWS = [
  { name: 'Layla Hassan', role: 'Regular visitor', rating: 5, text: 'GrandMall is always my first choice for a full-day shopping experience. Great stores, great food, great atmosphere.' },
  { name: 'Omar Khalid', role: 'Frequent shopper', rating: 4, text: "The mix of international and local brands is exactly what I love. Staff are helpful and the place is always spotless." },
  { name: 'Sara Mansour', role: 'Monthly visitor', rating: 5, text: "From kids' activities to luxury retail — GrandMall genuinely has something for everyone. We never leave disappointed." },
]

const FAQ_ITEMS = [
  { id: 'q1', title: 'What are the opening hours?', content: 'GrandMall is open daily from 10 AM to 10 PM, with extended hours until midnight on weekends and public holidays.' },
  { id: 'q2', title: 'Is parking available?', content: 'Yes — we offer over 3 000 covered parking spaces on four levels, including dedicated EV charging bays and accessible parking close to every entrance.' },
  { id: 'q3', title: 'How do I join the loyalty programme?', content: 'Download the GrandMall app or visit any customer-service desk. Sign up in under two minutes and start earning points on your very first purchase.' },
  { id: 'q4', title: 'Are there family facilities?', content: "Absolutely. We have dedicated family rooms with nursing areas, a supervised children's play zone on Level 2, and stroller rentals available at all entrances." },
  { id: 'q5', title: 'Can I buy gift cards?', content: 'GrandMall gift cards are available in denominations from AED 50 to AED 1 000 at our customer-service desks and through the app.' },
]

// ── LandingPage component ─────────────────────────────────────────────────────

function LandingPage() {
  const [signInOpen, setSignInOpen] = useState(false)
  const theme = usePublishedTheme()

  // ── Published props ────────────────────────────────────────────────────────

  const carousel = usePublishedProps(theme, 'carousel')
  const slideCount = typeof carousel.slideCount === 'number' ? carousel.slideCount : 5
  const carShowNav = typeof carousel.showNavigation === 'boolean' ? carousel.showNavigation : true
  const carShowFade = typeof carousel.showFade === 'boolean' ? carousel.showFade : undefined
  const carPrev = typeof carousel.prevLabel === 'string' ? carousel.prevLabel : undefined
  const carNext = typeof carousel.nextLabel === 'string' ? carousel.nextLabel : undefined
  const carTheme = carousel.theme === 'dark' ? 'dark' : 'light'

  const social = usePublishedProps(theme, 'social-media')
  const socPlatform = typeof social.platform === 'string' ? social.platform : 'instagram'
  const socType = typeof social.type === 'string' ? social.type : 'image'
  const socCaption = typeof social.caption === 'string' ? social.caption : 'A beautiful day at GrandMall ☀️'
  const socText = typeof social.text === 'string' ? social.text : 'Loving the new summer collection at GrandMall!'
  const socHashtags = typeof social.hashtags === 'string' ? social.hashtags : '#GrandMall #Shopping'
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
  const formActionsTone = form.actionsTone === 'brand' ? 'brand' : 'neutral'

  const footer = usePublishedProps(theme, 'footer')
  const footerTheme = footer.theme === 'dark' ? 'dark' : 'light'
  const footerShowNewsletter = typeof footer.showNewsletterBar === 'boolean' ? footer.showNewsletterBar : true
  const footerNavCount = typeof footer.navColumnCount === 'number' ? Math.max(1, Math.min(5, footer.navColumnCount)) : 3

  return (
    <div className="landing">

      {/* ── Navbar ─────────────────────────────────────────────────── */}
      <div className="landing__navbar">
        <Navbar
          colorMode="dark"
          logo={<span className="landing__logo">GrandMall</span>}
          actions={
            <div className="landing__nav-actions">
              <Search placeholder="Search stores…" size="small" />
              <Button size="small" onClick={() => setSignInOpen(true)}>Sign in</Button>
            </div>
          }
        >
          <NavItem label="Stores" href="#stores" />
          <NavItem label="Events" href="#events" />
          <NavItem label="Offers" href="#offers" />
          <NavItem label="Contact" href="#contact" />
        </Navbar>
      </div>

      {/* ── Sign-in Dialog ─────────────────────────────────────────── */}
      <Dialog open={signInOpen} onClose={() => setSignInOpen(false)}>
        <Dialog.Header title="Sign in to GrandMall" showClose onClose={() => setSignInOpen(false)} />
        <Dialog.Body>
          <Form theme="light">
            <FormInput label="Email" placeholder="your@email.com" />
            <FormInput label="Password" placeholder="••••••••" />
            <FormActions primaryLabel="Sign in" secondaryLabel="Cancel" primaryTone="brand" />
          </Form>
        </Dialog.Body>
      </Dialog>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <Hero
        mode="dark"
        autoPlay={5000}
        slides={[
          {
            image: 'https://picsum.photos/seed/mall1/1440/640',
            title: 'Summer Sale — Up to 70% Off',
            subtitle: 'Hundreds of stores, one destination.',
            primaryAction: { label: 'Shop now', href: '#stores' },
            secondaryAction: { label: 'See offers', href: '#offers' },
          },
          {
            image: 'https://picsum.photos/seed/mall2/1440/640',
            title: 'New Season Arrivals',
            subtitle: 'Fresh collections from your favourite brands.',
            primaryAction: { label: 'Explore', href: '#stores' },
          },
          {
            image: 'https://picsum.photos/seed/mall3/1440/640',
            title: 'Upcoming Events',
            subtitle: 'Live entertainment, food festivals & more.',
            primaryAction: { label: 'View calendar', href: '#events' },
          },
        ]}
      />

      {/* ── Promo Banner ───────────────────────────────────────────── */}
      <Banner
        theme="light"
        layout="media-right"
        size="medium"
        title="Download the GrandMall App"
        description="Get exclusive in-app deals, browse the directory, and book parking before you arrive."
        showStoreBadges
      />

      {/* ── Stats ──────────────────────────────────────────────────── */}
      <section className="landing__section landing__section--alt" id="offers">
        <div className="landing__container">
          <div className="landing__stats-grid">
            <Card>
              <CardBody>
                <CardStat value="350+" />
                <CardText>Stores &amp; restaurants</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardStat value="3 M+" />
                <CardText>Monthly visitors</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardStat value="12" />
                <CardText>Dining concepts</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <CardStat value="4" />
                <CardText>Entertainment zones</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Featured Stores ────────────────────────────────────────── */}
      <section className="landing__section" id="stores">
        <div className="landing__container">
          <h2 className="landing__section-title landing__section-title--center">Featured Stores</h2>
          <div className="landing__cards-grid">
            {STORES.map((store) => (
              <Card key={store.name}>
                <CardMedia src={store.img} alt={store.name} />
                <CardBody>
                  <CardLabels>
                    <CardLabel>{store.category}</CardLabel>
                  </CardLabels>
                  <CardTitle>{store.name}</CardTitle>
                  <CardRating value={store.rating} />
                  <CardText>{store.text}</CardText>
                  <CardActions>
                    <Button variant="plain">Details</Button>
                    <Button>Visit store</Button>
                  </CardActions>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Upcoming Events ────────────────────────────────────────── */}
      <section className="landing__section landing__section--dark" id="events">
        <div className="landing__container">
          <div className="landing__section-header landing__section-header--inverted">
            <h2 className="landing__section-title">Upcoming Events</h2>
            <p className="landing__section-lead">Mark your calendar — something exciting is always on at GrandMall.</p>
          </div>
          <Carousel
            theme={carTheme}
            showNavigation={carShowNav}
            showFade={carShowFade}
            prevLabel={carPrev}
            nextLabel={carNext}
          >
            {EVENTS.slice(0, slideCount).map((ev) => (
              <CarouselSlide key={ev}>
                <div className="landing__event-slide">{ev}</div>
              </CarouselSlide>
            ))}
          </Carousel>
        </div>
      </section>

      {/* ── Visitor Reviews ────────────────────────────────────────── */}
      <section className="landing__section landing__section--alt">
        <div className="landing__container">
          <h2 className="landing__section-title landing__section-title--center">What Visitors Say</h2>
          <div className="landing__cards-grid">
            {REVIEWS.map((r) => (
              <Card key={r.name}>
                <CardBody>
                  <CardRating value={r.rating} />
                  <CardText>&quot;{r.text}&quot;</CardText>
                  <CardPerson name={r.name} supporting={r.role} />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className="landing__section">
        <div className="landing__container landing__container--narrow">
          <h2 className="landing__section-title landing__section-title--center">Frequently Asked Questions</h2>
          <Accordion items={FAQ_ITEMS} allowMultiple />
        </div>
      </section>

      {/* ── Social Feed ────────────────────────────────────────────── */}
      <section className="landing__section landing__section--alt">
        <div className="landing__container">
          <h2 className="landing__section-title landing__section-title--center">Follow Us</h2>
          <div className="landing__social-row">
            <SocialMediaPost
              platform={socPlatform as never}
              type={socType as never}
              theme={socTheme}
              caption={socType === 'image' ? socCaption : undefined}
              text={socType === 'text' ? socText : undefined}
              hashtags={socType === 'text' ? socHashtags : undefined}
              pagination={socType === 'image' && socShowPag ? { current: 1, total: 5 } : undefined}
            />
            <SocialMediaPost
              platform={socPlatform as never}
              type={socType as never}
              theme={socTheme}
              caption={socType === 'image' ? 'New arrivals in store this week 🛍️' : undefined}
              text={socType === 'text' ? 'Just dropped: the new summer edit is here.' : undefined}
              hashtags={socType === 'text' ? '#NewArrivals #GrandMall' : undefined}
              pagination={socType === 'image' && socShowPag ? { current: 2, total: 5 } : undefined}
            />
          </div>
        </div>
      </section>

      {/* ── Browse by Category ─────────────────────────────────────── */}
      <section className="landing__section">
        <div className="landing__container">
          <h2 className="landing__section-title landing__section-title--center">Browse by Category</h2>
          <div className="landing__tags-row">
            {['Fashion', 'Electronics', 'Beauty', 'Food & Dining', 'Sports', 'Home & Lifestyle', 'Jewellery', 'Entertainment', 'Books', 'Kids'].map((cat) => (
              <Tag key={cat} label={cat} />
            ))}
          </div>
          <div className="landing__tooltip-hint">
            <Tooltip
              title="Tip"
              body="Publish a Tooltip theme from the Playground to change how this looks."
              placement={tooltipPlacement}
              theme={tooltipTheme}
            />
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────── */}
      <section className="landing__section landing__section--alt" id="contact">
        <div className="landing__container">
          <div className="landing__contact-grid">
            <div>
              <h2 className="landing__section-title">Get in Touch</h2>
              <p className="landing__contact-lead">
                Our team is here to help with store enquiries, event bookings, corporate gifts, and more.
              </p>
              <ul className="landing__contact-details">
                <li><strong>Address:</strong> GrandMall Boulevard, City Centre</li>
                <li><strong>Phone:</strong> +971 4 000 1234</li>
                <li><strong>Email:</strong> hello@grandmall.ae</li>
                <li><strong>Hours:</strong> Daily 10 AM – 10 PM</li>
              </ul>
              <div className="landing__team">
                <p className="landing__team-label">Customer Experience Team</p>
                <AvatarGroup spacing="overlap">
                  <Avatar type="initial" initials="LA" size={avatarSize} theme={avatarTheme} />
                  <Avatar type="initial" initials="OK" size={avatarSize} theme={avatarTheme} />
                  <Avatar type="initial" initials="SM" size={avatarSize} theme={avatarTheme} />
                  <Avatar type="initial" initials="+4" size={avatarSize} theme={avatarTheme} />
                </AvatarGroup>
              </div>
            </div>
            <div>
              <Form theme={formTheme}>
                <FormInput label="Full Name" placeholder="Your full name" />
                {formInputCount >= 2 && (
                  <FormInput label="Email Address" placeholder="your@email.com" />
                )}
                {formShowSelect && (
                  <FormSelect
                    label="Subject"
                    options={[
                      { value: 'general', label: 'General Enquiry' },
                      { value: 'stores', label: 'Store Information' },
                      { value: 'events', label: 'Events & Bookings' },
                      { value: 'feedback', label: 'Feedback' },
                    ]}
                  />
                )}
                {formShowTextarea && (
                  <FormTextarea label="Message" placeholder="How can we help?" rows={4} />
                )}
                <FormActions primaryLabel="Send message" secondaryLabel="Clear" primaryTone={formActionsTone} />
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <Footer
        theme={footerTheme}
        showNewsletterBar={footerShowNewsletter}
        showOpeningHours
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
        copyright="©2026 GrandMall. All Rights Reserved."
      />
    </div>
  )
}

createRoot(document.getElementById('demo-root')!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
