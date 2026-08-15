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
          <a href={BRAND.website} target="_blank" rel="noopener noreferrer">
            Yoga Teacher Training
          </a>
          <a
            href="https://www.prakrutiyogashala.com/ayurveda-retreat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ayurveda Retreat
          </a>
          <a
            href="https://www.prakrutiyogashala.com/about-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} {BRAND.name}. Traditional yoga rooted in
          Rishikesh.
        </p>
      </div>
    </footer>
  )
}
