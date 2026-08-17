import { UNIQUES } from '../data/siteContent'

export function WhyUs() {
  return (
    <section className="why" id="why">
      <div className="section-heading">
        <span className="eyebrow">Why choose us</span>
        <h2>What makes our teacher training different</h2>
        <p>
          The programme is not mass-produced. Small batches, specialist teachers,
          and a Gurukul rhythm in Tapovan.
        </p>
      </div>
      <div className="card-grid">
        {UNIQUES.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
