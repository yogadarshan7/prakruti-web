import { BRAND } from '../data/siteContent'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <img
          src="/assets/Prakruti-Yogashala.svg"
          alt={BRAND.name}
          className="footer-logo"
        />
        <p className="footer-tagline">{BRAND.address}</p>
        <div className="footer-links">
          <a href="#courses">Courses</a>
          <a href="#teachers">Teachers</a>
          <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
          <a href={`tel:${BRAND.phoneTel}`}>{BRAND.phoneDisplay}</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {BRAND.name}. Yoga teacher training
          school in Rishikesh.
        </p>
      </div>
    </footer>
  )
}
