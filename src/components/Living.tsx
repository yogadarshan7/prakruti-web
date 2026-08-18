import { INCLUSIONS, LIVING } from '../data/siteContent'

export function Living() {
  return (
    <section className="living" id="living">
      <div className="section-heading">
        <span className="eyebrow">Your home in the Himalayas</span>
        <h2>Comfortable living during training</h2>
        <p>
          India can feel intimidating the first time. The school handles water,
          meals, pickup, and housing so you can keep your attention on practice.
        </p>
      </div>
      <ul className="inclusion-list">
        {INCLUSIONS.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="card-grid">
        {LIVING.map((item) => (
          <article key={item.title} className="info-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
