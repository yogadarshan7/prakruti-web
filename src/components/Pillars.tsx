import { PILLARS } from '../data/siteContent'

export function Pillars() {
  return (
    <section className="pillars" id="pillars">
      <div className="section-heading">
        <h2>Body, Mind & Speech</h2>
        <p>
          At Prakruti Yogashala we integrate nine disciplines — Yoga, Pranayama,
          Sanskrit, Meditation, Mantra, Yoga Nidra, Anatomy, Ayurveda, and Indian
          Classical Arts — to nourish the whole person.
        </p>
      </div>
      <div className="pillar-grid">
        {PILLARS.map((pillar) => (
          <article key={pillar.id} className="pillar-card">
            <img src={pillar.icon} alt="" className="pillar-icon" />
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
