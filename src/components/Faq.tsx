import { FAQS } from '../data/siteContent'

export function Faq() {
  return (
    <section className="faq" id="faq">
      <div className="section-heading">
        <span className="eyebrow">Questions</span>
        <h2>Have questions? We are here to help</h2>
      </div>
      <div className="faq-list">
        {FAQS.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
