import { useState, type HTMLAttributes } from 'react'
import './Testimonials.scss'

export interface TestimonialItem {
  /** Image URL for the testimonial */
  image?: string
  /** Alt text for the image */
  imageAlt?: string
  /** Testimonial quote text */
  quote: string
  /** Author name */
  name: string
  /** Author role or title */
  role: string
}

export interface TestimonialsProps extends HTMLAttributes<HTMLDivElement> {
  /** Section label displayed above the heading */
  label?: string
  /** Section heading */
  heading?: string
  /** Array of testimonial items */
  testimonials: TestimonialItem[]
  /** Show or hide the slider/pagination */
  showSlider?: boolean
}

const QuoteIcon = () => (
  <svg
    className="ds-testimonials__quote-icon"
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M29 18V40C28.9967 43.1816 27.7313 46.2319 25.4816 48.4816C23.2319 50.7313 20.1816 51.9967 17 52C16.4696 52 15.9609 51.7893 15.5858 51.4142C15.2107 51.0391 15 50.5304 15 50C15 49.4696 15.2107 48.9609 15.5858 48.5858C15.9609 48.2107 16.4696 48 17 48C19.1217 48 21.1566 47.1571 22.6569 45.6569C24.1571 44.1566 25 42.1217 25 40V38H10C8.93913 38 7.92172 37.5786 7.17157 36.8284C6.42143 36.0783 6 35.0609 6 34V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14H25C26.0609 14 27.0783 14.4214 27.8284 15.1716C28.5786 15.9217 29 16.9391 29 18ZM54 14H39C37.9391 14 36.9217 14.4214 36.1716 15.1716C35.4214 15.9217 35 16.9391 35 18V34C35 35.0609 35.4214 36.0783 36.1716 36.8284C36.9217 37.5786 37.9391 38 39 38H54V40C54 42.1217 53.1571 44.1566 51.6569 45.6569C50.1566 47.1571 48.1217 48 46 48C45.4696 48 44.9609 48.2107 44.5858 48.5858C44.2107 48.9609 44 49.4696 44 50C44 50.5304 44.2107 51.0391 44.5858 51.4142C44.9609 51.7893 45.4696 52 46 52C49.1816 51.9967 52.2319 50.7313 54.4816 48.4816C56.7313 46.2319 57.9967 43.1816 58 40V18C58 16.9391 57.5786 15.9217 56.8284 15.1716C56.0783 14.4214 55.0609 14 54 14Z"
      fill="currentColor"
    />
  </svg>
)

const ImagePlaceholder = () => (
  <div className="ds-testimonials__image-placeholder" aria-hidden="true">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M42 38V10c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4v28c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4ZM16 26l6 8 8-10 10 14H10l6-8Z"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  </div>
)

export const Testimonials = ({
  label = 'Testimonials',
  heading = 'A word from our community',
  testimonials,
  showSlider = true,
  className,
  ...rest
}: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const current = testimonials[activeIndex]
  if (!current) return null

  const padIndex = (i: number) => String(i + 1).padStart(2, '0')

  return (
    <section className={`ds-testimonials${className ? ` ${className}` : ''}`} {...rest}>
      {/* Header */}
      <div className="ds-testimonials__header">
        <span className="ds-testimonials__label">{label}</span>
        <h2 className="ds-testimonials__heading">{heading}</h2>
      </div>

      {/* Card */}
      <div className="ds-testimonials__card">
        {/* Vertical pagination */}
        {showSlider && testimonials.length > 1 && (
          <div className="ds-testimonials__pagination">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`ds-testimonials__page-btn${i === activeIndex ? ' ds-testimonials__page-btn--active' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span className="ds-testimonials__page-number">{padIndex(i)}</span>
                <span className="ds-testimonials__page-line" />
              </button>
            ))}
          </div>
        )}

        {/* Image */}
        <div className="ds-testimonials__image-container">
          {current.image ? (
            <img
              className="ds-testimonials__image"
              src={current.image}
              alt={current.imageAlt ?? current.name}
            />
          ) : (
            <ImagePlaceholder />
          )}
        </div>

        {/* Content */}
        <div className="ds-testimonials__content">
          <QuoteIcon />
          <blockquote className="ds-testimonials__quote">{current.quote}</blockquote>
          <div className="ds-testimonials__author">
            <span className="ds-testimonials__author-name">{current.name}</span>
            <span className="ds-testimonials__author-role">{current.role}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
