import { BRAND } from '../data/siteContent'

export function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label={BRAND.name}>
          <img
            src="/assets/Prakruti-Yogashala.svg"
            alt={BRAND.name}
            className="brand-logo"
          />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <a href="/#courses">Courses</a>
          <a href="/#why">Why Prakruti</a>
          <a href="/#living">Living</a>
          <a href="/#teachers">Teachers</a>
          <a href="/#faq">FAQ</a>
          <a className="nav-cta" href={BRAND.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
