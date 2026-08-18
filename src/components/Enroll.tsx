import { BRAND } from '../data/siteContent'

export function Enroll() {
  return (
    <section className="enroll" id="enroll">
      <h2>Begin your training in the Himalayas</h2>
      <p>
        Speak with the school about dates, rooms, and which course fits. Fill an
        application, talk with an advisor, then reserve your seat with a
        deposit.
      </p>
      <div className="hero-actions">
        <a
          className="btn btn-primary"
          href={BRAND.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp {BRAND.phoneDisplay}
        </a>
        <a className="btn btn-secondary" href={`tel:${BRAND.phoneTel}`}>
          Call
        </a>
        <a className="btn btn-secondary" href={`mailto:${BRAND.email}`}>
          Email
        </a>
      </div>
    </section>
  )
}
