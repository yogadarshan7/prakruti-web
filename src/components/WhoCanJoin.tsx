import { AUDIENCE } from '../data/siteContent'

export function WhoCanJoin() {
  return (
    <section className="audience" id="who">
      <div className="section-heading">
        <span className="eyebrow">Who can join</span>
        <h2>Who finds their home at Prakruti</h2>
        <p>If the intention is sincere, there is a place. This is not a yoga holiday.</p>
      </div>
      <div className="card-grid">
        {AUDIENCE.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
