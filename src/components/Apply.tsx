import { APPLY_STEPS, BRAND } from '../data/siteContent'

export function Apply() {
  return (
    <section className="apply" id="apply">
      <div className="section-heading">
        <span className="eyebrow">How to apply</span>
        <h2>Three steps to a seat</h2>
      </div>
      <ol className="apply-steps">
        {APPLY_STEPS.map((item) => (
          <li key={item.step} className="info-card">
            <span className="step-num">{item.step}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ol>
      <a
        className="btn btn-primary"
        href={BRAND.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp to start
      </a>
    </section>
  )
}
