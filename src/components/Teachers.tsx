import { TEACHERS } from '../data/siteContent'

export function Teachers() {
  return (
    <section className="teachers" id="teachers">
      <div className="section-heading">
        <span className="eyebrow">Faculty</span>
        <h2>Learn from specialist teachers</h2>
        <p>
          Asana, philosophy, anatomy, Ayurveda, mantra, and classical music —
          each taught by someone who actually practises that discipline.
        </p>
      </div>
      <ul className="teacher-grid">
        {TEACHERS.map((teacher) => (
          <li key={teacher.name} className="teacher-card">
            <h3>{teacher.name}</h3>
            <p>{teacher.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
