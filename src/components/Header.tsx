import { BRAND } from '../data/siteContent'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label={BRAND.name}>
          <img
            src="/assets/Prakruti-Yogashala.svg"
            alt={BRAND.name}
            className="brand-logo"
          />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#prakruti">Prakruti Assessment</a>
          <a href="#pillars">Our Approach</a>
          <a href={BRAND.website} target="_blank" rel="noopener noreferrer">
            Visit Full Site
          </a>
        </nav>
      </div>
      <p className="header-badge">{BRAND.location}</p>
    </header>
  )
}
