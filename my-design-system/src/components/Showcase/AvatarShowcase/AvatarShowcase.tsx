import { Avatar } from '../../Avatar/Avatar'
import { AvatarGroup } from '../../Avatar/AvatarGroup'
import { AvatarBlock } from '../../Avatar/AvatarBlock'
import './AvatarShowcase.scss'

// ─── Icons ────────────────────────────────────────────────────────────────────

const PersonIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" width="60%" height="60%" fill="currentColor">
    <path d="M12 12c2.69 0 4.8-2.11 4.8-4.8S14.69 2.4 12 2.4 7.2 4.51 7.2 7.2 9.31 12 12 12zm0 2.4c-3.2 0-9.6 1.61-9.6 4.8v2.4h19.2v-2.4c0-3.19-6.4-4.8-9.6-4.8z" />
  </svg>
)

const ArrowRightIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
    <path d="M3.75 2h3.5a.75.75 0 010 1.5h-3.5a.25.25 0 00-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-3.5a.75.75 0 011.5 0v3.5A1.75 1.75 0 0112.25 14h-8.5A1.75 1.75 0 012 12.25v-8.5C2 2.784 2.784 2 3.75 2zm6.854-1h4.146a.25.25 0 01.25.25v4.146a.25.25 0 01-.427.177L13.03 4.03 9.28 7.78a.751.751 0 01-1.042-.018.751.751 0 01-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0110.604 1z" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const AVATAR_TYPES = [
  {
    type: 'initial' as const,
    label: 'Initial',
    tag: 'Text identity',
    description:
      'Displays a single letter representing a user\'s name. Best for text-only representations when no image is available — keeps the UI lightweight and accessible.',
  },
  {
    type: 'image' as const,
    label: 'Image',
    tag: 'Photo identity',
    description:
      'Shows a photo or uploaded image of the user. Ideal for personalized, recognizable identities in collaborative spaces, comments, and profile headers.',
  },
  {
    type: 'shape' as const,
    label: 'Shape',
    tag: 'Icon identity',
    description:
      'Uses an SVG icon or shape to represent an entity, team, or brand. Useful when no personal image is available or when representing a non-human actor.',
  },
] as const

const SIZES = [
  { key: 'xsmall' as const, label: 'XSmall', px: '24px', usage: 'Compact lists, badges' },
  { key: 'small' as const, label: 'Small', px: '32px', usage: 'Table rows, replies' },
  { key: 'medium' as const, label: 'Medium', px: '40px', usage: 'Menus, cards' },
  { key: 'large' as const, label: 'Large', px: '48px', usage: 'Profile rows' },
  { key: 'xlarge' as const, label: 'XLarge', px: '64px', usage: 'Profile headers' },
] as const

// ─── Component ────────────────────────────────────────────────────────────────

