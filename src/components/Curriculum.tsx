import { LEARN } from '../data/siteContent'

export function Curriculum() {
  return (
    <section className="curriculum" id="learn">
      <div className="section-heading">
        <span className="eyebrow">What you will learn</span>
        <h2>Nine disciplines, one path</h2>
        <p>
          Asana is only part of the month. Philosophy, breath, sound, Ayurveda,
          and teaching sit in the same day.
        </p>
      </div>
      <div className="card-grid">
        {LEARN.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
