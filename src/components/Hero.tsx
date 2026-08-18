import { BRAND, STATS } from '../data/siteContent'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="header-badge">{BRAND.location}</p>
        <h1>{BRAND.tagline}</h1>
        <p className="hero-subtitle">{BRAND.subtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#courses">
            View teacher training
          </a>
          <a
            className="btn btn-secondary"
            href={BRAND.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp the school
          </a>
        </div>
        <p className="hero-note">
          Yoga teacher training school in Tapovan, Rishikesh — not a yoga
          holiday.
        </p>
      </div>
      <figure className="hero-photo">
        <img
          src="/assets/campus/hero.webp"
          alt="Yoga teacher training at Prakruti Yogashala in Rishikesh"
        />
      </figure>
      <ul className="stat-row">
        {STATS.map((stat) => (
          <li key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