export const AvatarShowcase = () => {
  return (
    <section className="av-showcase" aria-labelledby="avatar-showcase-title">

      {/* ── Section header ─────────────────────────────────────────────── */}
      <header className="av-showcase__header">
        <span className="av-showcase__badge">Component</span>
        <h2 className="av-showcase__title" id="avatar-showcase-title">
          Avatar
        </h2>
        <p className="av-showcase__description">
          A visual representation of a user, entity, or brand displayed through images, initials, or
          icons. Avatars help personalize the experience, provide identity context, and support
          recognition across collaborative or account-based interfaces.
        </p>
      </header>

      {/* ── Types ──────────────────────────────────────────────────────── */}
      <div className="av-showcase__block">
        <div className="av-showcase__block-header">
          <h3 className="av-showcase__block-title">Types</h3>
          <p className="av-showcase__block-subtitle">
            Three avatar types cover the full spectrum of identity representation. Choose based on
            what data is available and how much visual weight the context demands.
          </p>
        </div>

        <div className="av-showcase__type-grid">
          {AVATAR_TYPES.map(({ type, label, tag, description }) => (
            <div key={type} className="av-showcase__type-card">
              <div className="av-showcase__type-canvas">
                <Avatar
                  type={type}
                  size="large"
                  initials="A"
                  src="https://i.pravatar.cc/150?img=3"
                  alt="User"
                  icon={<PersonIcon />}
                />
              </div>
              <div className="av-showcase__type-body">
                <div className="av-showcase__type-row">
                  <span className="av-showcase__type-label">{label}</span>
                  <span className="av-showcase__type-tag">{tag}</span>
                </div>
                <p className="av-showcase__type-desc">{description}</p>
                <code className="av-showcase__type-code">
                  type=&quot;{type}&quot;
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sizes ──────────────────────────────────────────────────────── */}
      <div className="av-showcase__block">
        <div className="av-showcase__block-header">
          <h3 className="av-showcase__block-title">Sizes</h3>
          <p className="av-showcase__block-subtitle">
            Five sizes let you scale the avatar to its context — from tight notification streams to
            prominent profile pages. All sizes work with every avatar type.
          </p>
        </div>

        <div className="av-showcase__sizes-canvas">
          <div className="av-showcase__sizes-row">
            {SIZES.map(({ key, label, px, usage }) => (
              <div key={key} className="av-showcase__size-col">
                <div className="av-showcase__size-preview">
                  <Avatar type="initial" size={key} initials="A" />
                </div>
                <span className="av-showcase__size-name">{label}</span>
                <span className="av-showcase__size-px">{px}</span>
                <span className="av-showcase__size-usage">{usage}</span>
              </div>
            ))}
          </div>

          <div className="av-showcase__sizes-divider" />

          <div className="av-showcase__sizes-row">
            {SIZES.map(({ key, label }) => (
              <div key={key} className="av-showcase__size-col">
                <div className="av-showcase__size-preview">
                  <Avatar
                    type="image"
                    size={key}
                    src={`https://i.pravatar.cc/150?img=${key === 'xsmall' ? 10 : key === 'small' ? 11 : key === 'medium' ? 12 : key === 'large' ? 13 : 14}`}
                    alt={`${label} avatar`}
                  />
                </div>
                <span className="av-showcase__size-name">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grouping ───────────────────────────────────────────────────── */}
      <div className="av-showcase__block">
        <div className="av-showcase__block-header">
          <h3 className="av-showcase__block-title">Grouping</h3>
          <p className="av-showcase__block-subtitle">
            Avatar groups communicate collaboration and shared membership. Use{' '}
            <strong>overlap</strong> for compact thread participants or reaction counts, and{' '}
            <strong>spaced</strong> for clearer individual recognition in team listings.
          </p>
        </div>

        <div className="av-showcase__group-grid">
          <div className="av-showcase__group-card">
            <div className="av-showcase__group-info">
              <span className="av-showcase__group-label">Overlap</span>
              <p className="av-showcase__group-desc">
                Avatars stack with a negative offset and a subtle shadow separator. Add an overflow
                badge to indicate additional members beyond what's shown.
              </p>
              <code className="av-showcase__type-code">spacing=&quot;overlap&quot;</code>
            </div>
            <div className="av-showcase__group-canvas">
              <AvatarGroup spacing="overlap" overflowCount={12} showOverflow>
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=1" alt="User 1" />
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=2" alt="User 2" />
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=3" alt="User 3" />
              </AvatarGroup>
              <AvatarGroup spacing="overlap">
                <Avatar type="initial" size="xsmall" initials="A" />
                <Avatar type="initial" size="xsmall" initials="B" />
                <Avatar type="initial" size="xsmall" initials="C" />
                <Avatar type="initial" size="xsmall" initials="D" />
              </AvatarGroup>
            </div>
          </div>

          <div className="av-showcase__group-card">
            <div className="av-showcase__group-info">
              <span className="av-showcase__group-label">Spaced</span>
              <p className="av-showcase__group-desc">
                Avatars sit side-by-side with a consistent gap, giving each member equal visual
                weight. Suits team listings or contributor grids.
              </p>
              <code className="av-showcase__type-code">spacing=&quot;spaced&quot;</code>
            </div>
            <div className="av-showcase__group-canvas">
              <AvatarGroup spacing="spaced" overflowCount={8} showOverflow>
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=4" alt="User 4" />
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=5" alt="User 5" />
                <Avatar type="image" size="xsmall" src="https://i.pravatar.cc/150?img=6" alt="User 6" />
              </AvatarGroup>
              <AvatarGroup spacing="spaced">
                <Avatar type="shape" size="xsmall" icon={<PersonIcon />} />
                <Avatar type="shape" size="xsmall" icon={<PersonIcon />} />
                <Avatar type="shape" size="xsmall" icon={<PersonIcon />} />
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>

      {/* ── Avatar Block ───────────────────────────────────────────────── */}
      <div className="av-showcase__block">
        <div className="av-showcase__block-header">
          <h3 className="av-showcase__block-title">Avatar Block</h3>
          <p className="av-showcase__block-subtitle">
            Pairs an avatar with a primary title and an optional description line. Commonly used in
            assignee selectors, user menus, team directories, and comment threads.
          </p>
        </div>

        <div className="av-showcase__block-canvas">
          <div className="av-showcase__block-grid">
            <div className="av-showcase__block-example">
              <span className="av-showcase__block-example-label">Image · with description</span>
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    size="medium"
                    src="https://i.pravatar.cc/150?img=7"
                    alt="Jane Doe"
                  />
                }
                title="Jane Doe"
                description="Product Designer"
              />
            </div>

            <div className="av-showcase__block-example">
              <span className="av-showcase__block-example-label">Initial · with description</span>
              <AvatarBlock
                avatar={<Avatar type="initial" size="medium" initials="A" />}
                title="Ahmed Al-Rashid"
                description="Engineering Lead"
              />
            </div>

            <div className="av-showcase__block-example">
              <span className="av-showcase__block-example-label">Shape · team / entity</span>
              <AvatarBlock
                avatar={<Avatar type="shape" size="medium" icon={<PersonIcon />} />}
                title="Design Team"
                description="Shared workspace"
              />
            </div>

            <div className="av-showcase__block-example">
              <span className="av-showcase__block-example-label">Image · title only</span>
              <AvatarBlock
                avatar={
                  <Avatar
                    type="image"
                    size="medium"
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Sara"
                  />
                }
                title="Sara Nguyen"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Usage note ─────────────────────────────────────────────────── */}
      <div className="av-showcase__usage">
        <div className="av-showcase__usage-icon" aria-hidden="true">ℹ</div>
        <div className="av-showcase__usage-content">
          <strong>Design note</strong> — Initials should be a single character (e.g.{' '}
          <code>A</code>, <code>B</code>). Multiple characters will overflow the avatar boundary
          at smaller sizes. The avatar automatically enforces <code>overflow: hidden</code>.
        </div>
      </div>

      {/* ── Storybook CTA ──────────────────────────────────────────────── */}
      <div className="av-showcase__cta">
        <div className="av-showcase__cta-text">
          <span className="av-showcase__cta-heading">
            Explore in Storybook
            <ExternalLinkIcon />
          </span>
          <span className="av-showcase__cta-body">
            Test all props, states, and combinations interactively — including the full size ×
            type matrix and group overflow stories.
          </span>
        </div>
        <a
          href="http://localhost:6006/?path=/story/components-avatar--initial-medium"
          target="_blank"
          rel="noopener noreferrer"
          className="av-showcase__cta-link"
        >
          Open Storybook
          <ArrowRightIcon />
        </a>
      </div>

    </section>
  )
}
