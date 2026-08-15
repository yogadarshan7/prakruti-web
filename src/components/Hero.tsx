import { BRAND } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <h1>{BRAND.tagline}</h1>
        <p className="hero-subtitle">{BRAND.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#prakruti">
            Discover Your Prakruti
          </a>
          <a
            className="btn btn-secondary"
            href={BRAND.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Yoga Courses
          </a>
        </div>
        <p className="hero-note">
          Join 2k+ people who have already changed their lives.
        </p>
      </div>
    </section>
  )
}
